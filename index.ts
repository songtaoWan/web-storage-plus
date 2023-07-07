import {
  setGlobalPrefix,
  setGlobalStringifyFn,
  setGlobalParseFn,
  setStorage,
  getStorage,
  removeStorage
} from './src/storage';
import type { IConfig, IGetStorageConfig } from './src/storage';
import { stringify, parse, encode, decode } from './src/util';

export {
  setGlobalPrefix,
  setGlobalStringifyFn,
  setGlobalParseFn,
  setStorage,
  getStorage,
  removeStorage,
  stringify,
  parse,
  encode,
  decode
};

export type { IConfig, IGetStorageConfig };
