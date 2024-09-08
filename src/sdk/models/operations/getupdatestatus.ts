/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Release = {
    key?: string | undefined;
    version?: string | undefined;
    added?: string | undefined;
    fixed?: string | undefined;
    downloadURL?: string | undefined;
    state?: string | undefined;
};

export type GetUpdateStatusMediaContainer = {
    size?: number | undefined;
    canInstall?: boolean | undefined;
    checkedAt?: number | undefined;
    downloadURL?: string | undefined;
    status?: number | undefined;
    release?: Array<Release> | undefined;
};

/**
 * The Server Updates
 */
export type GetUpdateStatusResponseBody = {
    mediaContainer?: GetUpdateStatusMediaContainer | undefined;
};

export type GetUpdateStatusResponse = {
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
    /**
     * The Server Updates
     */
    object?: GetUpdateStatusResponseBody | undefined;
};

/** @internal */
export const Release$inboundSchema: z.ZodType<Release, z.ZodTypeDef, unknown> = z.object({
    key: z.string().optional(),
    version: z.string().optional(),
    added: z.string().optional(),
    fixed: z.string().optional(),
    downloadURL: z.string().optional(),
    state: z.string().optional(),
});

/** @internal */
export type Release$Outbound = {
    key?: string | undefined;
    version?: string | undefined;
    added?: string | undefined;
    fixed?: string | undefined;
    downloadURL?: string | undefined;
    state?: string | undefined;
};

/** @internal */
export const Release$outboundSchema: z.ZodType<Release$Outbound, z.ZodTypeDef, Release> = z.object({
    key: z.string().optional(),
    version: z.string().optional(),
    added: z.string().optional(),
    fixed: z.string().optional(),
    downloadURL: z.string().optional(),
    state: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Release$ {
    /** @deprecated use `Release$inboundSchema` instead. */
    export const inboundSchema = Release$inboundSchema;
    /** @deprecated use `Release$outboundSchema` instead. */
    export const outboundSchema = Release$outboundSchema;
    /** @deprecated use `Release$Outbound` instead. */
    export type Outbound = Release$Outbound;
}

/** @internal */
export const GetUpdateStatusMediaContainer$inboundSchema: z.ZodType<
    GetUpdateStatusMediaContainer,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        size: z.number().int().optional(),
        canInstall: z.boolean().optional(),
        checkedAt: z.number().int().optional(),
        downloadURL: z.string().optional(),
        status: z.number().int().optional(),
        Release: z.array(z.lazy(() => Release$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Release: "release",
        });
    });

/** @internal */
export type GetUpdateStatusMediaContainer$Outbound = {
    size?: number | undefined;
    canInstall?: boolean | undefined;
    checkedAt?: number | undefined;
    downloadURL?: string | undefined;
    status?: number | undefined;
    Release?: Array<Release$Outbound> | undefined;
};

/** @internal */
export const GetUpdateStatusMediaContainer$outboundSchema: z.ZodType<
    GetUpdateStatusMediaContainer$Outbound,
    z.ZodTypeDef,
    GetUpdateStatusMediaContainer
> = z
    .object({
        size: z.number().int().optional(),
        canInstall: z.boolean().optional(),
        checkedAt: z.number().int().optional(),
        downloadURL: z.string().optional(),
        status: z.number().int().optional(),
        release: z.array(z.lazy(() => Release$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            release: "Release",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUpdateStatusMediaContainer$ {
    /** @deprecated use `GetUpdateStatusMediaContainer$inboundSchema` instead. */
    export const inboundSchema = GetUpdateStatusMediaContainer$inboundSchema;
    /** @deprecated use `GetUpdateStatusMediaContainer$outboundSchema` instead. */
    export const outboundSchema = GetUpdateStatusMediaContainer$outboundSchema;
    /** @deprecated use `GetUpdateStatusMediaContainer$Outbound` instead. */
    export type Outbound = GetUpdateStatusMediaContainer$Outbound;
}

/** @internal */
export const GetUpdateStatusResponseBody$inboundSchema: z.ZodType<
    GetUpdateStatusResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MediaContainer: z.lazy(() => GetUpdateStatusMediaContainer$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            MediaContainer: "mediaContainer",
        });
    });

/** @internal */
export type GetUpdateStatusResponseBody$Outbound = {
    MediaContainer?: GetUpdateStatusMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetUpdateStatusResponseBody$outboundSchema: z.ZodType<
    GetUpdateStatusResponseBody$Outbound,
    z.ZodTypeDef,
    GetUpdateStatusResponseBody
> = z
    .object({
        mediaContainer: z.lazy(() => GetUpdateStatusMediaContainer$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            mediaContainer: "MediaContainer",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUpdateStatusResponseBody$ {
    /** @deprecated use `GetUpdateStatusResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetUpdateStatusResponseBody$inboundSchema;
    /** @deprecated use `GetUpdateStatusResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetUpdateStatusResponseBody$outboundSchema;
    /** @deprecated use `GetUpdateStatusResponseBody$Outbound` instead. */
    export type Outbound = GetUpdateStatusResponseBody$Outbound;
}

/** @internal */
export const GetUpdateStatusResponse$inboundSchema: z.ZodType<
    GetUpdateStatusResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => GetUpdateStatusResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetUpdateStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetUpdateStatusResponseBody$Outbound | undefined;
};

/** @internal */
export const GetUpdateStatusResponse$outboundSchema: z.ZodType<
    GetUpdateStatusResponse$Outbound,
    z.ZodTypeDef,
    GetUpdateStatusResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => GetUpdateStatusResponseBody$outboundSchema).optional(),
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
export namespace GetUpdateStatusResponse$ {
    /** @deprecated use `GetUpdateStatusResponse$inboundSchema` instead. */
    export const inboundSchema = GetUpdateStatusResponse$inboundSchema;
    /** @deprecated use `GetUpdateStatusResponse$outboundSchema` instead. */
    export const outboundSchema = GetUpdateStatusResponse$outboundSchema;
    /** @deprecated use `GetUpdateStatusResponse$Outbound` instead. */
    export type Outbound = GetUpdateStatusResponse$Outbound;
}