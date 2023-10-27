export interface GetOnDeckResponse {
  MediaContainer?: MediaContainer;
}
interface MediaContainer {
  size?: number;
  allowSync?: boolean;
  identifier?: string;
  mediaTagPrefix?: string;
  mediaTagVersion?: number;
  mixedParents?: boolean;
  Metadata?: {
    allowSync?: boolean;
    librarySectionID?: number;
    librarySectionTitle?: string;
    librarySectionUUID?: string;
    ratingKey?: number;
    key?: string;
    parentRatingKey?: number;
    grandparentRatingKey?: number;
    guid?: string;
    parentGuid?: string;
    grandparentGuid?: string;
    title?: string;
    grandparentKey?: string;
    parentKey?: string;
    librarySectionKey?: string;
    grandparentTitle?: string;
    parentTitle?: string;
    contentRating?: string;
    summary?: string;
    index?: number;
    parentIndex?: number;
    lastViewedAt?: number;
    year?: number;
    thumb?: string;
    art?: string;
    parentThumb?: string;
    grandparentThumb?: string;
    grandparentArt?: string;
    grandparentTheme?: string;
    duration?: number;
    originallyAvailableAt?: string;
    addedAt?: number;
    updatedAt?: number;
    Media?: {
      id?: number;
      duration?: number;
      bitrate?: number;
      width?: number;
      height?: number;
      aspectRatio?: number;
      audioChannels?: number;
      audioCodec?: string;
      videoCodec?: string;
      videoResolution?: string;
      container?: string;
      videoFrameRate?: string;
      audioProfile?: string;
      videoProfile?: string;
      Part?: {
        id?: number;
        key?: string;
        duration?: number;
        file?: string;
        size?: number;
        audioProfile?: string;
        container?: string;
        videoProfile?: string;
        Stream?: {
          id?: number;
          streamType?: number;
          codec?: string;
          index?: number;
          bitrate?: number;
          language?: string;
          languageTag?: string;
          languageCode?: string;
          bitDepth?: number;
          chromaLocation?: string;
          chromaSubsampling?: string;
          codedHeight?: number;
          codedWidth?: number;
          colorRange?: string;
          frameRate?: number;
          height?: number;
          level?: number;
          profile?: string;
          refFrames?: number;
          width?: number;
          displayTitle?: string;
          extendedDisplayTitle?: string;
          default_?: boolean;
        }[];
      }[];
    }[];
    Guid?: {
      id?: string;
    }[];
    type_?: string;
  }[];
}