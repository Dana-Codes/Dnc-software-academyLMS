import { NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

module.exports = (err:any, req:Request, res:Response, next:NextFunction) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'internal server error ';


	//error mongoDB id

}