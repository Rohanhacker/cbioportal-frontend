import CBioPortalAPI from "./CBioPortalAPI";
import AppConfig from 'appConfig';

const client = new CBioPortalAPI(`//${AppConfig.apiRoot}`);
export default client;
