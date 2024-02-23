/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetServerActivitiesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetServerActivitiesResponseBodyData = {
    errors?: Array<GetServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetServerActivitiesResponseBody extends Error {
    errors?: Array<GetServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerActivitiesResponseBodyData;

    constructor(err: GetServerActivitiesResponseBodyData) {
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

        this.name = "GetServerActivitiesResponseBody";
    }
}

/** @internal */
export namespace GetServerActivitiesErrors$ {
    export type Inbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerActivitiesErrors, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerActivitiesErrors> = z
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
export namespace GetServerActivitiesResponseBody$ {
    export type Inbound = {
        errors?: Array<GetServerActivitiesErrors$.Inbound> | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerActivitiesResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                errors: z.array(z.lazy(() => GetServerActivitiesErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                return new GetServerActivitiesResponseBody({
                    ...(v.errors === undefined ? null : { errors: v.errors }),
                    ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                });
            });
    export type Outbound = {
        errors?: Array<GetServerActivitiesErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetServerActivitiesResponseBody
    > = z
        .instanceof(GetServerActivitiesResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => GetServerActivitiesErrors$.outboundSchema))
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
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
