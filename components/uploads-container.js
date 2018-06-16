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
var file_uploader_1 = require("./file-uploader");
var classes_1 = require("../classes");
var UploadsContainer = /** @class */ (function (_super) {
    __extends(UploadsContainer, _super);
    function UploadsContainer() {
        var _this = _super.call(this, {}) || this;
        _this.state = new classes_1.UploadsState();
        _this.state.uploads.push(new classes_1.FileUploaderProps());
        return _this;
    }
    UploadsContainer.prototype.render = function () {
        return (React.createElement("section", { id: "uploads-container" },
            React.createElement("h1", null, "Upload your files individually or in batches"),
            this.state.uploads.map(function (upload) { return (React.createElement(file_uploader_1.FileUploader, { key: upload.id, id: upload.id, files: upload.files, custodian: upload.custodian, progress: upload.progress, status: upload.status })); })));
    };
    return UploadsContainer;
}(React.Component));
exports.default = UploadsContainer;
//# sourceMappingURL=uploads-container.js.map