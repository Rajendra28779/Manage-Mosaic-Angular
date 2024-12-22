import { environment } from "src/environments/environment";

let baseUrl = environment.baseUrl;
export const loginUrl = baseUrl + "/login/loginapi";

export const checkusername = baseUrl + "/api/checkusername";
export const signinuser = baseUrl + "/api/createUser";
export const loginthroughgoogle = baseUrl + "/login/google";
export const contactrqst = baseUrl + "/api/contactrqst";


export const addnewhome = baseUrl + "/api/addnewhome";
export const getallhousedetialsforuserspecific = baseUrl + "/api/gethomedetails";
export const getdisplayhousedetails = baseUrl + "/api/getdisplayhousedetails";
export const addroomforhome = baseUrl + "/api/addroomforhome";
export const gethousemasterData = baseUrl + "/api/gethousemasterData";
export const savehousemaintancerqst = baseUrl + "/api/savehousemaintancerqst";
export const getroommasterData = baseUrl + "/api/getroommasterData";
export const addtenanttoroom = baseUrl + "/api/addtenanttoroom";
export const viewtenanttoroom = baseUrl + "/api/viewtenanttoroom";
export const gethousedetailsforuser = baseUrl + "/api/gethousedetailsforuser";
export const onChangeroomgettenanrdata = baseUrl + "/api/onChangeroomgettenanrdata";
export const getmaintanceTrackingRecord = baseUrl + "/api/getmaintanceTrackingRecord";
export const getrequestdetailsForowner = baseUrl + "/api/getrequestdetailsForowner";
export const takeactionagainestrequest = baseUrl + "/api/takeactionagainestrequest";
export const downloadcommondoc = baseUrl + "/api/downloadcommondoc";
export const checkpendingbalanace = baseUrl + "/api/checkpendingbalanace";






