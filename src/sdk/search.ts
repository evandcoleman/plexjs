/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Search extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Perform a search
     *
     * @remarks
     * This endpoint performs a search across all library sections, or a single section, and returns matches as hubs, split up by type. It performs spell checking, looks for partial matches, and orders the hubs based on quality of results. In addition, based on matches, it will return other related matches (e.g. for a genre match, it may return movies in that genre, or for an actor match, movies with that actor).
     *
     * In the response's items, the following extra attributes are returned to further describe or disambiguate the result:
     *
     * - `reason`: The reason for the result, if not because of a direct search term match; can be either:
     *   - `section`: There are multiple identical results from different sections.
     *   - `originalTitle`: There was a search term match from the original title field (sometimes those can be very different or in a foreign language).
     *   - `<hub identifier>`: If the reason for the result is due to a result in another hub, the source hub identifier is returned. For example, if the search is for "dylan" then Bob Dylan may be returned as an artist result, an a few of his albums returned as album results with a reason code of `artist` (the identifier of that particular hub). Or if the search is for "arnold", there might be movie results returned with a reason of `actor`
     * - `reasonTitle`: The string associated with the reason code. For a section reason, it'll be the section name; For a hub identifier, it'll be a string associated with the match (e.g. `Arnold Schwarzenegger` for movies which were returned because the search was for "arnold").
     * - `reasonID`: The ID of the item associated with the reason for the result. This might be a section ID, a tag ID, an artist ID, or a show ID.
     *
     * This request is intended to be very fast, and called as the user types.
     *
     */
    async performSearch(
        query: string,
        sectionId?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.PerformSearchResponse> {
        const input$: operations.PerformSearchRequest = {
            query: query,
            sectionId: sectionId,
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.PerformSearchRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/hubs/search")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sectionId", payload$.sectionId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "performSearch" };
        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.PerformSearchResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PerformSearchResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Perform a voice search
     *
     * @remarks
     * This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint.
     * It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint.
     * Whenever possible, clients should limit the search to the appropriate type.
     * Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.
     *
     */
    async performVoiceSearch(
        query: string,
        sectionId?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.PerformVoiceSearchResponse> {
        const input$: operations.PerformVoiceSearchRequest = {
            query: query,
            sectionId: sectionId,
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.PerformVoiceSearchRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/hubs/search/voice")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sectionId", payload$.sectionId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "performVoiceSearch" };
        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.PerformVoiceSearchResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.PerformVoiceSearchResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Get Search Results
     *
     * @remarks
     * This will search the database for the string provided.
     */
    async getSearchResults(
        query: string,
        options?: RequestOptions
    ): Promise<operations.GetSearchResultsResponse> {
        const input$: operations.GetSearchResultsRequest = {
            query: query,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSearchResultsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/search")();

        const query$ = [
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "getSearchResults" };
        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetSearchResultsResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetSearchResultsResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
