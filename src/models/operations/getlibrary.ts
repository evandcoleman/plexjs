/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Whether or not to include details for a section (types, filters, and sorts).
 *
 * @remarks
 * Only exists for backwards compatibility, media providers other than the server libraries have it on always.
 *
 */
export enum IncludeDetails {
    Zero = 0,
    One = 1,
}

export type GetLibraryRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * Whether or not to include details for a section (types, filters, and sorts).
     *
     * @remarks
     * Only exists for backwards compatibility, media providers other than the server libraries have it on always.
     *
     */
    includeDetails?: IncludeDetails | undefined;
};

export type GetLibraryDirectory = {
    key?: string | undefined;
    title?: string | undefined;
    secondary?: boolean | undefined;
    prompt?: string | undefined;
    search?: boolean | undefined;
};

export type Filter = {
    filter?: string | undefined;
    filterType?: string | undefined;
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
};

export type Sort = {
    default?: string | undefined;
    defaultDirection?: string | undefined;
    descKey?: string | undefined;
    firstCharacterKey?: string | undefined;
    key?: string | undefined;
    title?: string | undefined;
};

export type Field = {
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
    subType?: string | undefined;
};

export type GetLibraryType = {
    key?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    active?: boolean | undefined;
    filter?: Array<Filter> | undefined;
    sort?: Array<Sort> | undefined;
    field?: Array<Field> | undefined;
};

export type Operator = {
    key?: string | undefined;
    title?: string | undefined;
};

export type FieldType = {
    type?: string | undefined;
    operator?: Array<Operator> | undefined;
};

export type GetLibraryMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    art?: string | undefined;
    content?: string | undefined;
    identifier?: string | undefined;
    librarySectionID?: number | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    thumb?: string | undefined;
    title1?: string | undefined;
    viewGroup?: string | undefined;
    viewMode?: number | undefined;
    directory?: Array<GetLibraryDirectory> | undefined;
    type?: Array<GetLibraryType> | undefined;
    fieldType?: Array<FieldType> | undefined;
};

/**
 * The details of the library
 */
export type GetLibraryResponseBody = {
    mediaContainer?: GetLibraryMediaContainer | undefined;
};

export type GetLibraryResponse = {
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
     * The details of the library
     */
    object?: GetLibraryResponseBody | undefined;
};

/** @internal */
export const IncludeDetails$ = z.nativeEnum(IncludeDetails);

/** @internal */
export namespace GetLibraryRequest$ {
    export type Inbound = {
        sectionId: number;
        includeDetails?: IncludeDetails | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryRequest, z.ZodTypeDef, Inbound> = z
        .object({
            sectionId: z.number(),
            includeDetails: IncludeDetails$.default(IncludeDetails.Zero),
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                includeDetails: v.includeDetails,
            };
        });

    export type Outbound = {
        sectionId: number;
        includeDetails: IncludeDetails;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryRequest> = z
        .object({
            sectionId: z.number(),
            includeDetails: IncludeDetails$.default(IncludeDetails.Zero),
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                includeDetails: v.includeDetails,
            };
        });
}

/** @internal */
export namespace GetLibraryDirectory$ {
    export type Inbound = {
        key?: string | undefined;
        title?: string | undefined;
        secondary?: boolean | undefined;
        prompt?: string | undefined;
        search?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryDirectory, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            secondary: z.boolean().optional(),
            prompt: z.string().optional(),
            search: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.secondary === undefined ? null : { secondary: v.secondary }),
                ...(v.prompt === undefined ? null : { prompt: v.prompt }),
                ...(v.search === undefined ? null : { search: v.search }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        title?: string | undefined;
        secondary?: boolean | undefined;
        prompt?: string | undefined;
        search?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryDirectory> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            secondary: z.boolean().optional(),
            prompt: z.string().optional(),
            search: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.secondary === undefined ? null : { secondary: v.secondary }),
                ...(v.prompt === undefined ? null : { prompt: v.prompt }),
                ...(v.search === undefined ? null : { search: v.search }),
            };
        });
}

/** @internal */
export namespace Filter$ {
    export type Inbound = {
        filter?: string | undefined;
        filterType?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Filter, z.ZodTypeDef, Inbound> = z
        .object({
            filter: z.string().optional(),
            filterType: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.filterType === undefined ? null : { filterType: v.filterType }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        filter?: string | undefined;
        filterType?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Filter> = z
        .object({
            filter: z.string().optional(),
            filterType: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.filterType === undefined ? null : { filterType: v.filterType }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace Sort$ {
    export type Inbound = {
        default?: string | undefined;
        defaultDirection?: string | undefined;
        descKey?: string | undefined;
        firstCharacterKey?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Sort, z.ZodTypeDef, Inbound> = z
        .object({
            default: z.string().optional(),
            defaultDirection: z.string().optional(),
            descKey: z.string().optional(),
            firstCharacterKey: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.default === undefined ? null : { default: v.default }),
                ...(v.defaultDirection === undefined
                    ? null
                    : { defaultDirection: v.defaultDirection }),
                ...(v.descKey === undefined ? null : { descKey: v.descKey }),
                ...(v.firstCharacterKey === undefined
                    ? null
                    : { firstCharacterKey: v.firstCharacterKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        default?: string | undefined;
        defaultDirection?: string | undefined;
        descKey?: string | undefined;
        firstCharacterKey?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Sort> = z
        .object({
            default: z.string().optional(),
            defaultDirection: z.string().optional(),
            descKey: z.string().optional(),
            firstCharacterKey: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.default === undefined ? null : { default: v.default }),
                ...(v.defaultDirection === undefined
                    ? null
                    : { defaultDirection: v.defaultDirection }),
                ...(v.descKey === undefined ? null : { descKey: v.descKey }),
                ...(v.firstCharacterKey === undefined
                    ? null
                    : { firstCharacterKey: v.firstCharacterKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace Field$ {
    export type Inbound = {
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        subType?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Field, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            subType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.subType === undefined ? null : { subType: v.subType }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        subType?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Field> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            subType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.subType === undefined ? null : { subType: v.subType }),
            };
        });
}

/** @internal */
export namespace GetLibraryType$ {
    export type Inbound = {
        key?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        active?: boolean | undefined;
        Filter?: Array<Filter$.Inbound> | undefined;
        Sort?: Array<Sort$.Inbound> | undefined;
        Field?: Array<Field$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryType, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            active: z.boolean().optional(),
            Filter: z.array(z.lazy(() => Filter$.inboundSchema)).optional(),
            Sort: z.array(z.lazy(() => Sort$.inboundSchema)).optional(),
            Field: z.array(z.lazy(() => Field$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.Filter === undefined ? null : { filter: v.Filter }),
                ...(v.Sort === undefined ? null : { sort: v.Sort }),
                ...(v.Field === undefined ? null : { field: v.Field }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        active?: boolean | undefined;
        Filter?: Array<Filter$.Outbound> | undefined;
        Sort?: Array<Sort$.Outbound> | undefined;
        Field?: Array<Field$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryType> = z
        .object({
            key: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            active: z.boolean().optional(),
            filter: z.array(z.lazy(() => Filter$.outboundSchema)).optional(),
            sort: z.array(z.lazy(() => Sort$.outboundSchema)).optional(),
            field: z.array(z.lazy(() => Field$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.filter === undefined ? null : { Filter: v.filter }),
                ...(v.sort === undefined ? null : { Sort: v.sort }),
                ...(v.field === undefined ? null : { Field: v.field }),
            };
        });
}

/** @internal */
export namespace Operator$ {
    export type Inbound = {
        key?: string | undefined;
        title?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Operator, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Operator> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace FieldType$ {
    export type Inbound = {
        type?: string | undefined;
        Operator?: Array<Operator$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<FieldType, z.ZodTypeDef, Inbound> = z
        .object({
            type: z.string().optional(),
            Operator: z.array(z.lazy(() => Operator$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.Operator === undefined ? null : { operator: v.Operator }),
            };
        });

    export type Outbound = {
        type?: string | undefined;
        Operator?: Array<Operator$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FieldType> = z
        .object({
            type: z.string().optional(),
            operator: z.array(z.lazy(() => Operator$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.operator === undefined ? null : { Operator: v.operator }),
            };
        });
}

/** @internal */
export namespace GetLibraryMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        art?: string | undefined;
        content?: string | undefined;
        identifier?: string | undefined;
        librarySectionID?: number | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        thumb?: string | undefined;
        title1?: string | undefined;
        viewGroup?: string | undefined;
        viewMode?: number | undefined;
        Directory?: Array<GetLibraryDirectory$.Inbound> | undefined;
        Type?: Array<GetLibraryType$.Inbound> | undefined;
        FieldType?: Array<FieldType$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryMediaContainer, z.ZodTypeDef, Inbound> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            content: z.string().optional(),
            identifier: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            Directory: z.array(z.lazy(() => GetLibraryDirectory$.inboundSchema)).optional(),
            Type: z.array(z.lazy(() => GetLibraryType$.inboundSchema)).optional(),
            FieldType: z.array(z.lazy(() => FieldType$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
                ...(v.mediaTagPrefix === undefined ? null : { mediaTagPrefix: v.mediaTagPrefix }),
                ...(v.mediaTagVersion === undefined
                    ? null
                    : { mediaTagVersion: v.mediaTagVersion }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.title1 === undefined ? null : { title1: v.title1 }),
                ...(v.viewGroup === undefined ? null : { viewGroup: v.viewGroup }),
                ...(v.viewMode === undefined ? null : { viewMode: v.viewMode }),
                ...(v.Directory === undefined ? null : { directory: v.Directory }),
                ...(v.Type === undefined ? null : { type: v.Type }),
                ...(v.FieldType === undefined ? null : { fieldType: v.FieldType }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        art?: string | undefined;
        content?: string | undefined;
        identifier?: string | undefined;
        librarySectionID?: number | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        thumb?: string | undefined;
        title1?: string | undefined;
        viewGroup?: string | undefined;
        viewMode?: number | undefined;
        Directory?: Array<GetLibraryDirectory$.Outbound> | undefined;
        Type?: Array<GetLibraryType$.Outbound> | undefined;
        FieldType?: Array<FieldType$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            content: z.string().optional(),
            identifier: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            directory: z.array(z.lazy(() => GetLibraryDirectory$.outboundSchema)).optional(),
            type: z.array(z.lazy(() => GetLibraryType$.outboundSchema)).optional(),
            fieldType: z.array(z.lazy(() => FieldType$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
                ...(v.mediaTagPrefix === undefined ? null : { mediaTagPrefix: v.mediaTagPrefix }),
                ...(v.mediaTagVersion === undefined
                    ? null
                    : { mediaTagVersion: v.mediaTagVersion }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.title1 === undefined ? null : { title1: v.title1 }),
                ...(v.viewGroup === undefined ? null : { viewGroup: v.viewGroup }),
                ...(v.viewMode === undefined ? null : { viewMode: v.viewMode }),
                ...(v.directory === undefined ? null : { Directory: v.directory }),
                ...(v.type === undefined ? null : { Type: v.type }),
                ...(v.fieldType === undefined ? null : { FieldType: v.fieldType }),
            };
        });
}

/** @internal */
export namespace GetLibraryResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetLibraryMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => GetLibraryMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: GetLibraryMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetLibraryMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace GetLibraryResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetLibraryResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetLibraryResponseBody$.inboundSchema).optional(),
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
        object?: GetLibraryResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetLibraryResponseBody$.outboundSchema).optional(),
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
