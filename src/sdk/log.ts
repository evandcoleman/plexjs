/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import * as z from "zod";

export class Log extends ClientSDK {
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
     * Logging a single line message.
     *
     * @remarks
     * This endpoint will write a single-line log message, including a level and source to the main Plex Media Server log.
     *
     */
    async logLine(
        level: operations.Level,
        message: string,
        source: string,
        options?: RequestOptions
    ): Promise<operations.LogLineResponse> {
        const input$: operations.LogLineRequest = {
            level: level,
            message: message,
            source: source,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LogLineRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/log")();

        const query$ = [
            enc$.encodeForm("level", payload$.level, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("message", payload$.message, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("source", payload$.source, { explode: true, charEncoding: "percent" }),
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
        const context = {
            operationID: "logLine",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
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
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.LogLineResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.LogLineResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Logging a multi-line message
     *
     * @remarks
     * This endpoint allows for the batch addition of log entries to the main Plex Media Server log.
     * It accepts a text/plain request body, where each line represents a distinct log entry.
     * Each log entry consists of URL-encoded key-value pairs, specifying log attributes such as 'level', 'message', and 'source'.
     *
     * Log entries are separated by a newline character (`\n`).
     * Each entry's parameters should be URL-encoded to ensure accurate parsing and handling of special characters.
     * This method is efficient for logging multiple entries in a single API call, reducing the overhead of multiple individual requests.
     *
     * The 'level' parameter specifies the log entry's severity or importance, with the following integer values:
     * - `0`: Error - Critical issues that require immediate attention.
     * - `1`: Warning - Important events that are not critical but may indicate potential issues.
     * - `2`: Info - General informational messages about system operation.
     * - `3`: Debug - Detailed information useful for debugging purposes.
     * - `4`: Verbose - Highly detailed diagnostic information for in-depth analysis.
     *
     * The 'message' parameter contains the log text, and 'source' identifies the log message's origin (e.g., an application name or module).
     *
     * Example of a single log entry format:
     * `level=4&message=Sample%20log%20entry&source=applicationName`
     *
     * Ensure each parameter is properly URL-encoded to avoid interpretation issues.
     *
     */
    async logMultiLine(
        input: string,
        options?: RequestOptions
    ): Promise<operations.LogMultiLineResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "text/plain");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => z.string().parse(value$),
            "Input validation failed"
        );
        const body$ = payload$;

        const path$ = this.templateURLComponent("/log")();

        const query$ = "";

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "logMultiLine",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
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
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.LogMultiLineResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.LogMultiLineResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Enabling Papertrail
     *
     * @remarks
     * This endpoint will enable all Plex Media Serverlogs to be sent to the Papertrail networked logging site for a period of time.
     *
     */
    async enablePaperTrail(options?: RequestOptions): Promise<operations.EnablePaperTrailResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/log/networked")();

        const query$ = "";

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "enablePaperTrail",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
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
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.EnablePaperTrailResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.EnablePaperTrailResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }
}
