/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetUserDetailsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetUserDetailsResponseBodyData = {
    errors?: Array<GetUserDetailsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetUserDetailsResponseBody extends Error {
    errors?: Array<GetUserDetailsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetUserDetailsResponseBodyData;

    constructor(err: GetUserDetailsResponseBodyData) {
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

        this.name = "GetUserDetailsResponseBody";
    }
}

/** @internal */
export const GetUserDetailsErrors$inboundSchema: z.ZodType<
    GetUserDetailsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type GetUserDetailsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetUserDetailsErrors$outboundSchema: z.ZodType<
    GetUserDetailsErrors$Outbound,
    z.ZodTypeDef,
    GetUserDetailsErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserDetailsErrors$ {
    /** @deprecated use `GetUserDetailsErrors$inboundSchema` instead. */
    export const inboundSchema = GetUserDetailsErrors$inboundSchema;
    /** @deprecated use `GetUserDetailsErrors$outboundSchema` instead. */
    export const outboundSchema = GetUserDetailsErrors$outboundSchema;
    /** @deprecated use `GetUserDetailsErrors$Outbound` instead. */
    export type Outbound = GetUserDetailsErrors$Outbound;
}

/** @internal */
export const GetUserDetailsResponseBody$inboundSchema: z.ZodType<
    GetUserDetailsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetUserDetailsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetUserDetailsResponseBody(remapped);
    });

/** @internal */
export type GetUserDetailsResponseBody$Outbound = {
    errors?: Array<GetUserDetailsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetUserDetailsResponseBody$outboundSchema: z.ZodType<
    GetUserDetailsResponseBody$Outbound,
    z.ZodTypeDef,
    GetUserDetailsResponseBody
> = z
    .instanceof(GetUserDetailsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetUserDetailsErrors$outboundSchema)).optional(),
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
export namespace GetUserDetailsResponseBody$ {
    /** @deprecated use `GetUserDetailsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetUserDetailsResponseBody$inboundSchema;
    /** @deprecated use `GetUserDetailsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetUserDetailsResponseBody$outboundSchema;
    /** @deprecated use `GetUserDetailsResponseBody$Outbound` instead. */
    export type Outbound = GetUserDetailsResponseBody$Outbound;
}