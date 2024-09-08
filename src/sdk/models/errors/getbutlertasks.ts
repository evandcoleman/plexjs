/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetButlerTasksErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetButlerTasksResponseBodyData = {
    errors?: Array<GetButlerTasksErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetButlerTasksResponseBody extends Error {
    errors?: Array<GetButlerTasksErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetButlerTasksResponseBodyData;

    constructor(err: GetButlerTasksResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.name = "GetButlerTasksResponseBody";
    }
}

/** @internal */
export const GetButlerTasksErrors$inboundSchema: z.ZodType<
    GetButlerTasksErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type GetButlerTasksErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetButlerTasksErrors$outboundSchema: z.ZodType<
    GetButlerTasksErrors$Outbound,
    z.ZodTypeDef,
    GetButlerTasksErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetButlerTasksErrors$ {
    /** @deprecated use `GetButlerTasksErrors$inboundSchema` instead. */
    export const inboundSchema = GetButlerTasksErrors$inboundSchema;
    /** @deprecated use `GetButlerTasksErrors$outboundSchema` instead. */
    export const outboundSchema = GetButlerTasksErrors$outboundSchema;
    /** @deprecated use `GetButlerTasksErrors$Outbound` instead. */
    export type Outbound = GetButlerTasksErrors$Outbound;
}

/** @internal */
export const GetButlerTasksResponseBody$inboundSchema: z.ZodType<
    GetButlerTasksResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetButlerTasksErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetButlerTasksResponseBody(remapped);
    });

/** @internal */
export type GetButlerTasksResponseBody$Outbound = {
    errors?: Array<GetButlerTasksErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetButlerTasksResponseBody$outboundSchema: z.ZodType<
    GetButlerTasksResponseBody$Outbound,
    z.ZodTypeDef,
    GetButlerTasksResponseBody
> = z
    .instanceof(GetButlerTasksResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetButlerTasksErrors$outboundSchema)).optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetButlerTasksResponseBody$ {
    /** @deprecated use `GetButlerTasksResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetButlerTasksResponseBody$inboundSchema;
    /** @deprecated use `GetButlerTasksResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetButlerTasksResponseBody$outboundSchema;
    /** @deprecated use `GetButlerTasksResponseBody$Outbound` instead. */
    export type Outbound = GetButlerTasksResponseBody$Outbound;
}