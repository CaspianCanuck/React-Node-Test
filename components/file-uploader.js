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
var react_dropzone_component_1 = require("react-dropzone-component");
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
    FileUploader.prototype.onFileAdded = function (file) {
        this.props.files.push(file);
    };
    FileUploader.prototype.onFilesAdded = function (files) {
        //this.props.files = this.props.files.concat(files);
    };
    FileUploader.prototype.render = function () {
        var componentConfig = {
            postUrl: 'no-url',
            showFiletypeIcon: true
        };
        var jsConfig = {
            addRemoveLinks: false,
            autoProcessQueue: false,
            dictDefaultMessage: "Drag and drop files here or click anywhere inside this area to select files from your hard drive"
        };
        var eventHandlers = {
            addedfile: this.onFileAdded.bind(this)
        };
        return (React.createElement("div", { className: "file-upload-panel" },
            React.createElement(react_dropzone_component_1.DropzoneComponent, { config: componentConfig, djsConfig: jsConfig, eventHandlers: eventHandlers }),
            React.createElement("label", null,
                "Custodian: ",
                React.createElement("input", { type: "text", name: "custodian", value: this.props.custodian })),
            React.createElement("button", null, "Begin Upload")));
    };
    return FileUploader;
}(React.Component));
exports.default = FileUploader;
//# sourceMappingURL=file-uploader.js.map