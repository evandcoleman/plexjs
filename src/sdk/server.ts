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

export class Server extends ClientSDK {
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
     * Server Capabilities
     *
     * @remarks
     * Server Capabilities
     */
    async getServerCapabilities(
        options?: RequestOptions
    ): Promise<operations.GetServerCapabilitiesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/")();

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
            operationID: "getServerCapabilities",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetServerCapabilitiesResponse>()
            .json(200, operations.GetServerCapabilitiesResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetServerCapabilitiesResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Server Preferences
     *
     * @remarks
     * Get Server Preferences
     */
    async getServerPreferences(
        options?: RequestOptions
    ): Promise<operations.GetServerPreferencesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/:/prefs")();

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
            operationID: "getServerPreferences",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetServerPreferencesResponse>()
            .json(200, operations.GetServerPreferencesResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetServerPreferencesResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Available Clients
     *
     * @remarks
     * Get Available Clients
     */
    async getAvailableClients(
        options?: RequestOptions
    ): Promise<operations.GetAvailableClientsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/clients")();

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
            operationID: "getAvailableClients",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetAvailableClientsResponse>()
            .json(200, operations.GetAvailableClientsResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetAvailableClientsResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Devices
     *
     * @remarks
     * Get Devices
     */
    async getDevices(options?: RequestOptions): Promise<operations.GetDevicesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/devices")();

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
            operationID: "getDevices",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetDevicesResponse>()
            .json(200, operations.GetDevicesResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetDevicesResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Server Identity
     *
     * @remarks
     * Get Server Identity
     */
    async getServerIdentity(
        options?: RequestOptions
    ): Promise<operations.GetServerIdentityResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/identity")();

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
            operationID: "getServerIdentity",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetServerIdentityResponse>()
            .json(200, operations.GetServerIdentityResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetServerIdentityResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get MyPlex Account
     *
     * @remarks
     * Returns MyPlex Account Information
     */
    async getMyPlexAccount(options?: RequestOptions): Promise<operations.GetMyPlexAccountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/myplex/account")();

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
            operationID: "getMyPlexAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetMyPlexAccountResponse>()
            .json(200, operations.GetMyPlexAccountResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetMyPlexAccountResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a Resized Photo
     *
     * @remarks
     * Plex's Photo transcoder is used throughout the service to serve images at specified sizes.
     *
     */
    async getResizedPhoto(
        request: operations.GetResizedPhotoRequest,
        options?: RequestOptions
    ): Promise<operations.GetResizedPhotoResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetResizedPhotoRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/photo/:/transcode")();

        const query$ = [
            enc$.encodeForm("blur", payload$.blur, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("height", payload$.height, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("minSize", payload$.minSize, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("opacity", payload$.opacity, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("upscale", payload$.upscale, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("url", payload$.url, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("width", payload$.width, { explode: true, charEncoding: "percent" }),
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
            operationID: "getResizedPhoto",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetResizedPhotoResponse>()
            .void(200, operations.GetResizedPhotoResponse$)
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetResizedPhotoResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Server List
     *
     * @remarks
     * Get Server List
     */
    async getServerList(options?: RequestOptions): Promise<operations.GetServerListResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/servers")();

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
            operationID: "getServerList",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetServerListResponse>()
            .json(200, operations.GetServerListResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, errors.GetServerListResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
