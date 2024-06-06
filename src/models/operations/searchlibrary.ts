/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

/**
 * Plex content type to search for
 */
export enum Type {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export type SearchLibraryRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * Plex content type to search for
     */
    type: Type;
};

export type SearchLibraryMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    parentRatingKey?: string | undefined;
    guid?: string | undefined;
    parentGuid?: string | undefined;
    parentStudio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    parentKey?: string | undefined;
    parentTitle?: string | undefined;
    summary?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    parentYear?: number | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    parentThumb?: string | undefined;
    parentTheme?: string | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

export type SearchLibraryMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    art?: string | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    nocache?: boolean | undefined;
    thumb?: string | undefined;
    title1?: string | undefined;
    title2?: string | undefined;
    viewGroup?: string | undefined;
    viewMode?: number | undefined;
    metadata?: Array<SearchLibraryMetadata> | undefined;
};

/**
 * The contents of the library by section and type
 */
export type SearchLibraryResponseBody = {
    mediaContainer?: SearchLibraryMediaContainer | undefined;
};

export type SearchLibraryResponse = {
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
     * The contents of the library by section and type
     */
    object?: SearchLibraryResponseBody | undefined;
};

/** @internal */
export namespace Type$ {
    export const inboundSchema = z.nativeEnum(Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace SearchLibraryRequest$ {
    export const inboundSchema: z.ZodType<SearchLibraryRequest, z.ZodTypeDef, unknown> = z.object({
        sectionId: z.number().int(),
        type: Type$.inboundSchema,
    });

    export type Outbound = {
        sectionId: number;
        type: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryRequest> = z.object(
        {
            sectionId: z.number().int(),
            type: Type$.outboundSchema,
        }
    );
}

/** @internal */
export namespace SearchLibraryMetadata$ {
    export const inboundSchema: z.ZodType<SearchLibraryMetadata, z.ZodTypeDef, unknown> = z.object({
        ratingKey: z.string().optional(),
        key: z.string().optional(),
        parentRatingKey: z.string().optional(),
        guid: z.string().optional(),
        parentGuid: z.string().optional(),
        parentStudio: z.string().optional(),
        type: z.string().optional(),
        title: z.string().optional(),
        parentKey: z.string().optional(),
        parentTitle: z.string().optional(),
        summary: z.string().optional(),
        index: z.number().int().optional(),
        parentIndex: z.number().int().optional(),
        parentYear: z.number().int().optional(),
        thumb: z.string().optional(),
        art: z.string().optional(),
        parentThumb: z.string().optional(),
        parentTheme: z.string().optional(),
        addedAt: z.number().int().optional(),
        updatedAt: z.number().int().optional(),
    });

    export type Outbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        parentRatingKey?: string | undefined;
        guid?: string | undefined;
        parentGuid?: string | undefined;
        parentStudio?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        parentKey?: string | undefined;
        parentTitle?: string | undefined;
        summary?: string | undefined;
        index?: number | undefined;
        parentIndex?: number | undefined;
        parentYear?: number | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        parentThumb?: string | undefined;
        parentTheme?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryMetadata> =
        z.object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            parentRatingKey: z.string().optional(),
            guid: z.string().optional(),
            parentGuid: z.string().optional(),
            parentStudio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            parentKey: z.string().optional(),
            parentTitle: z.string().optional(),
            summary: z.string().optional(),
            index: z.number().int().optional(),
            parentIndex: z.number().int().optional(),
            parentYear: z.number().int().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            parentThumb: z.string().optional(),
            parentTheme: z.string().optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
        });
}

/** @internal */
export namespace SearchLibraryMediaContainer$ {
    export const inboundSchema: z.ZodType<SearchLibraryMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            nocache: z.boolean().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            title2: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            Metadata: z.array(z.lazy(() => SearchLibraryMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Metadata: "metadata",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        art?: string | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        nocache?: boolean | undefined;
        thumb?: string | undefined;
        title1?: string | undefined;
        title2?: string | undefined;
        viewGroup?: string | undefined;
        viewMode?: number | undefined;
        Metadata?: Array<SearchLibraryMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            nocache: z.boolean().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            title2: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            metadata: z.array(z.lazy(() => SearchLibraryMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                metadata: "Metadata",
            });
        });
}

/** @internal */
export namespace SearchLibraryResponseBody$ {
    export const inboundSchema: z.ZodType<SearchLibraryResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => SearchLibraryMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: SearchLibraryMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => SearchLibraryMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace SearchLibraryResponse$ {
    export const inboundSchema: z.ZodType<SearchLibraryResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => SearchLibraryResponseBody$.inboundSchema).optional(),
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
        object?: SearchLibraryResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => SearchLibraryResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
