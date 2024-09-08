/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type PerformSearchErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type PerformSearchResponseBodyData = {
    errors?: Array<PerformSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class PerformSearchResponseBody extends Error {
    errors?: Array<PerformSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: PerformSearchResponseBodyData;

    constructor(err: PerformSearchResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.name = "PerformSearchResponseBody";
    }
}

/** @internal */
export const PerformSearchErrors$inboundSchema: z.ZodType<
    PerformSearchErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type PerformSearchErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const PerformSearchErrors$outboundSchema: z.ZodType<
    PerformSearchErrors$Outbound,
    z.ZodTypeDef,
    PerformSearchErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformSearchErrors$ {
    /** @deprecated use `PerformSearchErrors$inboundSchema` instead. */
    export const inboundSchema = PerformSearchErrors$inboundSchema;
    /** @deprecated use `PerformSearchErrors$outboundSchema` instead. */
    export const outboundSchema = PerformSearchErrors$outboundSchema;
    /** @deprecated use `PerformSearchErrors$Outbound` instead. */
    export type Outbound = PerformSearchErrors$Outbound;
}

/** @internal */
export const PerformSearchResponseBody$inboundSchema: z.ZodType<
    PerformSearchResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => PerformSearchErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new PerformSearchResponseBody(remapped);
    });

/** @internal */
export type PerformSearchResponseBody$Outbound = {
    errors?: Array<PerformSearchErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const PerformSearchResponseBody$outboundSchema: z.ZodType<
    PerformSearchResponseBody$Outbound,
    z.ZodTypeDef,
    PerformSearchResponseBody
> = z
    .instanceof(PerformSearchResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => PerformSearchErrors$outboundSchema)).optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformSearchResponseBody$ {
    /** @deprecated use `PerformSearchResponseBody$inboundSchema` instead. */
    export const inboundSchema = PerformSearchResponseBody$inboundSchema;
    /** @deprecated use `PerformSearchResponseBody$outboundSchema` instead. */
    export const outboundSchema = PerformSearchResponseBody$outboundSchema;
    /** @deprecated use `PerformSearchResponseBody$Outbound` instead. */
    export type Outbound = PerformSearchResponseBody$Outbound;
}