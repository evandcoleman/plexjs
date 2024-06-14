/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives";
import * as z from "zod";

export type PerformVoiceSearchRequest = {
    /**
     * The query term
     */
    query: string;
    /**
     * This gives context to the search, and can result in re-ordering of search result hubs
     */
    sectionId?: number | undefined;
    /**
     * The number of items to return per hub
     */
    limit?: number | undefined;
};

export type PerformVoiceSearchErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type PerformVoiceSearchResponseBodyData = {
    errors?: Array<PerformVoiceSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class PerformVoiceSearchResponseBody extends Error {
    errors?: Array<PerformVoiceSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: PerformVoiceSearchResponseBodyData;

    constructor(err: PerformVoiceSearchResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "PerformVoiceSearchResponseBody";
    }
}

export type PerformVoiceSearchResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace PerformVoiceSearchRequest$ {
    export const inboundSchema: z.ZodType<PerformVoiceSearchRequest, z.ZodTypeDef, unknown> =
        z.object({
            query: z.string(),
            sectionId: z.number().optional(),
            limit: z.number().default(3),
        });

    export type Outbound = {
        query: string;
        sectionId?: number | undefined;
        limit: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchRequest> =
        z.object({
            query: z.string(),
            sectionId: z.number().optional(),
            limit: z.number().default(3),
        });
}

/** @internal */
export namespace PerformVoiceSearchErrors$ {
    export const inboundSchema: z.ZodType<PerformVoiceSearchErrors, z.ZodTypeDef, unknown> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchErrors> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });
}

/** @internal */
export namespace PerformVoiceSearchResponseBody$ {
    export const inboundSchema: z.ZodType<PerformVoiceSearchResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => PerformVoiceSearchErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new PerformVoiceSearchResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<PerformVoiceSearchErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchResponseBody> =
        z
            .instanceof(PerformVoiceSearchResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        errors: z
                            .array(z.lazy(() => PerformVoiceSearchErrors$.outboundSchema))
                            .optional(),
                        rawResponse: z
                            .instanceof(Response)
                            .transform(() => {
                                throw new Error("Response cannot be serialized");
                            })
                            .optional(),
                    })
                    .transform((v) => {
                        return remap$(v, {
                            rawResponse: "RawResponse",
                        });
                    })
            );
}

/** @internal */
export namespace PerformVoiceSearchResponse$ {
    export const inboundSchema: z.ZodType<PerformVoiceSearchResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}