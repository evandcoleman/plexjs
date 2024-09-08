/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { statisticsGetBandwidthStatistics } from "../funcs/statisticsGetBandwidthStatistics.js";
import { statisticsGetResourcesStatistics } from "../funcs/statisticsGetResourcesStatistics.js";
import { statisticsGetStatistics } from "../funcs/statisticsGetStatistics.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Statistics extends ClientSDK {
    /**
     * Get Media Statistics
     *
     * @remarks
     * This will return the media statistics for the server
     */
    async getStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetStatisticsResponse> {
        return unwrapAsync(statisticsGetStatistics(this, timespan, options));
    }

    /**
     * Get Resources Statistics
     *
     * @remarks
     * This will return the resources for the server
     */
    async getResourcesStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetResourcesStatisticsResponse> {
        return unwrapAsync(statisticsGetResourcesStatistics(this, timespan, options));
    }

    /**
     * Get Bandwidth Statistics
     *
     * @remarks
     * This will return the bandwidth statistics for the server
     */
    async getBandwidthStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetBandwidthStatisticsResponse> {
        return unwrapAsync(statisticsGetBandwidthStatistics(this, timespan, options));
    }
}
