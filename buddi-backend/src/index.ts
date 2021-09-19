import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

type ENVIRONMENT_TYPE = "PROD" | "DEV"
const SELECTED_ENVIRONMENT: ENVIRONMENT_TYPE = "DEV";
const ENVRIONMENT_PREFIX = {PROD: "PROD_", "DEV": "DEV_"}
export const getEnvironementVariable = (environmentVariableName: string): string | undefined => process.env[`${ENVRIONMENT_PREFIX[SELECTED_ENVIRONMENT]}${environmentVariableName}`]

dotenv.config();


console.log(getEnvironementVariable("SERVER_PORT"));