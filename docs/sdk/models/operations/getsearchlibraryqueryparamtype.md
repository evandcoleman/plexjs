# GetSearchLibraryQueryParamType

The type of media to retrieve.
1 = movie
2 = show
3 = season
4 = episode
E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries


## Example Usage

```typescript
import { GetSearchLibraryQueryParamType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchLibraryQueryParamType =
  GetSearchLibraryQueryParamType.TvShow;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Movie`   | 1         |
| `TvShow`  | 2         |
| `Season`  | 3         |
| `Episode` | 4         |