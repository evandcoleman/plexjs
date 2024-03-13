/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetServerIdentityMediaContainer = {
    size?: number | undefined;
    claimed?: boolean | undefined;
    machineIdentifier?: string | undefined;
    version?: string | undefined;
};

/**
 * The Server Identity information
 */
export type GetServerIdentityResponseBody = {
    mediaContainer?: GetServerIdentityMediaContainer | undefined;
};

export type GetServerIdentityResponse = {
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
    /**
     * The Server Identity information
     */
    object?: GetServerIdentityResponseBody | undefined;
};

/** @internal */
export namespace GetServerIdentityMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        claimed?: boolean | undefined;
        machineIdentifier?: string | undefined;
        version?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerIdentityMediaContainer, z.ZodTypeDef, Inbound> =
        z
            .object({
                size: z.number().optional(),
                claimed: z.boolean().optional(),
                machineIdentifier: z.string().optional(),
                version: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.size === undefined ? null : { size: v.size }),
                    ...(v.claimed === undefined ? null : { claimed: v.claimed }),
                    ...(v.machineIdentifier === undefined
                        ? null
                        : { machineIdentifier: v.machineIdentifier }),
                    ...(v.version === undefined ? null : { version: v.version }),
                };
            });

    export type Outbound = {
        size?: number | undefined;
        claimed?: boolean | undefined;
        machineIdentifier?: string | undefined;
        version?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetServerIdentityMediaContainer
    > = z
        .object({
            size: z.number().optional(),
            claimed: z.boolean().optional(),
            machineIdentifier: z.string().optional(),
            version: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.claimed === undefined ? null : { claimed: v.claimed }),
                ...(v.machineIdentifier === undefined
                    ? null
                    : { machineIdentifier: v.machineIdentifier }),
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });
}

/** @internal */
export namespace GetServerIdentityResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetServerIdentityMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerIdentityResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => GetServerIdentityMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: GetServerIdentityMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerIdentityResponseBody> =
        z
            .object({
                mediaContainer: z
                    .lazy(() => GetServerIdentityMediaContainer$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.mediaContainer === undefined
                        ? null
                        : { MediaContainer: v.mediaContainer }),
                };
            });
}

/** @internal */
export namespace GetServerIdentityResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetServerIdentityResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerIdentityResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetServerIdentityResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetServerIdentityResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerIdentityResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetServerIdentityResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
