/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * The name of the task to be started.
 */
export enum PathParamTaskName {
    BackupDatabase = "BackupDatabase",
    BuildGracenoteCollections = "BuildGracenoteCollections",
    CheckForUpdates = "CheckForUpdates",
    CleanOldBundles = "CleanOldBundles",
    CleanOldCacheFiles = "CleanOldCacheFiles",
    DeepMediaAnalysis = "DeepMediaAnalysis",
    GenerateAutoTags = "GenerateAutoTags",
    GenerateChapterThumbs = "GenerateChapterThumbs",
    GenerateMediaIndexFiles = "GenerateMediaIndexFiles",
    OptimizeDatabase = "OptimizeDatabase",
    RefreshLibraries = "RefreshLibraries",
    RefreshLocalMedia = "RefreshLocalMedia",
    RefreshPeriodicMetadata = "RefreshPeriodicMetadata",
    UpgradeMediaAnalysis = "UpgradeMediaAnalysis",
}

export type StopTaskRequest = {
    /**
     * The name of the task to be started.
     */
    taskName: PathParamTaskName;
};

export type StopTaskResponse = {
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
export const PathParamTaskName$inboundSchema: z.ZodNativeEnum<typeof PathParamTaskName> =
    z.nativeEnum(PathParamTaskName);

/** @internal */
export const PathParamTaskName$outboundSchema: z.ZodNativeEnum<typeof PathParamTaskName> =
    PathParamTaskName$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PathParamTaskName$ {
    /** @deprecated use `PathParamTaskName$inboundSchema` instead. */
    export const inboundSchema = PathParamTaskName$inboundSchema;
    /** @deprecated use `PathParamTaskName$outboundSchema` instead. */
    export const outboundSchema = PathParamTaskName$outboundSchema;
}

/** @internal */
export const StopTaskRequest$inboundSchema: z.ZodType<StopTaskRequest, z.ZodTypeDef, unknown> =
    z.object({
        taskName: PathParamTaskName$inboundSchema,
    });

/** @internal */
export type StopTaskRequest$Outbound = {
    taskName: string;
};

/** @internal */
export const StopTaskRequest$outboundSchema: z.ZodType<
    StopTaskRequest$Outbound,
    z.ZodTypeDef,
    StopTaskRequest
> = z.object({
    taskName: PathParamTaskName$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StopTaskRequest$ {
    /** @deprecated use `StopTaskRequest$inboundSchema` instead. */
    export const inboundSchema = StopTaskRequest$inboundSchema;
    /** @deprecated use `StopTaskRequest$outboundSchema` instead. */
    export const outboundSchema = StopTaskRequest$outboundSchema;
    /** @deprecated use `StopTaskRequest$Outbound` instead. */
    export type Outbound = StopTaskRequest$Outbound;
}

/** @internal */
export const StopTaskResponse$inboundSchema: z.ZodType<StopTaskResponse, z.ZodTypeDef, unknown> = z
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
export type StopTaskResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const StopTaskResponse$outboundSchema: z.ZodType<
    StopTaskResponse$Outbound,
    z.ZodTypeDef,
    StopTaskResponse
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
export namespace StopTaskResponse$ {
    /** @deprecated use `StopTaskResponse$inboundSchema` instead. */
    export const inboundSchema = StopTaskResponse$inboundSchema;
    /** @deprecated use `StopTaskResponse$outboundSchema` instead. */
    export const outboundSchema = StopTaskResponse$outboundSchema;
    /** @deprecated use `StopTaskResponse$Outbound` instead. */
    export type Outbound = StopTaskResponse$Outbound;
}