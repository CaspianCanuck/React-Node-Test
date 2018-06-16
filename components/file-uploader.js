"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.FileUploader = function (props) {
    return React.createElement("form", { action: "/file-upload", className: "dropzone", key: props.id },
        React.createElement("div", { className: "progress" }, "Drag and drop your files here or use the button below to select them."),
        React.createElement("div", { className: "fallback" },
            React.createElement("input", { name: "file", type: "file", multiple: true })));
};
//# sourceMappingURL=file-uploader.js.map