# PastSubscription

## Example Usage

```typescript
import { PastSubscription, PostUsersSignInDataState } from "@lukehagar/plexjs/sdk/models/operations";

let value: PastSubscription = {
    id: "<id>",
    mode: "<value>",
    renewsAt: 1556281940,
    endsAt: 1556281940,
    canceled: false,
    gracePeriod: false,
    onHold: false,
    canReactivate: false,
    canUpgrade: false,
    canDowngrade: false,
    canConvert: false,
    type: "plexpass",
    transfer: "<value>",
    state: PostUsersSignInDataState.Ended,
    billing: {
        internalPaymentMethod: {},
        paymentMethodId: 880476,
    },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `mode`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `renewsAt`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | 1556281940                                                                                        |
| `endsAt`                                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | 1556281940                                                                                        |
| `canceled`                                                                                        | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `gracePeriod`                                                                                     | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `onHold`                                                                                          | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `canReactivate`                                                                                   | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `canUpgrade`                                                                                      | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `canDowngrade`                                                                                    | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `canConvert`                                                                                      | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `type`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | plexpass                                                                                          |
| `transfer`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `state`                                                                                           | [operations.PostUsersSignInDataState](../../../sdk/models/operations/postuserssignindatastate.md) | :heavy_check_mark:                                                                                | N/A                                                                                               | ended                                                                                             |
| `billing`                                                                                         | [operations.Billing](../../../sdk/models/operations/billing.md)                                   | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |