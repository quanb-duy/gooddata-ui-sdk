// (C) 2021-2022 GoodData Corporation

import { DashboardTester, preloadedTesterFactory } from "../../../tests/DashboardTester";
import { TestCorrelation } from "../../../tests/fixtures/Dashboard.fixtures";
import { RemoveDrillsForInsightWidget, setDrillForKpiWidget } from "../../../commands";
import { uriRef } from "@gooddata/sdk-model";
import { DashboardCommandFailed } from "../../../events";
import {
    KpiWidgetRef,
    SimpleDashboardIdentifier,
    SimpleSortedTableWidgetRef,
} from "../../../tests/fixtures/SimpleDashboard.fixtures";
import { legacyDashboardsActions } from "../../../store/legacyDashboards";
import { ILegacyDashboard } from "../../../../types";

describe("setDrillForKpiWidgetHandler", () => {
    const mockDashboard: ILegacyDashboard = {
        identifier: "foo",
        ref: uriRef("/gdc/md/foo"),
        tabs: [{ identifier: "tab1", title: "Tab 1" }],
        title: "Sample dashboard",
        uri: "/gdc/md/foo",
    };

    let Tester: DashboardTester;
    beforeEach(
        preloadedTesterFactory(async (tester) => {
            Tester = tester;
            Tester.dispatch(legacyDashboardsActions.setLegacyDashboards([mockDashboard]));
        }, SimpleDashboardIdentifier),
    );

    describe("set", () => {
        it("should emit the appropriate events for set drill for Kpi Widget command", async () => {
            await Tester.dispatchAndWaitFor(
                setDrillForKpiWidget(
                    KpiWidgetRef,
                    mockDashboard.ref,
                    mockDashboard.tabs[0].identifier,
                    TestCorrelation,
                ),
                "GDC.DASH/EVT.KPI_WIDGET.DRILL_SET",
            );

            expect(Tester.emittedEventsDigest()).toMatchSnapshot();
        });
    });

    describe("validate", () => {
        it("should fail if trying to set drills of non-existent widget", async () => {
            const event: DashboardCommandFailed<RemoveDrillsForInsightWidget> =
                await Tester.dispatchAndWaitFor(
                    setDrillForKpiWidget(
                        uriRef("missing"),
                        mockDashboard.ref,
                        mockDashboard.tabs[0].identifier,
                        TestCorrelation,
                    ),
                    "GDC.DASH/EVT.COMMAND.FAILED",
                );

            expect(event.payload.message).toMatchSnapshot();
            expect(event.payload.reason).toMatchSnapshot();
            expect(event.correlationId).toEqual(TestCorrelation);
        });

        it("should fail if trying to set drills to non-existent dashboard", async () => {
            const event: DashboardCommandFailed<RemoveDrillsForInsightWidget> =
                await Tester.dispatchAndWaitFor(
                    setDrillForKpiWidget(
                        KpiWidgetRef,
                        uriRef("missing"),
                        mockDashboard.tabs[0].identifier,
                        TestCorrelation,
                    ),
                    "GDC.DASH/EVT.COMMAND.FAILED",
                );

            expect(event.payload.message).toMatchSnapshot();
            expect(event.payload.reason).toMatchSnapshot();
            expect(event.correlationId).toEqual(TestCorrelation);
        });

        it("should fail if trying to set drills to invalid tab", async () => {
            const event: DashboardCommandFailed<RemoveDrillsForInsightWidget> =
                await Tester.dispatchAndWaitFor(
                    setDrillForKpiWidget(KpiWidgetRef, mockDashboard.ref, "missing", TestCorrelation),
                    "GDC.DASH/EVT.COMMAND.FAILED",
                );

            expect(event.payload.message).toMatchSnapshot();
            expect(event.payload.reason).toMatchSnapshot();
            expect(event.correlationId).toEqual(TestCorrelation);
        });

        it("should fail if trying to set drills of insight widget", async () => {
            const event: DashboardCommandFailed<RemoveDrillsForInsightWidget> =
                await Tester.dispatchAndWaitFor(
                    setDrillForKpiWidget(
                        SimpleSortedTableWidgetRef,
                        mockDashboard.ref,
                        mockDashboard.tabs[0].identifier,
                        TestCorrelation,
                    ),
                    "GDC.DASH/EVT.COMMAND.FAILED",
                );

            expect(event.payload.message).toMatchSnapshot();
            expect(event.payload.reason).toMatchSnapshot();
            expect(event.correlationId).toEqual(TestCorrelation);
        });
    });
});