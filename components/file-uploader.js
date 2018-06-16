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
var types_1 = require("../types");
/**
 * Component responsible for rendering a single Dropzone panel.
 * @param props
 */
var FileUploader = /** @class */ (function (_super) {
    __extends(FileUploader, _super);
    function FileUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = new types_1.FileUploaderState();
        return _this;
    }
    //componentDidMount() {
    //    const { preventDropOnDocument } = this.props
    //    this.dragTargets = []
    //    if (preventDropOnDocument) {
    //        document.addEventListener('dragover', onDocumentDragOver, false)
    //        document.addEventListener('drop', this.onDocumentDrop, false)
    //    }
    //    this.fileInputEl.addEventListener('click', this.onInputElementClick, false)
    //    window.addEventListener('focus', this.onFileDialogCancel, false)
    //}
    FileUploader.prototype.render = function () {
        return (React.createElement("form", { action: "/file-upload", className: "dropzone", id: types_1.FileUploaderProps.id(this.props) },
            React.createElement("div", { className: "progress" }, "Drag and drop your files here or use the button below to select them."),
            React.createElement("div", { className: "fallback" },
                React.createElement("input", { name: "file", type: "file", multiple: true }))));
    };
    return FileUploader;
}(React.Component));
exports.default = FileUploader;
//# sourceMappingURL=file-uploader.js.map