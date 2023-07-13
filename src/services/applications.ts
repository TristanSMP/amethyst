import { TsmpApi } from "../api/generated";
import { ApplicationsService } from "../api/generated/api/resources/applications/service/ApplicationsService";

export default new ApplicationsService({
  manageApplication() {
    throw new TsmpApi.InternalError();
  },
});
