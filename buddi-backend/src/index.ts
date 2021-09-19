import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

type ENVIRONMENT_TYPE = "PROD" | "DEV"

const SELECTED_ENVIRONMENT: ENVIRONMENT_TYPE = "DEV";

const ENVRIONMENT_PATH = {PROD: ".env", "DEV": ".devenv"}

dotenv.config();


