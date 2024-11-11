/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * The type of media to retrieve.
 *
 * @remarks
 * 1 = movie
 * 2 = show
 * 3 = season
 * 4 = episode
 * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
 */
export enum GetSearchLibraryQueryParamType {
  Movie = 1,
  TvShow = 2,
  Season = 3,
  Episode = 4,
  Audio = 8,
}

export type GetSearchLibraryRequest = {
  /**
   * The unique key of the Plex library.
   *
   * @remarks
   * Note: This is unique in the context of the Plex server.
   */
  sectionKey: number;
  /**
   * The type of media to retrieve.
   *
   * @remarks
   * 1 = movie
   * 2 = show
   * 3 = season
   * 4 = episode
   * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
   */
  type: GetSearchLibraryQueryParamType;
};

export type GetSearchLibraryMetadata = {
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

export type GetSearchLibraryMediaContainer = {
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
  metadata?: Array<GetSearchLibraryMetadata> | undefined;
};

/**
 * The contents of the library by section and type
 */
export type GetSearchLibraryResponseBody = {
  mediaContainer?: GetSearchLibraryMediaContainer | undefined;
};

export type GetSearchLibraryResponse = {
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
  object?: GetSearchLibraryResponseBody | undefined;
};

/** @internal */
export const GetSearchLibraryQueryParamType$inboundSchema: z.ZodNativeEnum<
  typeof GetSearchLibraryQueryParamType
> = z.nativeEnum(GetSearchLibraryQueryParamType);

/** @internal */
export const GetSearchLibraryQueryParamType$outboundSchema: z.ZodNativeEnum<
  typeof GetSearchLibraryQueryParamType
> = GetSearchLibraryQueryParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryQueryParamType$ {
  /** @deprecated use `GetSearchLibraryQueryParamType$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryQueryParamType$inboundSchema;
  /** @deprecated use `GetSearchLibraryQueryParamType$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryQueryParamType$outboundSchema;
}

/** @internal */
export const GetSearchLibraryRequest$inboundSchema: z.ZodType<
  GetSearchLibraryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sectionKey: z.number().int(),
  type: GetSearchLibraryQueryParamType$inboundSchema,
});

/** @internal */
export type GetSearchLibraryRequest$Outbound = {
  sectionKey: number;
  type: number;
};

/** @internal */
export const GetSearchLibraryRequest$outboundSchema: z.ZodType<
  GetSearchLibraryRequest$Outbound,
  z.ZodTypeDef,
  GetSearchLibraryRequest
> = z.object({
  sectionKey: z.number().int(),
  type: GetSearchLibraryQueryParamType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryRequest$ {
  /** @deprecated use `GetSearchLibraryRequest$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryRequest$inboundSchema;
  /** @deprecated use `GetSearchLibraryRequest$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryRequest$outboundSchema;
  /** @deprecated use `GetSearchLibraryRequest$Outbound` instead. */
  export type Outbound = GetSearchLibraryRequest$Outbound;
}

/** @internal */
export const GetSearchLibraryMetadata$inboundSchema: z.ZodType<
  GetSearchLibraryMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
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

/** @internal */
export type GetSearchLibraryMetadata$Outbound = {
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

/** @internal */
export const GetSearchLibraryMetadata$outboundSchema: z.ZodType<
  GetSearchLibraryMetadata$Outbound,
  z.ZodTypeDef,
  GetSearchLibraryMetadata
> = z.object({
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryMetadata$ {
  /** @deprecated use `GetSearchLibraryMetadata$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryMetadata$inboundSchema;
  /** @deprecated use `GetSearchLibraryMetadata$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryMetadata$outboundSchema;
  /** @deprecated use `GetSearchLibraryMetadata$Outbound` instead. */
  export type Outbound = GetSearchLibraryMetadata$Outbound;
}

/** @internal */
export const GetSearchLibraryMediaContainer$inboundSchema: z.ZodType<
  GetSearchLibraryMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
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
  Metadata: z.array(z.lazy(() => GetSearchLibraryMetadata$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetSearchLibraryMediaContainer$Outbound = {
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
  Metadata?: Array<GetSearchLibraryMetadata$Outbound> | undefined;
};

/** @internal */
export const GetSearchLibraryMediaContainer$outboundSchema: z.ZodType<
  GetSearchLibraryMediaContainer$Outbound,
  z.ZodTypeDef,
  GetSearchLibraryMediaContainer
> = z.object({
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
  metadata: z.array(z.lazy(() => GetSearchLibraryMetadata$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    metadata: "Metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryMediaContainer$ {
  /** @deprecated use `GetSearchLibraryMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryMediaContainer$inboundSchema;
  /** @deprecated use `GetSearchLibraryMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryMediaContainer$outboundSchema;
  /** @deprecated use `GetSearchLibraryMediaContainer$Outbound` instead. */
  export type Outbound = GetSearchLibraryMediaContainer$Outbound;
}

/** @internal */
export const GetSearchLibraryResponseBody$inboundSchema: z.ZodType<
  GetSearchLibraryResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetSearchLibraryMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetSearchLibraryResponseBody$Outbound = {
  MediaContainer?: GetSearchLibraryMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetSearchLibraryResponseBody$outboundSchema: z.ZodType<
  GetSearchLibraryResponseBody$Outbound,
  z.ZodTypeDef,
  GetSearchLibraryResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetSearchLibraryMediaContainer$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryResponseBody$ {
  /** @deprecated use `GetSearchLibraryResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryResponseBody$inboundSchema;
  /** @deprecated use `GetSearchLibraryResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryResponseBody$outboundSchema;
  /** @deprecated use `GetSearchLibraryResponseBody$Outbound` instead. */
  export type Outbound = GetSearchLibraryResponseBody$Outbound;
}

/** @internal */
export const GetSearchLibraryResponse$inboundSchema: z.ZodType<
  GetSearchLibraryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetSearchLibraryResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetSearchLibraryResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetSearchLibraryResponseBody$Outbound | undefined;
};

/** @internal */
export const GetSearchLibraryResponse$outboundSchema: z.ZodType<
  GetSearchLibraryResponse$Outbound,
  z.ZodTypeDef,
  GetSearchLibraryResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetSearchLibraryResponseBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchLibraryResponse$ {
  /** @deprecated use `GetSearchLibraryResponse$inboundSchema` instead. */
  export const inboundSchema = GetSearchLibraryResponse$inboundSchema;
  /** @deprecated use `GetSearchLibraryResponse$outboundSchema` instead. */
  export const outboundSchema = GetSearchLibraryResponse$outboundSchema;
  /** @deprecated use `GetSearchLibraryResponse$Outbound` instead. */
  export type Outbound = GetSearchLibraryResponse$Outbound;
}
