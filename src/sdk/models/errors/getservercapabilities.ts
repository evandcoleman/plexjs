/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Errors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetServerCapabilitiesResponseBodyData = {
    errors?: Array<Errors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetServerCapabilitiesResponseBody extends Error {
    errors?: Array<Errors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerCapabilitiesResponseBodyData;

    constructor(err: GetServerCapabilitiesResponseBodyData) {
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

        this.name = "GetServerCapabilitiesResponseBody";
    }
}

/** @internal */
export const Errors$inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type Errors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const Errors$outboundSchema: z.ZodType<Errors$Outbound, z.ZodTypeDef, Errors> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Errors$ {
    /** @deprecated use `Errors$inboundSchema` instead. */
    export const inboundSchema = Errors$inboundSchema;
    /** @deprecated use `Errors$outboundSchema` instead. */
    export const outboundSchema = Errors$outboundSchema;
    /** @deprecated use `Errors$Outbound` instead. */
    export type Outbound = Errors$Outbound;
}

/** @internal */
export const GetServerCapabilitiesResponseBody$inboundSchema: z.ZodType<
    GetServerCapabilitiesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => Errors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetServerCapabilitiesResponseBody(remapped);
    });

/** @internal */
export type GetServerCapabilitiesResponseBody$Outbound = {
    errors?: Array<Errors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetServerCapabilitiesResponseBody$outboundSchema: z.ZodType<
    GetServerCapabilitiesResponseBody$Outbound,
    z.ZodTypeDef,
    GetServerCapabilitiesResponseBody
> = z
    .instanceof(GetServerCapabilitiesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => Errors$outboundSchema)).optional(),
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
export namespace GetServerCapabilitiesResponseBody$ {
    /** @deprecated use `GetServerCapabilitiesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetServerCapabilitiesResponseBody$inboundSchema;
    /** @deprecated use `GetServerCapabilitiesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetServerCapabilitiesResponseBody$outboundSchema;
    /** @deprecated use `GetServerCapabilitiesResponseBody$Outbound` instead. */
    export type Outbound = GetServerCapabilitiesResponseBody$Outbound;
}
