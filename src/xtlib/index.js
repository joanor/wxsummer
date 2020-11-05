const CryptoJS = require('./crypto/index');
const dayjs = require('./dayjs/index');
const Event = require('./event/index');
const Map = require('./map/index');
const Storage = require('./storage/index');
const utils = require('../utils/index');
const lib = Object.assign({ Event, Map, CryptoJS, dayjs, Storage }, utils);
module.exports = lib