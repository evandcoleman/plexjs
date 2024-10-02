/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Perform a voice search
 *
 * @remarks
 * This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint.
 * It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint.
 * Whenever possible, clients should limit the search to the appropriate type.
 * Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.
 */
export async function searchPerformVoiceSearch(
  client: PlexAPICore,
  query: string,
  sectionId?: number | undefined,
  limit?: number | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.PerformVoiceSearchResponse,
    | errors.PerformVoiceSearchBadRequest
    | errors.PerformVoiceSearchUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.PerformVoiceSearchRequest = {
    query: query,
    sectionId: sectionId,
    limit: limit,
  };

  const parsed = safeParse(
    input,
    (value) => operations.PerformVoiceSearchRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/hubs/search/voice")();

  const query$ = encodeFormQuery({
    "limit": payload.limit,
    "query": payload.query,
    "sectionId": payload.sectionId,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const context = {
    operationID: "performVoiceSearch",
    oAuth2Scopes: [],
    securitySource: client._options.accessToken,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query$,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      },
    retryCodes: options?.retryCodes || ["5XX"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.PerformVoiceSearchResponse,
    | errors.PerformVoiceSearchBadRequest
    | errors.PerformVoiceSearchUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, operations.PerformVoiceSearchResponse$inboundSchema),
    M.jsonErr(400, errors.PerformVoiceSearchBadRequest$inboundSchema),
    M.jsonErr(401, errors.PerformVoiceSearchUnauthorized$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
