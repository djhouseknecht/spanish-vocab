import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const basePath = resolve(__dirname);

const latino = readFileSync(basePath + '/Coco-Latino.srt');
const processedPath = basePath + '/Coco-Latino.txt';

const processedLatino = latino.toString().replace(/(\d{1,4}\n(00|01):(\d|:|,|\s|-|>)+\n|<(\/)?i>)/mgi, '');

writeFileSync(processedPath, processedLatino);
