import { ResponseModel } from "./responseModel";
import { Tailor } from "./tailor";

export interface TailorResponseModel extends ResponseModel{
    data:Tailor[],
}