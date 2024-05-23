/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdatePlayProgressErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type UpdatePlayProgressResponseBodyData = {
    errors?: Array<UpdatePlayProgressErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class UpdatePlayProgressResponseBody extends Error {
    errors?: Array<UpdatePlayProgressErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdatePlayProgressResponseBodyData;

    constructor(err: UpdatePlayProgressResponseBodyData) {
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

        this.name = "UpdatePlayProgressResponseBody";
    }
}

/** @internal */
export namespace UpdatePlayProgressErrors$ {
    export const inboundSchema: z.ZodType<UpdatePlayProgressErrors, z.ZodTypeDef, unknown> = z
        .object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlayProgressErrors> = z
        .object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}

/** @internal */
export namespace UpdatePlayProgressResponseBody$ {
    export const inboundSchema: z.ZodType<UpdatePlayProgressResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => UpdatePlayProgressErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new UpdatePlayProgressResponseBody({
                ...(v.errors === undefined ? null : { errors: v.errors }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });

    export type Outbound = {
        errors?: Array<UpdatePlayProgressErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlayProgressResponseBody> =
        z
            .instanceof(UpdatePlayProgressResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        errors: z
                            .array(z.lazy(() => UpdatePlayProgressErrors$.outboundSchema))
                            .optional(),
                        rawResponse: z
                            .instanceof(Response)
                            .transform(() => {
                                throw new Error("Response cannot be serialized");
                            })
                            .optional(),
                    })
                    .transform((v) => {
                        return {
                            ...(v.errors === undefined ? null : { errors: v.errors }),
                            ...(v.rawResponse === undefined
                                ? null
                                : { RawResponse: v.rawResponse }),
                        };
                    })
            );
}
