/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Force the refresh even if the library is already being refreshed.
 */
export enum Force {
    Zero = 0,
    One = 1,
}

export type GetRefreshLibraryMetadataRequest = {
    /**
     * The unique key of the Plex library.
     *
     * @remarks
     * Note: This is unique in the context of the Plex server.
     *
     */
    sectionKey: number;
    /**
     * Force the refresh even if the library is already being refreshed.
     */
    force?: Force | undefined;
};

export type GetRefreshLibraryMetadataResponse = {
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
export const Force$inboundSchema: z.ZodNativeEnum<typeof Force> = z.nativeEnum(Force);

/** @internal */
export const Force$outboundSchema: z.ZodNativeEnum<typeof Force> = Force$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Force$ {
    /** @deprecated use `Force$inboundSchema` instead. */
    export const inboundSchema = Force$inboundSchema;
    /** @deprecated use `Force$outboundSchema` instead. */
    export const outboundSchema = Force$outboundSchema;
}

/** @internal */
export const GetRefreshLibraryMetadataRequest$inboundSchema: z.ZodType<
    GetRefreshLibraryMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    sectionKey: z.number().int(),
    force: Force$inboundSchema.optional(),
});

/** @internal */
export type GetRefreshLibraryMetadataRequest$Outbound = {
    sectionKey: number;
    force?: number | undefined;
};

/** @internal */
export const GetRefreshLibraryMetadataRequest$outboundSchema: z.ZodType<
    GetRefreshLibraryMetadataRequest$Outbound,
    z.ZodTypeDef,
    GetRefreshLibraryMetadataRequest
> = z.object({
    sectionKey: z.number().int(),
    force: Force$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRefreshLibraryMetadataRequest$ {
    /** @deprecated use `GetRefreshLibraryMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = GetRefreshLibraryMetadataRequest$inboundSchema;
    /** @deprecated use `GetRefreshLibraryMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = GetRefreshLibraryMetadataRequest$outboundSchema;
    /** @deprecated use `GetRefreshLibraryMetadataRequest$Outbound` instead. */
    export type Outbound = GetRefreshLibraryMetadataRequest$Outbound;
}

/** @internal */
export const GetRefreshLibraryMetadataResponse$inboundSchema: z.ZodType<
    GetRefreshLibraryMetadataResponse,
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
export type GetRefreshLibraryMetadataResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetRefreshLibraryMetadataResponse$outboundSchema: z.ZodType<
    GetRefreshLibraryMetadataResponse$Outbound,
    z.ZodTypeDef,
    GetRefreshLibraryMetadataResponse
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
export namespace GetRefreshLibraryMetadataResponse$ {
    /** @deprecated use `GetRefreshLibraryMetadataResponse$inboundSchema` instead. */
    export const inboundSchema = GetRefreshLibraryMetadataResponse$inboundSchema;
    /** @deprecated use `GetRefreshLibraryMetadataResponse$outboundSchema` instead. */
    export const outboundSchema = GetRefreshLibraryMetadataResponse$outboundSchema;
    /** @deprecated use `GetRefreshLibraryMetadataResponse$Outbound` instead. */
    export type Outbound = GetRefreshLibraryMetadataResponse$Outbound;
}
