/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Banner Image
 *
 * @remarks
 * Gets the banner image of the media item
 */
export async function mediaGetBannerImage(
    client$: PlexAPICore,
    request: operations.GetBannerImageRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.GetBannerImageResponse,
        | errors.GetBannerImageResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetBannerImageRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        ratingKey: encodeSimple$("ratingKey", payload$.ratingKey, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/library/metadata/{ratingKey}/banner")(pathParams$);

    const query$ = encodeFormQuery$({
        height: payload$.height,
        minSize: payload$.minSize,
        upscale: payload$.upscale,
        width: payload$.width,
        "X-Plex-Token": payload$["X-Plex-Token"],
    });

    const headers$ = new Headers({
        Accept: "image/jpeg",
    });

    const accessToken$ = await extractSecurity(client$.options$.accessToken);
    const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
    const context = {
        operationID: "get-banner-image",
        oAuth2Scopes: [],
        securitySource: client$.options$.accessToken,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        operations.GetBannerImageResponse,
        | errors.GetBannerImageResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.stream(200, operations.GetBannerImageResponse$inboundSchema, {
            ctype: "image/jpeg",
            hdrs: true,
            key: "response-stream",
        }),
        m$.fail([400, "4XX", "5XX"]),
        m$.jsonErr(401, errors.GetBannerImageResponseBody$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
