type ENVIRONMENT_TYPE = 'PROD' | 'DEV';

/* NOTE: DETERMINE ENVIRONMENT TO RUN ON. VALID TYPE: "DEV" | "PROD" */
const SELECTED_ENVIRONMENT: ENVIRONMENT_TYPE = 'DEV';

const ENVRIONMENT_PREFIX = { PROD: 'PROD_', DEV: 'DEV_' };

export const getEnvironementVariable = (environmentVariableName: string): string | undefined =>
  process.env[`${ENVRIONMENT_PREFIX[SELECTED_ENVIRONMENT]}${environmentVariableName}`];
