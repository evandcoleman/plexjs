/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
export namespace MarkPlayedRequest$ {
    export const inboundSchema: z.ZodType<MarkPlayedRequest, z.ZodTypeDef, unknown> = z
        .object({
            key: z.number(),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });

    export type Outbound = {
        key: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkPlayedRequest> = z
        .object({
            key: z.number(),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });
}

/** @internal */
export namespace MarkPlayedResponse$ {
    export const inboundSchema: z.ZodType<MarkPlayedResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkPlayedResponse> = z
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
