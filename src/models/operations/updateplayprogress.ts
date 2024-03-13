/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdatePlayProgressRequest = {
    /**
     * the media key
     */
    key: string;
    /**
     * The time, in milliseconds, used to set the media playback progress.
     */
    time: number;
    /**
     * The playback state of the media item.
     */
    state: string;
};

export type UpdatePlayProgressResponse = {
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
export namespace UpdatePlayProgressRequest$ {
    export type Inbound = {
        key: string;
        time: number;
        state: string;
    };

    export const inboundSchema: z.ZodType<UpdatePlayProgressRequest, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string(),
            time: z.number(),
            state: z.string(),
        })
        .transform((v) => {
            return {
                key: v.key,
                time: v.time,
                state: v.state,
            };
        });

    export type Outbound = {
        key: string;
        time: number;
        state: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlayProgressRequest> = z
        .object({
            key: z.string(),
            time: z.number(),
            state: z.string(),
        })
        .transform((v) => {
            return {
                key: v.key,
                time: v.time,
                state: v.state,
            };
        });
}

/** @internal */
export namespace UpdatePlayProgressResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdatePlayProgressResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlayProgressResponse> = z
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
