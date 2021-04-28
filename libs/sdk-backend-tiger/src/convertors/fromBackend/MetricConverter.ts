import { JsonApiMetricOutDocument } from "@gooddata/api-client-tiger";
import { newMeasureMetadataObject } from "@gooddata/sdk-backend-base";
import { IMeasureMetadataObject } from "@gooddata/sdk-backend-spi";
import { idRef } from "@gooddata/sdk-model";

export function convertMetricFromBackend(data: JsonApiMetricOutDocument): IMeasureMetadataObject {
    const { id, attributes } = data.data;
    const ref = idRef(id, "measure");

    return newMeasureMetadataObject(ref, (m) =>
        m
            .id(id)
            .title(attributes?.title || "")
            .description(attributes?.description || "")
            .expression(attributes.content.maql)
            .format(attributes.content.format || "##,#"),
    );
}
