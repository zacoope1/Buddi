import { DEBUG_MODE_ENABLED } from '../index';
import chalk from 'chalk';

export const printDebug = (toPrint: any) =>
  DEBUG_MODE_ENABLED && console.log(`${chalk.rgb(119, 181, 254).bold('[Debug]')} ${chalk.rgb(119, 181, 254)(toPrint)}`);

export const logError = (toPrint: string) =>
  console.log(`${chalk.bold.rgb(255, 40, 0)('[ERROR]')} ${chalk.rgb(255, 40, 0)(toPrint)}`);

export const log = (toPrint: any, underline: boolean = false) =>
  typeof toPrint === typeof ''
    ? console.log(`${chalk.bold.yellow('[Info]')} ${chalk.yellow(underline ? chalk.underline(toPrint) : toPrint)}`)
    : console.log(toPrint);

export const logHttp = (toPrint: string) =>
  console.log(`${chalk.bold.rgb(255, 117, 24)('[Http]')} ${chalk.rgb(255, 117, 24)(toPrint)}`);

export const logSocket = (toPrint: string) =>
  console.log(`${chalk.bold.rgb(245, 222, 179)('[Websocket]')} ${chalk.rgb(245, 222, 179)(toPrint)}`);
