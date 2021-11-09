type ENVIRONMENT_TYPE = 'PROD' | 'DEV';

/* NOTE: DETERMINE ENVIRONMENT TO RUN ON. VALID TYPE: "DEV" | "PROD" */
const SELECTED_ENVIRONMENT: ENVIRONMENT_TYPE = 'DEV';

const ENVRIONMENT_PREFIX = { PROD: 'PROD_', DEV: 'DEV_' };

export const getEnvironementVariable = (
  environmentVariableName: string,
  includeEnvironmentHeading = true,
): string | undefined =>
  process.env[`${includeEnvironmentHeading ? ENVRIONMENT_PREFIX[SELECTED_ENVIRONMENT] : ''}${environmentVariableName}`];

export const getEnvironment = () => process.env;
