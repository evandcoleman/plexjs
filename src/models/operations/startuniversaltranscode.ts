/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
export namespace StartUniversalTranscodeRequest$ {
    export type Inbound = {
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

    export const inboundSchema: z.ZodType<StartUniversalTranscodeRequest, z.ZodTypeDef, Inbound> = z
        .object({
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
        })
        .transform((v) => {
            return {
                hasMDE: v.hasMDE,
                path: v.path,
                mediaIndex: v.mediaIndex,
                partIndex: v.partIndex,
                protocol: v.protocol,
                ...(v.fastSeek === undefined ? null : { fastSeek: v.fastSeek }),
                ...(v.directPlay === undefined ? null : { directPlay: v.directPlay }),
                ...(v.directStream === undefined ? null : { directStream: v.directStream }),
                ...(v.subtitleSize === undefined ? null : { subtitleSize: v.subtitleSize }),
                ...(v.subtites === undefined ? null : { subtites: v.subtites }),
                ...(v.audioBoost === undefined ? null : { audioBoost: v.audioBoost }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.mediaBufferSize === undefined
                    ? null
                    : { mediaBufferSize: v.mediaBufferSize }),
                ...(v.session === undefined ? null : { session: v.session }),
                ...(v.addDebugOverlay === undefined
                    ? null
                    : { addDebugOverlay: v.addDebugOverlay }),
                ...(v.autoAdjustQuality === undefined
                    ? null
                    : { autoAdjustQuality: v.autoAdjustQuality }),
            };
        });

    export type Outbound = {
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartUniversalTranscodeRequest> =
        z
            .object({
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
            })
            .transform((v) => {
                return {
                    hasMDE: v.hasMDE,
                    path: v.path,
                    mediaIndex: v.mediaIndex,
                    partIndex: v.partIndex,
                    protocol: v.protocol,
                    ...(v.fastSeek === undefined ? null : { fastSeek: v.fastSeek }),
                    ...(v.directPlay === undefined ? null : { directPlay: v.directPlay }),
                    ...(v.directStream === undefined ? null : { directStream: v.directStream }),
                    ...(v.subtitleSize === undefined ? null : { subtitleSize: v.subtitleSize }),
                    ...(v.subtites === undefined ? null : { subtites: v.subtites }),
                    ...(v.audioBoost === undefined ? null : { audioBoost: v.audioBoost }),
                    ...(v.location === undefined ? null : { location: v.location }),
                    ...(v.mediaBufferSize === undefined
                        ? null
                        : { mediaBufferSize: v.mediaBufferSize }),
                    ...(v.session === undefined ? null : { session: v.session }),
                    ...(v.addDebugOverlay === undefined
                        ? null
                        : { addDebugOverlay: v.addDebugOverlay }),
                    ...(v.autoAdjustQuality === undefined
                        ? null
                        : { autoAdjustQuality: v.autoAdjustQuality }),
                };
            });
}

/** @internal */
export namespace StartUniversalTranscodeResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StartUniversalTranscodeResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
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
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
