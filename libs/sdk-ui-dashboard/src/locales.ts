// (C) 2019-2024 GoodData Corporation
import { MessageDescriptor, defineMessages } from "react-intl";

export const messages: Record<string, MessageDescriptor> = defineMessages({
    messagesDashboardSaveSuccess: { id: "messages.dashboardSaveSuccess" },
    messagesDashboardSaveFailed: { id: "messages.dashboardSaveFailed" },
    messagesExportResultStart: { id: "messages.exportResultStart" },
    messagesExportResultSuccess: { id: "messages.exportResultSuccess" },
    messagesExportResultRestrictedError: { id: "messages.exportResultRestrictedError" },
    messagesExportResultError: { id: "messages.exportResultError" },
    messagesSharingChangedSuccess: { id: "messages.sharingChangedSuccess" },
    messagesSharingChangedError: { id: "messages.sharingChangedError.general" },
    messagesSharingDialogError: { id: "messages.sharingDialogError.general" },
    scheduleEmailSubmitError: { id: "dialogs.schedule.email.submit.error" },
    scheduleEmailSubmitSuccess: { id: "dialogs.schedule.email.submit.success" },
    scheduleEmailSaveError: { id: "dialogs.schedule.email.save.error" },
    scheduleEmailSaveSuccess: { id: "dialogs.schedule.email.save.success" },
    scheduleEmailDeleteSuccess: { id: "dialogs.schedule.email.delete.success" },
    scheduleManagementLoadError: { id: "dialogs.schedule.management.load.error" },
    scheduleManagementDeleteError: { id: "dialogs.schedule.management.delete.error" },

    scheduleManagementTabUser: { id: "dialogs.schedule.management.tab.user" },
    scheduleManagementTabAll: { id: "dialogs.schedule.management.tab.all" },
    scheduleManagementNoSchedules: { id: "dialogs.schedule.management.noSchedules" },
    scheduleManagementNoSchedulesByUser: { id: "dialogs.schedule.management.noSchedules.byUser" },

    saveAsNewAlertsAndEmailsMessage: { id: "dialogs.save.as.new.alertsAndEmailsMessage" },
    saveAsNewAlertsMessage: { id: "dialogs.save.as.new.alertsMessage" },
    saveAsNewEmailsMessage: { id: "dialogs.save.as.new.emailsMessage" },
    alertMessageRelativePresetInPeriod: { id: "filters.alertMessage.relativePreset.inPeriod" },
    alertMessageRelativePreset: { id: "filters.alertMessage.relativePreset" },
    scheduleEmailOptionRecepientInvalid: { id: "options.menu.schedule.email.recipient.invalid" },
    scheduleEmailOptionRecepientExternalNotAllowed: {
        id: "options.menu.schedule.email.recipient.external.not.allowed",
    },
    tabsMy: { id: "gs.visualizationsList.tabs.my" },
    tabsAll: { id: "gs.visualizationsList.tabs.all" },
    controlButtonsSaveValue: { id: "controlButtons.save.value" },
    controlButtonsSaveAndPublishValue: { id: "controlButtons.saveAndPublish.value" },
    controlButtonsSaveAndPublishTitle: { id: "controlButtons.saveAndPublish.title" },
    controlButtonsSaveAsPrivateTitle: { id: "controlButtons.saveAsPrivate.title" },
    controlButtonsSaveAndPublishNoChanges: { id: "controlButtons.saveAndPublish.disable.noChanges.title" },
    controlButtonsSaveAndPublishEmpty: { id: "controlButtons.saveAndPublish.disable.empty.title" },

    scheduleDialogEmailRepeats_custom: { id: "dialogs.schedule.email.repeats.types.custom" },
    scheduleDialogEmailRepeats_daily: { id: "dialogs.schedule.email.repeats.types.daily" },
    scheduleDialogEmailRepeats_monthly: { id: "dialogs.schedule.email.repeats.types.monthly" },
    scheduleDialogEmailRepeats_weekly: { id: "dialogs.schedule.email.repeats.types.weekly" },
    scheduleDialogEmailRepeatsExecuteOn_dayOfMonth: {
        id: "dialogs.schedule.email.repeats.execute.on.dayOfMonth",
    },
    scheduleDialogEmailRepeatsExecuteOn_dayOfWeek: {
        id: "dialogs.schedule.email.repeats.execute.on.dayOfWeek",
    },
    scheduleDialogEmailRepeatsFrequencies_day: { id: "dialogs.schedule.email.repeats.frequencies.day" },
    scheduleDialogEmailRepeatsFrequencies_month: { id: "dialogs.schedule.email.repeats.frequencies.month" },
    scheduleDialogEmailRepeatsFrequencies_week: { id: "dialogs.schedule.email.repeats.frequencies.week" },

    filterHiddenTooltip: { id: "filter.visibilityMode.tooltip.hidden" },
    filterReadonlyInEditModeTooltip: { id: "filter.visibilityMode.tooltip.readonly.editMode" },
    filterReadonlyInViewModeTooltip: { id: "filter.visibilityMode.tooltip.readonly.viewMode" },
    filterConfigurationModeActiveTitle: { id: "filter.configuration.mode.interactive.title" },
    filterConfigurationModeHiddenTitle: { id: "filter.configuration.mode.hidden.title" },
    filterConfigurationModeReadOnlyTitle: { id: "filter.configuration.mode.locked.title" },
    filterConfigurationModeActiveTooltip: { id: "filter.configuration.mode.interactive.tooltip" },
    filterConfigurationModeHiddenTooltip: { id: "filter.configuration.mode.hidden.tooltip" },
    filterConfigurationModeReadOnlyTooltip: { id: "filter.configuration.mode.locked.tooltip" },
    filterConfigurationModeTitle: { id: "filter.configuration.mode.title" },
    filterConfigurationTitleTitle: { id: "attributesDropdown.title" },
    filterConfigurationTitleReset: { id: "attributesDropdown.title.reset" },
    dateFilterDropdownConfigurationHeader: { id: "dateFilterDropdown.configuration" },
    dateFilterDropdownConfigurationSaveText: { id: "dateFilterDropdown.save" },
    dateFilterDropdownConfigurationCancelText: { id: "gs.list.cancel" },
    filterResetButtonTooltip: { id: "filter.resetButton.tooltip" },
    filterAddValuesLimit: { id: "attributesDropdown.valuesLimiting.addLink" },
    filterAddValuesLimitPopupSearchPlaceholder: { id: "attributesDropdown.valuesLimiting.searchPlaceholder" },
    filterAddValuesLimitPopupSearchNoMatch: { id: "attributesDropdown.valuesLimiting.searchNoMatch" },
    filterAddValuesLimitPopupNoMetrics: { id: "attributesDropdown.valuesLimiting.metricsEmpty" },
    filterAddValuesLimitPopupNoFilters: { id: "attributesDropdown.valuesLimiting.filtersEmpty" },
    filterAddValuesLimitNoData: { id: "attributesDropdown.valuesLimiting.empty" },
    filterAddMetricTitle: { id: "attributesDropdown.valuesLimiting.addMetricTitle" },
    filterAddFilterTitle: { id: "attributesDropdown.valuesLimiting.addFilterTitle" },
    filterAddItemTitle: { id: "attributesDropdown.valuesLimiting.addItemTitle" },
    filterCountMetricTitle: { id: "attributesDropdown.valuesLimiting.countAttribute" },
    filterSumMetricTitle: { id: "attributesDropdown.valuesLimiting.sumFact" },
    filterUnknownItemTitle: { id: "attributesDropdown.valuesLimiting.unknownItem" },

    drillToDashboardConfig: { id: "configurationPanel.drillConfig.drillIntoDashboard" },
    drillIntoInsight: { id: "configurationPanel.drillConfig.drillIntoInsight" },
    drillDownConfig: { id: "configurationPanel.drillConfig.drillDown" },
    drillToUrlConfig: { id: "configurationPanel.drillConfig.drillIntoUrl" },
    disableDrillDownToolTip: { id: "configurationPanel.drillConfig.disableDrillDownTooltip" },
    disableUsedDrillDownTooltip: { id: "configurationPanel.drillConfig.alreadyUsedTooltip" },
    filterDropzoneTooltip: { id: "filterBar.filter.dropzone.tooltip" },
    filterDropzoneTooltipGeneric: { id: "filterBar.filter.dropzone.tooltip.generic" },
});
