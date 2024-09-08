/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { watchlistGetWatchList } from "../funcs/watchlistGetWatchList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Watchlist extends ClientSDK {
    /**
     * Get User Watchlist
     *
     * @remarks
     * Get User Watchlist
     */
    async getWatchList(
        request: operations.GetWatchListRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<operations.GetWatchListResponse> {
        return unwrapAsync(watchlistGetWatchList(this, request, options));
    }
}
