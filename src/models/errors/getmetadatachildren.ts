/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetMetadataChildrenErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetMetadataChildrenResponseBodyData = {
    errors?: Array<GetMetadataChildrenErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetMetadataChildrenResponseBody extends Error {
    errors?: Array<GetMetadataChildrenErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetMetadataChildrenResponseBodyData;

    constructor(err: GetMetadataChildrenResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetMetadataChildrenResponseBody";
    }
}

/** @internal */
export namespace GetMetadataChildrenErrors$ {
    export const inboundSchema: z.ZodType<GetMetadataChildrenErrors, z.ZodTypeDef, unknown> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMetadataChildrenErrors> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });
}

/** @internal */
export namespace GetMetadataChildrenResponseBody$ {
    export const inboundSchema: z.ZodType<GetMetadataChildrenResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                errors: z.array(z.lazy(() => GetMetadataChildrenErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                const remapped = remap$(v, {
                    RawResponse: "rawResponse",
                });

                return new GetMetadataChildrenResponseBody(remapped);
            });

    export type Outbound = {
        errors?: Array<GetMetadataChildrenErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetMetadataChildrenResponseBody
    > = z
        .instanceof(GetMetadataChildrenResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => GetMetadataChildrenErrors$.outboundSchema))
                        .optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                    });
                })
        );
}
