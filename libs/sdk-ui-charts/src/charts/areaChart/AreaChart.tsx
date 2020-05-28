// (C) 2007-2019 GoodData Corporation
import {
    IAttributeOrMeasure,
    applyRatioRule,
    IAttribute,
    IFilter,
    newBucket,
    ISortItem,
} from "@gooddata/sdk-model";
import { truncate } from "../_commons/truncate";
import { IChartConfig, IBucketChartProps, ViewByAttributesLimit } from "../../interfaces";
import { BucketNames } from "@gooddata/sdk-ui";
import { stackedChartDimensions } from "../_commons/dimensions";
import { CoreAreaChart } from "./CoreAreaChart";
import { IChartDefinition } from "../_commons/chartDefinition";
import isNil = require("lodash/isNil");
import { withChart } from "../_base/withChart";
import { sanitizeConfig } from "../_commons/sanitizeStacking";

//
// Internals
//

const areaChartDefinition: IChartDefinition<IAreaChartBucketProps, IAreaChartProps> = {
    chartName: "AreaChart",
    bucketPropsKeys: ["measures", "viewBy", "stackBy", "filters", "sortBy"],
    bucketsFactory: props => {
        const { measures, viewBy, stackBy } = getBucketsProps(props);
        const sanitizedMeasures = applyRatioRule(measures);
        return [
            newBucket(BucketNames.MEASURES, ...sanitizedMeasures),
            newBucket(BucketNames.VIEW, ...viewBy),
            newBucket(BucketNames.STACK, ...stackBy),
        ];
    },
    executionFactory: (props, buckets) => {
        const { backend, workspace } = props;

        return backend
            .withTelemetry("AreaChart", props)
            .workspace(workspace)
            .execution()
            .forBuckets(buckets, props.filters)
            .withSorting(...props.sortBy)
            .withDimensions(stackedChartDimensions);
    },
    propOverridesFactory: (props, buckets) => {
        const config = getConfigProps(props);

        return {
            config: sanitizeConfig(buckets, config),
        };
    },
    onBeforePropsConversion: verifyBuckets,
};

function getStackConfiguration(config: IChartConfig = {}): IChartConfig {
    const { stackMeasures, stackMeasuresToPercent } = config;
    if (isNil(stackMeasures) && isNil(stackMeasuresToPercent)) {
        return config;
    }
    return {
        ...config,
        stacking: Boolean(stackMeasuresToPercent) || Boolean(stackMeasures),
    };
}

export function getBucketsProps(
    props: IAreaChartBucketProps,
): {
    measures: IAttributeOrMeasure[];
    viewBy: IAttribute[];
    stackBy: IAttribute[];
} {
    const { measures, stackBy } = props;
    const viewBy = truncate(props.viewBy, ViewByAttributesLimit);

    if (viewBy.length <= 1) {
        return {
            measures: measures || [],
            viewBy,
            stackBy: stackBy ? [stackBy] : [],
        };
    }

    // for case viewBy 2 attributes
    const [firstMeasure] = measures; // only take first measure
    const [firstAttribute, secondAttribute] = viewBy; // only take first two attributes

    return {
        measures: [firstMeasure],
        viewBy: [firstAttribute], // one attribute for viewBy which slices measure vertically
        stackBy: [secondAttribute], // one attribute for stackBy which slices measure horizontally
    };
}

export function getConfigProps(props: IAreaChartProps): IChartConfig {
    const viewBy = truncate(props.viewBy, ViewByAttributesLimit);
    if (viewBy.length <= 1) {
        return getStackConfiguration(props.config);
    }

    return {
        ...props.config,
        stacking: false, // area sections are always overlapped with two attributes
        stackMeasures: false,
        stackMeasuresToPercent: false,
    };
}

/**
 * Show warning to SDK user in console log
 * @param props
 */
export function verifyBuckets(props: IAreaChartProps): void {
    const viewBy = truncate(props.viewBy, ViewByAttributesLimit);
    if (viewBy.length <= 1) {
        return;
    }

    const { measures = [], stackBy } = props;
    if (measures.length > 1 || stackBy) {
        // tslint:disable-next-line: no-console
        console.warn(
            "When there are two attributes in viewBy, only first measure is taken and attribute in stackBy is ignored",
        );
    }
}

//
// Public interface
//

/**
 * @public
 */
export interface IAreaChartBucketProps {
    /**
     * Specify one or more measures to display on area chart.
     *
     * Note: it is possible to also include an attribute object among measures. In that case cardinality of the
     * attribute elements will be charted.
     */
    measures: IAttributeOrMeasure[];

    /**
     * Optionally specify attributes to slice and optionally stack the area chart.
     *
     * -  If you specify single attribute, then elements of this attribute will be used to slice the measures along the
     *    X axis.
     *
     * -  If you specify two attributes, then the first attribute will be used to slice the measures along the X axis,
     *    and the second attribute will be used for stacking.
     *
     * -  If you specify three or more attributes, only the first two attributes will be used.
     *
     * Note: using two measures in viewBy is a convenience. It is equivalent to specifying single viewBy and single
     * stackBy attribute. In either case, as soon as the area chart is stacked, only the first measure will be
     * calculated and charted.
     */
    viewBy?: IAttribute | IAttribute[];

    /**
     * Optionally specify attribute to stack by. This is only applicable if you specify at most single viewBy
     * attribute.
     *
     * Note: stacking area chart using attribute elements means only a single measure can be charted. The component
     * will take the first measure.
     */
    stackBy?: IAttribute;

    /**
     * Optionally specify filters to apply on the data to chart.
     */
    filters?: IFilter[];

    /**
     * Optionally specify how to sort the data to chart.
     */
    sortBy?: ISortItem[];
}

/**
 * @public
 */
export interface IAreaChartProps extends IBucketChartProps, IAreaChartBucketProps {}

/**
 * [AreaChart](http://sdk.gooddata.com/gooddata-ui/docs/area_chart_component.html)
 *
 * Area chart shows data as an area under a line intersecting dots. It can display either:
 *
 * - multiple measures sliced by a single attribute, as different areas
 * - or a single measure split by one attribute into multiple areas with points intersecting attribute values
 *
 * Areas for multiple measures stack by default. Alternatively, the areas can overlap if ```{ stackMeasures: false }```.
 *
 * @remarks See {@link IAreaChartProps} to learn how it is possible to configure the AreaChart
 * @public
 */
export const AreaChart = withChart(areaChartDefinition)(CoreAreaChart);
