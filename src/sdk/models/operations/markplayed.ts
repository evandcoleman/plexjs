/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type MarkPlayedRequest = {
    /**
     * The media key to mark as played
     */
    key: number;
};

export type MarkPlayedResponse = {
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
export const MarkPlayedRequest$inboundSchema: z.ZodType<MarkPlayedRequest, z.ZodTypeDef, unknown> =
    z.object({
        key: z.number(),
    });

/** @internal */
export type MarkPlayedRequest$Outbound = {
    key: number;
};

/** @internal */
export const MarkPlayedRequest$outboundSchema: z.ZodType<
    MarkPlayedRequest$Outbound,
    z.ZodTypeDef,
    MarkPlayedRequest
> = z.object({
    key: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkPlayedRequest$ {
    /** @deprecated use `MarkPlayedRequest$inboundSchema` instead. */
    export const inboundSchema = MarkPlayedRequest$inboundSchema;
    /** @deprecated use `MarkPlayedRequest$outboundSchema` instead. */
    export const outboundSchema = MarkPlayedRequest$outboundSchema;
    /** @deprecated use `MarkPlayedRequest$Outbound` instead. */
    export type Outbound = MarkPlayedRequest$Outbound;
}

/** @internal */
export const MarkPlayedResponse$inboundSchema: z.ZodType<
    MarkPlayedResponse,
    z.ZodTypeDef,
    unknown
> = z
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

/** @internal */
export type MarkPlayedResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const MarkPlayedResponse$outboundSchema: z.ZodType<
    MarkPlayedResponse$Outbound,
    z.ZodTypeDef,
    MarkPlayedResponse
> = z
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkPlayedResponse$ {
    /** @deprecated use `MarkPlayedResponse$inboundSchema` instead. */
    export const inboundSchema = MarkPlayedResponse$inboundSchema;
    /** @deprecated use `MarkPlayedResponse$outboundSchema` instead. */
    export const outboundSchema = MarkPlayedResponse$outboundSchema;
    /** @deprecated use `MarkPlayedResponse$Outbound` instead. */
    export type Outbound = MarkPlayedResponse$Outbound;
}
