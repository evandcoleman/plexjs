# GetTranscodeSessionsMediaContainer

## Example Usage

```typescript
import { GetTranscodeSessionsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTranscodeSessionsMediaContainer = {
    size: 1,
    transcodeSession: [
        {
            key: "vv3i2q2lax92qlzul1hbd4bx",
            throttled: false,
            complete: false,
            progress: 1.7999999523162842,
            size: -22,
            speed: 25.100000381469727,
            error: false,
            duration: 1445695,
            remaining: 53,
            context: "streaming",
            sourceVideoCodec: "h264",
            sourceAudioCodec: "aac",
            videoDecision: "transcode",
            audioDecision: "transcode",
            subtitleDecision: "burn",
            protocol: "http",
            container: "mkv",
            videoCodec: "h264",
            audioCodec: "opus",
            audioChannels: 1,
            transcodeHwRequested: true,
            timeStamp: 1705895805.4919229,
            maxOffsetAvailable: 29.53,
            minOffsetAvailable: 3.003000020980835,
        },
    ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `size`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `transcodeSession`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [operations.TranscodeSession](../../../sdk/models/operations/transcodesession.md)[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [<br/>{<br/>"key": "vv3i2q2lax92qlzul1hbd4bx",<br/>"throttled": false,<br/>"complete": false,<br/>"progress": 1.7999999523162842,<br/>"size": -22,<br/>"speed": 25.100000381469727,<br/>"error": false,<br/>"duration": 1445695,<br/>"remaining": 53,<br/>"context": "streaming",<br/>"sourceVideoCodec": "h264",<br/>"sourceAudioCodec": "aac",<br/>"videoDecision": "transcode",<br/>"audioDecision": "transcode",<br/>"subtitleDecision": "burn",<br/>"protocol": "http",<br/>"container": "mkv",<br/>"videoCodec": "h264",<br/>"audioCodec": "opus",<br/>"audioChannels": 1,<br/>"transcodeHwRequested": true,<br/>"timeStamp": 1705895805.4919229,<br/>"maxOffsetAvailable": 29.53,<br/>"minOffsetAvailable": 3.003000020980835<br/>}<br/>] |