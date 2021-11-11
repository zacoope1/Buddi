import { DEBUG_MODE_ENABLED } from '../Shared/Constants';

export const printDebug = (toPrint: any) =>
  DEBUG_MODE_ENABLED &&
  (typeof toPrint === typeof ''
    ? console.log(`%c[DEBUG]%c ${toPrint}`, 'font-weight: bold; color: red;', 'color: yellow')
    : console.log(toPrint));
