/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { TsmpApi } from "../../../..";
export interface ManageApplicationRequest {
    player: TsmpApi.PlayerId;
    action: TsmpApi.ApplicationStatus;
}