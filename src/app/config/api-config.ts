import { environment } from "src/environments/environment";

let baseUrl = environment.baseUrl;
export const loginUrl = baseUrl + "/login/loginapi";

export const checkusername = baseUrl + "/api/checkusername";
export const signinuser = baseUrl + "/api/createUser";

export const addhomedetails = baseUrl + "/api/addhomedetails";
export const gethomedetails = baseUrl + "/api/gethomedetails";
export const getroomdetails = baseUrl + "/api/getroomdetails";
export const inactiveroomdetails = baseUrl + "/api/inactiveroomdetails";
export const submitdetails = baseUrl + "/api/submitdetails";


