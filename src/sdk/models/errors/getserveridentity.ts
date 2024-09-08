/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Request Timeout
 */
export type GetServerIdentityResponseBodyData = {
    code?: number | undefined;
    message?: string | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Request Timeout
 */
export class GetServerIdentityResponseBody extends Error {
    code?: number | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerIdentityResponseBodyData;

    constructor(err: GetServerIdentityResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.code != null) {
            this.code = err.code;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.name = "GetServerIdentityResponseBody";
    }
}

/** @internal */
export const GetServerIdentityResponseBody$inboundSchema: z.ZodType<
    GetServerIdentityResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        code: z.number().int().optional(),
        message: z.string().optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetServerIdentityResponseBody(remapped);
    });

/** @internal */
export type GetServerIdentityResponseBody$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetServerIdentityResponseBody$outboundSchema: z.ZodType<
    GetServerIdentityResponseBody$Outbound,
    z.ZodTypeDef,
    GetServerIdentityResponseBody
> = z
    .instanceof(GetServerIdentityResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                code: z.number().int().optional(),
                message: z.string().optional(),
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
export namespace GetServerIdentityResponseBody$ {
    /** @deprecated use `GetServerIdentityResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetServerIdentityResponseBody$inboundSchema;
    /** @deprecated use `GetServerIdentityResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetServerIdentityResponseBody$outboundSchema;
    /** @deprecated use `GetServerIdentityResponseBody$Outbound` instead. */
    export type Outbound = GetServerIdentityResponseBody$Outbound;
}