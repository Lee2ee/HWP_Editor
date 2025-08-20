"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cn", {
    enumerable: true,
    get: function() {
        return cn;
    }
});
const _clsx = require("clsx");
const _tailwindmerge = require("tailwind-merge");
function cn(...inputs) {
    return (0, _tailwindmerge.twMerge)((0, _clsx.clsx)(inputs));
}

