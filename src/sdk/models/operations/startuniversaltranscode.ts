/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type StartUniversalTranscodeRequest = {
    /**
     * Whether the media item has MDE
     */
    hasMDE: number;
    /**
     * The path to the media item to transcode
     */
    path: string;
    /**
     * The index of the media item to transcode
     */
    mediaIndex: number;
    /**
     * The index of the part to transcode
     */
    partIndex: number;
    /**
     * The protocol to use for the transcode session
     */
    protocol: string;
    /**
     * Whether to use fast seek or not
     */
    fastSeek?: number | undefined;
    /**
     * Whether to use direct play or not
     */
    directPlay?: number | undefined;
    /**
     * Whether to use direct stream or not
     */
    directStream?: number | undefined;
    /**
     * The size of the subtitles
     */
    subtitleSize?: number | undefined;
    /**
     * The subtitles
     */
    subtites?: string | undefined;
    /**
     * The audio boost
     */
    audioBoost?: number | undefined;
    /**
     * The location of the transcode session
     */
    location?: string | undefined;
    /**
     * The size of the media buffer
     */
    mediaBufferSize?: number | undefined;
    /**
     * The session ID
     */
    session?: string | undefined;
    /**
     * Whether to add a debug overlay or not
     */
    addDebugOverlay?: number | undefined;
    /**
     * Whether to auto adjust quality or not
     */
    autoAdjustQuality?: number | undefined;
};

export type StartUniversalTranscodeResponse = {
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
export const StartUniversalTranscodeRequest$inboundSchema: z.ZodType<
    StartUniversalTranscodeRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    hasMDE: z.number(),
    path: z.string(),
    mediaIndex: z.number(),
    partIndex: z.number(),
    protocol: z.string(),
    fastSeek: z.number().optional(),
    directPlay: z.number().optional(),
    directStream: z.number().optional(),
    subtitleSize: z.number().optional(),
    subtites: z.string().optional(),
    audioBoost: z.number().optional(),
    location: z.string().optional(),
    mediaBufferSize: z.number().optional(),
    session: z.string().optional(),
    addDebugOverlay: z.number().optional(),
    autoAdjustQuality: z.number().optional(),
});

/** @internal */
export type StartUniversalTranscodeRequest$Outbound = {
    hasMDE: number;
    path: string;
    mediaIndex: number;
    partIndex: number;
    protocol: string;
    fastSeek?: number | undefined;
    directPlay?: number | undefined;
    directStream?: number | undefined;
    subtitleSize?: number | undefined;
    subtites?: string | undefined;
    audioBoost?: number | undefined;
    location?: string | undefined;
    mediaBufferSize?: number | undefined;
    session?: string | undefined;
    addDebugOverlay?: number | undefined;
    autoAdjustQuality?: number | undefined;
};

/** @internal */
export const StartUniversalTranscodeRequest$outboundSchema: z.ZodType<
    StartUniversalTranscodeRequest$Outbound,
    z.ZodTypeDef,
    StartUniversalTranscodeRequest
> = z.object({
    hasMDE: z.number(),
    path: z.string(),
    mediaIndex: z.number(),
    partIndex: z.number(),
    protocol: z.string(),
    fastSeek: z.number().optional(),
    directPlay: z.number().optional(),
    directStream: z.number().optional(),
    subtitleSize: z.number().optional(),
    subtites: z.string().optional(),
    audioBoost: z.number().optional(),
    location: z.string().optional(),
    mediaBufferSize: z.number().optional(),
    session: z.string().optional(),
    addDebugOverlay: z.number().optional(),
    autoAdjustQuality: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartUniversalTranscodeRequest$ {
    /** @deprecated use `StartUniversalTranscodeRequest$inboundSchema` instead. */
    export const inboundSchema = StartUniversalTranscodeRequest$inboundSchema;
    /** @deprecated use `StartUniversalTranscodeRequest$outboundSchema` instead. */
    export const outboundSchema = StartUniversalTranscodeRequest$outboundSchema;
    /** @deprecated use `StartUniversalTranscodeRequest$Outbound` instead. */
    export type Outbound = StartUniversalTranscodeRequest$Outbound;
}

/** @internal */
export const StartUniversalTranscodeResponse$inboundSchema: z.ZodType<
    StartUniversalTranscodeResponse,
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
export type StartUniversalTranscodeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const StartUniversalTranscodeResponse$outboundSchema: z.ZodType<
    StartUniversalTranscodeResponse$Outbound,
    z.ZodTypeDef,
    StartUniversalTranscodeResponse
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
export namespace StartUniversalTranscodeResponse$ {
    /** @deprecated use `StartUniversalTranscodeResponse$inboundSchema` instead. */
    export const inboundSchema = StartUniversalTranscodeResponse$inboundSchema;
    /** @deprecated use `StartUniversalTranscodeResponse$outboundSchema` instead. */
    export const outboundSchema = StartUniversalTranscodeResponse$outboundSchema;
    /** @deprecated use `StartUniversalTranscodeResponse$Outbound` instead. */
    export type Outbound = StartUniversalTranscodeResponse$Outbound;
}