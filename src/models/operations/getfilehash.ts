/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetFileHashRequest = {
    /**
     * This is the path to the local file, must be prefixed by `file://`
     */
    url: string;
    /**
     * Item type
     */
    type?: number | undefined;
};

export type GetFileHashResponse = {
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
export namespace GetFileHashRequest$ {
    export const inboundSchema: z.ZodType<GetFileHashRequest, z.ZodTypeDef, unknown> = z.object({
        url: z.string(),
        type: z.number().optional(),
    });

    export type Outbound = {
        url: string;
        type?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFileHashRequest> = z.object({
        url: z.string(),
        type: z.number().optional(),
    });
}

/** @internal */
export namespace GetFileHashResponse$ {
    export const inboundSchema: z.ZodType<GetFileHashResponse, z.ZodTypeDef, unknown> = z
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

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFileHashResponse> = z
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
}
