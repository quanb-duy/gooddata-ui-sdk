// (C) 2007-2019 GoodData Corporation

import { IAreaChartProps } from "@gooddata/sdk-ui";
import areaScenarios from "../../../scenarios/charts/areaChart";
import { ScenarioTestInput } from "../../../src";
import { mountChartAndCapture } from "../../_infra/render";
import { cleanupCoreChartProps } from "../../_infra/utils";
import flatMap = require("lodash/flatMap");

describe("AreaChart", () => {
    const Scenarios: Array<ScenarioTestInput<IAreaChartProps>> = flatMap(areaScenarios, group =>
        group.forTestTypes("api").asTestInput(),
    );

    describe.each(Scenarios)("with %s", (_desc, Component, propsFactory) => {
        const interactions = mountChartAndCapture(Component, propsFactory);

        it("should create expected execution definition", () => {
            expect(interactions.triggeredExecution).toMatchSnapshot();
        });

        it("should create expected props for core chart", () => {
            expect(interactions.passedToBaseChart).toBeDefined();
            expect(interactions.passedToBaseChart!.execution).toBeDefined();
            expect(cleanupCoreChartProps(interactions.passedToBaseChart)).toMatchSnapshot();
        });
    });
});
