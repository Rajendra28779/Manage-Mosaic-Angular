import { environment } from "src/environments/environment";

let baseUrl = environment.baseUrl;
export const loginUrl = baseUrl + "/tlh/signupuser";
export const checkusername = baseUrl + "/tlh/checkusername";
export const signin = baseUrl + "/tlh/signin";
export const getbatchlist = baseUrl + "/tlh/getbatchlist";
export const gettechlist = baseUrl + "/tlh/gettechlist";
export const getemplist = baseUrl + "/tlh/getemplist";
export const saveemployee = baseUrl + "/tlh/saveemployee";
export const search = baseUrl + "/tlh/search";


export const hoslist = baseUrl + "/tlh/hoslist";
export const doclist = baseUrl + "/tlh/doclist";
export const getlist = baseUrl + "/tlh/getlist";
export const patlist = baseUrl + "/tlh/patlist";
export const savedata = baseUrl + "/tlh/savedata";


