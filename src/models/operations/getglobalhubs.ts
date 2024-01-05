/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
 */
export enum OnlyTransient {
    Zero = 0,
    One = 1,
}

export type GetGlobalHubsRequest = {
    /**
     * The number of items to return with each hub.
     */
    count?: number | undefined;
    /**
     * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
     */
    onlyTransient?: OnlyTransient | undefined;
};

export type GetGlobalHubsResponse = {
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
export const OnlyTransient$ = z.nativeEnum(OnlyTransient);

/** @internal */
export namespace GetGlobalHubsRequest$ {
    export type Inbound = {
        count?: number | undefined;
        onlyTransient?: OnlyTransient | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().optional(),
            onlyTransient: OnlyTransient$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.onlyTransient === undefined ? null : { onlyTransient: v.onlyTransient }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        onlyTransient?: OnlyTransient | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsRequest> = z
        .object({
            count: z.number().optional(),
            onlyTransient: OnlyTransient$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.onlyTransient === undefined ? null : { onlyTransient: v.onlyTransient }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsResponse> = z
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