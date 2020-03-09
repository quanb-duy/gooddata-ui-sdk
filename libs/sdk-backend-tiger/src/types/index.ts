// (C) 2019-2020 GoodData Corporation
import { AuthenticatedCallGuard } from "@gooddata/sdk-backend-spi";
import { ITigerClient } from "@gooddata/gd-tiger-client";

/**
 * Tiger object types
 *
 * @public
 */
export type TigerObjectType = "attributes" | "metrics" | "facts" | "labels" | "datasets" | "tags";

/**
 * Tiger AFM types
 *
 * @public
 */
export type TigerAfmType = "label" | "metric" | "dataSet" | "fact" | "attribute";

/**
 * Tiger authenticated call guard
 *
 * @public
 */
export type TigerAuthenticatedCallGuard = AuthenticatedCallGuard<ITigerClient>;
