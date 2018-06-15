"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        var _this = _super.call(this) || this;
        _this.state = { files: [] };
        return _this;
    }
    //onDrop(files) {
    //    this.setState({ files: this.state.files.concat(files) });
    //}
    FileUpload.prototype.render = function () {
        return (React.createElement("form", { action: "/file-upload", class: "dropzone" },
            "Drop your files here!",
            React.createElement("div", { class: "fallback" },
                React.createElement("input", { name: "file", type: "file", multiple: true }))));
    };
    return FileUpload;
}(React.Component));
exports.default = FileUpload;
//# sourceMappingURL=file-upload.js.map