// (C) 2019-2020 GoodData Corporation
import React from "react";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { IFilter, IColorPalette, ObjRef } from "@gooddata/sdk-model";

import { IVisCallbacks } from "../internal/interfaces/Visualization";
import { ILocale, ILoadingProps, IErrorProps, IDrillableItem, IHeaderPredicate } from "@gooddata/sdk-ui";
import { IChartConfig } from "@gooddata/sdk-ui-charts";
import { IGeoConfig } from "@gooddata/sdk-ui-geo";
import { IPivotTableConfig } from "@gooddata/sdk-ui-pivot";

/**
 * @public
 */
export interface IInsightViewProps extends Partial<IVisCallbacks> {
    /**
     * Backend to work with.
     *
     * Note: the backend must come either from this property or from BackendContext. If you do not specify
     * backend here, then the executor MUST be rendered within an existing BackendContext.
     */
    backend?: IAnalyticalBackend;

    /**
     * Workspace where the insight exists.
     *
     * Note: the workspace must come either from this property or from WorkspaceContext. If you do not specify
     * workspace here, then the executor MUST be rendered within an existing WorkspaceContext.
     */
    workspace?: string;

    /**
     * Reference to the insight to render. This can be specified by either object reference using URI or using identifier.
     *
     * For convenience it is also possible to specify just the identifier of the insight.
     */
    insight: ObjRef | string;

    /**
     * Additional filters to apply on top of the insight.
     */
    filters?: IFilter[];

    /**
     * Configure chart drillability; e.g. which parts of the charts can be clicked.
     */
    drillableItems?: Array<IDrillableItem | IHeaderPredicate>;

    /**
     * Configure color palette to use for the chart. If you do not specify this, then the palette will be
     * obtained from style settings stored on the backend.
     */
    colorPalette?: IColorPalette;

    /**
     * When embedding insight rendered by a chart, you can specify extra options to merge with existing
     * options saved for the insight.
     */
    config?: IChartConfig | IGeoConfig | IPivotTableConfig | any;

    /**
     * Locale to use for localization of texts appearing in the chart.
     *
     * Note: text values coming from the data itself are not localized.
     */
    locale?: ILocale;

    /**
     * Indicates that the execution to obtain the data for the insight should be an 'execution by reference'.
     *
     * Execution by reference means that the InsightView will ask analytical backend to compute results for an insight
     * which is stored on the backend by specifying link to the insight, additional filters and description how
     * to organize the data.
     *
     * Otherwise, a freeform execution is done, in which the InsightView will send to backend the full execution
     * definition of what to compute.
     *
     * This distinction is in place because some backends MAY want to prohibit users from doing freeform executions
     * and only allow computing data for set of insights created by admins.
     *
     * Note: the need for execute by reference is rare. You will typically be notified by the solution admin to use
     * this mode.
     */
    executeByReference?: boolean;

    /**
     * Component to render if embedding fails.
     */
    ErrorComponent?: React.ComponentType<IErrorProps>;

    /**
     * Component to render while the insight is loading.
     */
    LoadingComponent?: React.ComponentType<ILoadingProps>;
}
