import { printDebug } from '../Utilities/PrintDebug';
const resolveBoolean = (str: string | undefined): boolean => (str && str === 'true' ? true : false);

export const DEBUG_MODE_ENABLED = resolveBoolean(process.env.REACT_APP_DEBUG_MODE_ENABLED);
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const checkConstants = (): boolean => {
  const CONSTANTS = [BACKEND_URL]; //NOTE: Please add all required constants here so we can check before app load.

  const undefineds = CONSTANTS.filter(ele => ele === undefined);
  if (undefineds.length > 0) {
    printDebug('Could not locate all constants from environment.');
    return false;
  } else {
    printDebug('Constants loaded from environment.');
    return true;
  }
};
