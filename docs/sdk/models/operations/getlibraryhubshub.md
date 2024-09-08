# GetLibraryHubsHub

## Example Usage

```typescript
import { GetLibraryHubsHub } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetLibraryHubsHub = {
    key: "/library/sections/1/all?sort=lastViewedAt:desc&unwatched=0&viewOffset=0",
    title: "Recently Played Movies",
    type: "movie",
    hubIdentifier: "movie.recentlyviewed.1",
    context: "hub.movie.recentlyviewed",
    size: 6,
    more: true,
    style: "shelf",
    hubKey: "/library/metadata/66485,66098,57249,11449,5858,14944",
    metadata: [
        {
            ratingKey: "14944",
            key: "/library/metadata/14944",
            guid: "plex://movie/5d77686eeb5d26001f1eb339",
            studio: "Walt Disney Animation Studios",
            type: "movie",
            title: "Tangled",
            librarySectionTitle: "Movies",
            librarySectionID: 1,
            librarySectionKey: "/library/sections/1",
            contentRating: "PG",
            summary:
                "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
            rating: 8.9,
            audienceRating: 8.7,
            viewCount: 1,
            lastViewedAt: 1704936047,
            year: 2010,
            tagline: "They're taking adventure to new lengths.",
            thumb: "/library/metadata/14944/thumb/1705739847",
            art: "/library/metadata/14944/art/1705739847",
            duration: 6017237,
            originallyAvailableAt: new RFCDate("2010-11-24T00:00:00Z"),
            addedAt: 1589412494,
            updatedAt: 1705739847,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            primaryExtraKey: "/library/metadata/14952",
            ratingImage: "rottentomatoes://image.rating.ripe",
            media: [
                {
                    id: 38247,
                    duration: 6017237,
                    bitrate: 2051,
                    width: 1920,
                    height: 1080,
                    aspectRatio: 1.78,
                    audioChannels: 2,
                    audioCodec: "aac",
                    videoCodec: "h264",
                    videoResolution: "1080",
                    container: "mp4",
                    videoFrameRate: "24p",
                    optimizedForStreaming: 1,
                    audioProfile: "lc",
                    has64bitOffsets: false,
                    videoProfile: "high",
                    part: [
                        {
                            id: 38247,
                            key: "/library/parts/38247/1589412494/file.mp4",
                            duration: 6017237,
                            file: "/movies/Tangled (2010)/Tangled (2010) Bluray-1080p.mp4",
                            size: 1545647447,
                            audioProfile: "lc",
                            container: "mp4",
                            has64bitOffsets: false,
                            optimizedForStreaming: true,
                            videoProfile: "high",
                        },
                    ],
                },
            ],
            genre: [
                {
                    tag: "Animation",
                },
            ],
            country: [
                {
                    tag: "United States of America",
                },
            ],
            director: [
                {
                    tag: "Nathan Greno",
                },
            ],
            role: [
                {
                    tag: "Donna Murphy",
                },
            ],
            writer: [
                {
                    tag: "Wilhelm Grimm",
                },
            ],
            skipCount: 1,
            chapterSource: "media",
        },
    ],
    promoted: true,
    random: true,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `key`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | /library/sections/1/all?sort=lastViewedAt:desc&unwatched=0&viewOffset=0                         |
| `title`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | Recently Played Movies                                                                          |
| `type`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | movie                                                                                           |
| `hubIdentifier`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | movie.recentlyviewed.1                                                                          |
| `context`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | hub.movie.recentlyviewed                                                                        |
| `size`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 6                                                                                               |
| `more`                                                                                          | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             | true                                                                                            |
| `style`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | shelf                                                                                           |
| `hubKey`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | /library/metadata/66485,66098,57249,11449,5858,14944                                            |
| `metadata`                                                                                      | [operations.GetLibraryHubsMetadata](../../../sdk/models/operations/getlibraryhubsmetadata.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `promoted`                                                                                      | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             | true                                                                                            |
| `random`                                                                                        | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             | true                                                                                            |