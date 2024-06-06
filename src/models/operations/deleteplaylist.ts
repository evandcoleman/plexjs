/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type DeletePlaylistRequest = {
    /**
     * the ID of the playlist
     */
    playlistID: number;
};

export type DeletePlaylistResponse = {
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
export namespace DeletePlaylistRequest$ {
    export const inboundSchema: z.ZodType<DeletePlaylistRequest, z.ZodTypeDef, unknown> = z.object({
        playlistID: z.number(),
    });

    export type Outbound = {
        playlistID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePlaylistRequest> =
        z.object({
            playlistID: z.number(),
        });
}

/** @internal */
export namespace DeletePlaylistResponse$ {
    export const inboundSchema: z.ZodType<DeletePlaylistResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePlaylistResponse> = z
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
