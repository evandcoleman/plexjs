"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * IdentityNow V3 API
 * Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosRetry = exports.Configuration = exports.ConfigurationBeta = void 0;
__exportStar(require("./sdk-output/api"), exports);
var configuration_1 = require("./sdk-output/configuration");
Object.defineProperty(exports, "ConfigurationBeta", { enumerable: true, get: function () { return configuration_1.Configuration; } });
var configuration_2 = require("./configuration");
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return configuration_2.Configuration; } });
__exportStar(require("./paginator"), exports);
exports.axiosRetry = require("axios-retry");
//# sourceMappingURL=index.js.map