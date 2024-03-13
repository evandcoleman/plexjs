/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type EnablePaperTrailErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type EnablePaperTrailResponseBodyData = {
    errors?: Array<EnablePaperTrailErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class EnablePaperTrailResponseBody extends Error {
    errors?: Array<EnablePaperTrailErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: EnablePaperTrailResponseBodyData;

    constructor(err: EnablePaperTrailResponseBodyData) {
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

        this.name = "EnablePaperTrailResponseBody";
    }
}

/** @internal */
export namespace EnablePaperTrailErrors$ {
    export type Inbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const inboundSchema: z.ZodType<EnablePaperTrailErrors, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EnablePaperTrailErrors> = z
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
export namespace EnablePaperTrailResponseBody$ {
    export type Inbound = {
        errors?: Array<EnablePaperTrailErrors$.Inbound> | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<EnablePaperTrailResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            errors: z.array(z.lazy(() => EnablePaperTrailErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new EnablePaperTrailResponseBody({
                ...(v.errors === undefined ? null : { errors: v.errors }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        errors?: Array<EnablePaperTrailErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EnablePaperTrailResponseBody> = z
        .instanceof(EnablePaperTrailResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => EnablePaperTrailErrors$.outboundSchema))
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
