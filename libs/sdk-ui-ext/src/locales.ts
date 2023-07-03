// (C) 2019-2023 GoodData Corporation
import { MessageDescriptor, defineMessages } from "react-intl";

//NOTE: Follow up ticket for move all messages: https://gooddata.atlassian.net/browse/FET-1050
export const titles: Record<string, MessageDescriptor> = defineMessages({
    measures_column: { id: "dashboard.bucket.measures_title.column" },
    measures_table: { id: "dashboard.bucket.measures_title.table" },
    measures_bar: { id: "dashboard.bucket.measures_title.bar" },
    measures_line: { id: "dashboard.bucket.measures_title.line" },
    measures_area: { id: "dashboard.bucket.measures_title.area" },
    measures_pie: { id: "dashboard.bucket.measures_title.pie" },
    measures_funnel: { id: "dashboard.bucket.measures_title.funnel" },
    measures_pyramid: { id: "dashboard.bucket.measures_title.pyramid" },
    measures_treemap: { id: "dashboard.bucket.measures_title.treemap" },
    measures_donut: { id: "dashboard.bucket.measures_title.donut" },
    measures_heatmap: { id: "dashboard.bucket.measures_title.heatmap" },
    measures_headline: { id: "dashboard.bucket.measures_title.headline" },
    measures_scatter: { id: "dashboard.bucket.measures_title.scatter" },
    measures_combo: { id: "dashboard.bucket.measures_title.combo" },
    measures_xirr: { id: "dashboard.bucket.measures_title.xirr" },
    measures_bubble: { id: "dashboard.bucket.measures_title.bubble" },
    measures_bullet: { id: "dashboard.bucket.measures_title.bullet" },
    measures_sankey: { id: "dashboard.bucket.measures_title.sankey" },
    measures_dependencywheel: { id: "dashboard.bucket.measures_title.dependencywheel" },
    measures_waterfall: { id: "dashboard.bucket.measures_title.waterfall" },
    secondary_measures_headline: { id: "dashboard.bucket.secondary_measures_title.headline" },
    secondary_measures_scatter: { id: "dashboard.bucket.secondary_measures_title.scatter" },
    secondary_measures_combo: { id: "dashboard.bucket.secondary_measures_title.combo" },
    secondary_measures_bubble: { id: "dashboard.bucket.secondary_measures_title.bubble" },
    secondary_measures_bullet: { id: "dashboard.bucket.secondary_measures_title.bullet" },
    tertiary_measures_bubble: { id: "dashboard.bucket.tertiary_measures_title.bubble" },
    tertiary_measures_bullet: { id: "dashboard.bucket.tertiary_measures_title.bullet" },
    attribute_scatter: { id: "dashboard.bucket.attribute_title.scatter" },
    attribute_xirr: { id: "dashboard.bucket.attribute_title.xirr" },
    attribute_table: { id: "dashboard.bucket.attribute_title.table" },
    attribute_from_sankey: { id: "dashboard.bucket.attribute_from_title.sankey" },
    attribute_to_sankey: { id: "dashboard.bucket.attribute_to_title.sankey" },
    attribute_from_dependencywheel: { id: "dashboard.bucket.attribute_from_title.dependencywheel" },
    attribute_to_dependencywheel: { id: "dashboard.bucket.attribute_to_title.dependencywheel" },
    location_pushpin: { id: "dashboard.bucket.location_title.pushpin" },
    size_pushpin: { id: "dashboard.bucket.size_title.pushpin" },
    color_pushpin: { id: "dashboard.bucket.color_title.pushpin" },
    view_bubble: { id: "dashboard.bucket.view_title.bubble" },
    view_pie: { id: "dashboard.bucket.view_title.pie" },
    view_treemap: { id: "dashboard.bucket.view_title.treemap" },
    view_donut: { id: "dashboard.bucket.view_title.donut" },
    view_funnel: { id: "dashboard.bucket.view_title.funnel" },
    view_pyramid: { id: "dashboard.bucket.view_title.pyramid" },
    view_column: { id: "dashboard.bucket.view_title.column" },
    view_bar: { id: "dashboard.bucket.view_title.bar" },
    view_area: { id: "dashboard.bucket.view_title.area" },
    view_bullet: { id: "dashboard.bucket.view_title.bullet" },
    view_heatmap: { id: "dashboard.bucket.view_title.heatmap" },
    view_combo: { id: "dashboard.bucket.view_title.combo" },
    view_waterfall: { id: "dashboard.bucket.view_title.waterfall" },
    stack_column: { id: "dashboard.bucket.stack_title.column" },
    stack_bar: { id: "dashboard.bucket.stack_title.bar" },
    stack_area: { id: "dashboard.bucket.stack_title.area" },
    stack_heatmap: { id: "dashboard.bucket.stack_title.heatmap" },
    segment_line: { id: "dashboard.bucket.segment_title.line" },
    segment_treemap: { id: "dashboard.bucket.segment_title.treemap" },
    segment_pushpin: { id: "dashboard.bucket.segment_title.pushpin" },
    trend_line: { id: "dashboard.bucket.trend_title.line" },
    columns_table: { id: "dashboard.bucket.columns_title.table" },
});

export const subtitles: Record<string, MessageDescriptor> = defineMessages({
    measures_headline: { id: "dashboard.bucket.measures_subtitle.headline" },
    measures_scatter: { id: "dashboard.bucket.measures_subtitle.scatter" },
    measures_combo: { id: "dashboard.bucket.measures_subtitle.combo" },
    measures_bubble: { id: "dashboard.bucket.measures_subtitle.bubble" },
    measures_bullet: { id: "dashboard.bucket.measures_subtitle.bullet" },
    secondary_measures_headline: { id: "dashboard.bucket.secondary_measures_subtitle.headline" },
    secondary_measures_scatter: { id: "dashboard.bucket.secondary_measures_subtitle.scatter" },
    secondary_measures_combo: { id: "dashboard.bucket.secondary_measures_subtitle.combo" },
    secondary_measures_bubble: { id: "dashboard.bucket.secondary_measures_subtitle.bubble" },
    secondary_measures_bullet: { id: "dashboard.bucket.secondary_measures_subtitle.bullet" },
    tertiary_measures_bubble: { id: "dashboard.bucket.tertiary_measures_subtitle.bubble" },
    tertiary_measures_bullet: { id: "dashboard.bucket.tertiary_measures_subtitle.bullet" },
    attribute_from_sankey: { id: "dashboard.bucket.attribute_from_subtitle.sankey" },
    attribute_to_sankey: { id: "dashboard.bucket.attribute_to_subtitle.sankey" },
    attribute_from_dependencywheel: { id: "dashboard.bucket.attribute_from_subtitle.dependencywheel" },
    attribute_to_dependencywheel: { id: "dashboard.bucket.attribute_to_subtitle.dependencywheel" },
    size_pushpin: { id: "dashboard.bucket.size_subtitle.pushpin" },
    color_pushpin: { id: "dashboard.bucket.color_subtitle.pushpin" },
});

export const messages: Record<string, MessageDescriptor> = defineMessages({
    axisMinWarning: { id: "properties.axis.min.warning" },
    axisMaxWarning: { id: "properties.axis.max.warning" },
    explanationMeasure: { id: "sorting.disabled.explanation.measure" },
    explanationAttribute: { id: "sorting.disabled.explanation.attribute" },
    or: { id: "or" },
    metricStack: { id: "dashboard.bucket.metric_stack_by_warning" },
    categoryStack: { id: "dashboard.bucket.category_stack_by_warning" },
    metricView: { id: "dashboard.bucket.metric_view_by_warning" },
    categoryView: { id: "dashboard.bucket.category_view_by_warning" },
    viewStack: { id: "dashboard.bucket.view_stack_by_warning" },
    stackView: { id: "dashboard.bucket.stack_view_by_warning" },
    measureStack: { id: "dashboard.bucket.measure_stack_by_warning" },
    heading: { id: "dashboard.error.missing_primary_bucket_item.heading" },
    text: { id: "dashboard.error.missing_primary_bucket_item.text" },
    column: { id: "dashboard.bucket.combo.subtitle.column" },
    line: { id: "dashboard.bucket.combo.subtitle.line" },
    area: { id: "dashboard.bucket.combo.subtitle.area" },
    metricSegment: { id: "dashboard.bucket.metric_segment_by_warning" },
    categorySegment: { id: "dashboard.bucket.category_segment_by_warning" },
    category: { id: "dashboard.bucket.category_category_by_warning" },
    autoDefault: { id: "properties.auto_default" },
    extraSmall: { id: "properties.points.size.extra_small" },
    small: { id: "properties.points.size.small" },
    normal: { id: "properties.points.size.normal" },
    large: { id: "properties.points.size.large" },
    extraLarge: { id: "properties.points.size.extra_large" },
    areaAutoDefault: { id: "properties.viewport.area.auto_default" },
    areaWorld: { id: "properties.viewport.area.world" },
    areaContinents: { id: "properties.viewport.area.continents" },
    areaContinent_af: { id: "properties.viewport.area.continent_af" },
    areaContinent_na: { id: "properties.viewport.area.continent_na" },
    areaContinent_sa: { id: "properties.viewport.area.continent_sa" },
    areaContinent_as: { id: "properties.viewport.area.continent_as" },
    areaContinent_au: { id: "properties.viewport.area.continent_au" },
    areaContinent_eu: { id: "properties.viewport.area.continent_eu" },
    rotation0: { id: "properties.rotation.0" },
    rotation30: { id: "properties.rotation.30" },
    rotation60: { id: "properties.rotation.60" },
    rotation90: { id: "properties.rotation.90" },
    formatInherit: { id: "properties.axis.format.inherit" },
    formatInfoInherit: { id: "properties.axis.format.info.inherit" },
    positionUp: { id: "properties.legend.position.up" },
    positionDown: { id: "properties.legend.position.down" },
    positionRight: { id: "properties.legend.position.right" },
    positionLeft: { id: "properties.legend.position.left" },
    dataLabelsAuto: { id: "properties.canvas.dataLabels.auto" },
    dataLabelsShow: { id: "properties.canvas.dataLabels.show" },
    dataLabelsHide: { id: "properties.canvas.dataLabels.hide" },
    totalLabelsAuto: { id: "properties.canvas.totalLabels.auto" },
    totalLabelsShow: { id: "properties.canvas.totalLabels.show" },
    totalLabelsHide: { id: "properties.canvas.totalLabels.hide" },
    dataPointsAuto: { id: "properties.canvas.dataPoints.auto" },
    dataPointsShow: { id: "properties.canvas.dataPoints.show" },
    dataPointsHide: { id: "properties.canvas.dataPoints.hide" },
    axisPositionLeft: { id: "properties.axis.name.position.left" },
    axisPositionCenter: { id: "properties.axis.name.position.center" },
    axisPositionRight: { id: "properties.axis.name.position.right" },
    axisPositionTop: { id: "properties.axis.name.position.top" },
    axisPositionMiddle: { id: "properties.axis.name.position.middle" },
    axisPositionBottom: { id: "properties.axis.name.position.bottom" },
    notApplicable: { id: "properties.not_applicable" },
    exportUnsupportedColors: { id: "export_unsupported.colors" },
    canvasTitle: { id: "properties.canvas.title" },
    canvasGridLine: { id: "properties.canvas.gridline" },
    canvasLabelsPercentages: { id: "properties.canvas.labels.percentages" },
    canvasLabelsPercentagesInfo: { id: "properties.canvas.labels.percentages.info" },
    canvasLabelsPercentagesDisabled: { id: "properties.canvas.labels.percentages.disabled" },
    yaxisTitle: { id: "properties.yaxis.title" },
    xaxisTitle: { id: "properties.xaxis.title" },
    pointsTitle: { id: "properties.points.title" },
    pointsGroupNearbyPoints: { id: "properties.points.groupNearbyPoints" },
    pointsMapTitle: { id: "properties.map.title" },
    viewportAreaTitle: { id: "properties.viewport.area.title" },
    autoPlaceholder: { id: "properties.auto_placeholder" },
    dataLabels: { id: "properties.canvas.dataLabels" },
    totalLabels: { id: "properties.canvas.totalLabels" },
    dataPoints: { id: "properties.canvas.dataPoints" },
    axisLabels: { id: "properties.axis.labels" },
    axisRotation: { id: "properties.axis.rotation" },
    axisFormat: { id: "properties.axis.format" },
    axisName: { id: "properties.axis.name" },
    axisNamePosition: { id: "properties.axis.name.position" },
    axisMin: { id: "properties.axis.min" },
    axisMax: { id: "properties.axis.max" },
    axisScale: { id: "properties.axis.scale" },
    axisLeft: { id: "properties.axis.left" },
    axisRight: { id: "properties.axis.right" },
    axisTop: { id: "properties.axis.top" },
    axisBottom: { id: "properties.axis.bottom" },
    pointsSizeTitle: { id: "properties.points.size.title" },
    pointsSizeMinTitle: { id: "properties.points.size.min.title" },
    pointsSizeMaxTitle: { id: "properties.points.size.max.title" },
    customColor: { id: "gs.color-dropdown.custom-color" },
    resetColors: { id: "properties.colors.reset-colors" },
    unsupportedColors: { id: "properties.colors.unsupported" },
    colors: { id: "properties.colors" },
    position: { id: "properties.legend.position" },
    title: { id: "properties.legend.title" },
    canvasContinuousLineLabel: { id: "properties.canvas.continuousLine.label" },
    canvasContinuousLineTooltip: { id: "properties.canvas.continuousLine.tooltip" },
    totalTitle: { id: "properties.total.title" },
    totalNameLabel: { id: "properties.total.name" },
    totalToggleTooltip: { id: "properties.total.tooltip" },
    totalMeasuresTooltip: { id: "properties.total.measures.tooltip" },
    colorTotalLabel: { id: "properties.color.total" },
    colorPositiveLabel: { id: "properties.color.positive" },
    colorNegativeLabel: { id: "properties.color.negative" },
    metricsPositionTitle: { id: "properties.metrics.title" },
    metricsPositionLabel: { id: "properties.metrics.position" },
    metricsPositionColumns: { id: "properties.metrics.position.columns" },
    metricsPositionRows: { id: "properties.metrics.position.rows" },
    inColumns: { id: "dashboard.bucket.table.subtitle.columns" },
    inRows: { id: "dashboard.bucket.table.subtitle.rows" },
});
