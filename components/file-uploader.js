"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Stateless component responsible for rendering a single Dropzone panel.
 * @param props
 */
exports.FileUploader = function (props) {
    return React.createElement("form", { action: "/file-upload", className: "dropzone", id: props.id },
        React.createElement("div", { className: "progress" }, "Drag and drop your files here or use the button below to select them."),
        React.createElement("div", { className: "fallback" },
            React.createElement("input", { name: "file", type: "file", multiple: true })));
};
//# sourceMappingURL=file-uploader.js.map