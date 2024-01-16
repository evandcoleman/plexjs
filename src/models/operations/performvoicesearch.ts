/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PerformVoiceSearchRequest = {
    /**
     * The query term
     */
    query: string;
    /**
     * This gives context to the search, and can result in re-ordering of search result hubs
     */
    sectionId?: number | undefined;
    /**
     * The number of items to return per hub
     */
    limit?: number | undefined;
};

export type PerformVoiceSearchResponse = {
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
export namespace PerformVoiceSearchRequest$ {
    export type Inbound = {
        query: string;
        sectionId?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<PerformVoiceSearchRequest, z.ZodTypeDef, Inbound> = z
        .object({
            query: z.string(),
            sectionId: z.number().optional(),
            limit: z.number().default(3),
        })
        .transform((v) => {
            return {
                query: v.query,
                ...(v.sectionId === undefined ? null : { sectionId: v.sectionId }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });

    export type Outbound = {
        query: string;
        sectionId?: number | undefined;
        limit: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchRequest> = z
        .object({
            query: z.string(),
            sectionId: z.number().optional(),
            limit: z.number().default(3),
        })
        .transform((v) => {
            return {
                query: v.query,
                ...(v.sectionId === undefined ? null : { sectionId: v.sectionId }),
                limit: v.limit,
            };
        });
}

/** @internal */
export namespace PerformVoiceSearchResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PerformVoiceSearchResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PerformVoiceSearchResponse> = z
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
