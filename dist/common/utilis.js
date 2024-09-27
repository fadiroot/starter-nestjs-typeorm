"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHash = exports.generateHash = void 0;
const bcrypt = require("bcrypt");
function generateHash(password) {
    return bcrypt.hashSync(password, 10);
}
exports.generateHash = generateHash;
function validateHash(password, hash) {
    if (!password || !hash) {
        return Promise.resolve(false);
    }
    return bcrypt.compare(password, hash);
}
exports.validateHash = validateHash;
//# sourceMappingURL=utilis.js.map