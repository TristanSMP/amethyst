/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors";
import express from "express";
export declare class InternalError extends errors.TsmpApiError {
    constructor();
    send(res: express.Response): Promise<void>;
}
