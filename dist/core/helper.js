"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePathClean = exports.generateFileName = void 0;
const generateFileName = (str) => {
    let slug = str.toLowerCase();
    slug = slug.replace(/\s+/g, '-');
    const timeCode = Date.now();
    return `${timeCode}-${slug}`;
};
exports.generateFileName = generateFileName;
const filePathClean = (str) => {
    const normalizedPath = str.replace(/\\/g, '/');
    const updatedPath = normalizedPath.replace('public/', '');
    return updatedPath;
};
exports.filePathClean = filePathClean;
//# sourceMappingURL=helper.js.map