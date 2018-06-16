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
        // Bind all event handlers to the component's instance.
        _this.onInit = _this.onInit.bind(_this);
        _this.onUploadButtonClicked = _this.onUploadButtonClicked.bind(_this);
        _this.onCustodianNameEntered = _this.onCustodianNameEntered.bind(_this);
        _this.onUploadError = _this.onUploadError.bind(_this);
        _this.onUploadSuccess = _this.onUploadSuccess.bind(_this);
        _this.onFileAdded = _this.onFileAdded.bind(_this);
        _this.onFilesAdded = _this.onFilesAdded.bind(_this);
        return _this;
    }
    //#region Helper methods
    FileUploader.prototype.hasFilesInQueue = function () {
        return this.dropzone.getQueuedFiles().length > 0;
    };
    FileUploader.prototype.hasFilesInTransit = function () {
        return this.dropzone.getUploadingFiles().length > 0;
    };
    FileUploader.prototype.hasCustodianName = function () {
        return this.state.custodian.trim().length > 0;
    };
    FileUploader.prototype.updateStatus = function (newStatus) {
        if (!newStatus)
            newStatus = this.hasFilesInQueue() && this.hasCustodianName() ? types_1.FileUploadStatus.ReadyToUpload : types_1.FileUploadStatus.AwaitingInput;
        this.setState(function (oldState) { return ({ status: newStatus }); });
    };
    //#endregion
    //#region Event handlers
    FileUploader.prototype.onInit = function (dz) {
        this.dropzone = dz; // save a reference to the Dropzone JS component so we can call its methods
    };
    FileUploader.prototype.onFileAdded = function () {
        this.updateStatus();
    };
    FileUploader.prototype.onFilesAdded = function () {
        this.updateStatus();
    };
    FileUploader.prototype.onCustodianNameEntered = function (e) {
        if (e.target.value) {
            this.setState({ custodian: e.target.value });
            this.updateStatus();
        }
    };
    FileUploader.prototype.onUploadButtonClicked = function (e) {
        // Make sure to initiate uploads only when we're ready.
        switch (this.state.status) {
            case types_1.FileUploadStatus.ReadyToUpload:
                this.updateStatus(types_1.FileUploadStatus.Uploading);
                this.dropzone.processQueue();
                break;
            case types_1.FileUploadStatus.AwaitingInput:
                var hasCustodianName = this.hasCustodianName();
                var hasPendingFiles = this.hasFilesInQueue();
                if (!hasCustodianName && !hasPendingFiles)
                    alert("Please add some files and enter the Custodian's name.");
                else if (!hasPendingFiles)
                    alert("Please add some files to upload.");
                else
                    alert("Please enter the Custodian's name.");
                break;
            case types_1.FileUploadStatus.Uploading:
                alert("Please wait for the uploads to finish before uploading more files.");
                break;
        }
    };
    FileUploader.prototype.onUploadError = function () {
        this.updateStatus();
        alert("One or more files failed to upload, please try again.");
    };
    FileUploader.prototype.onUploadSuccess = function () {
        if (this.hasFilesInQueue())
            this.dropzone.processQueue();
        else if (!this.hasFilesInTransit()) {
            this.updateStatus(types_1.FileUploadStatus.AwaitingInput);
            alert("File(s) successfully uploaded.");
        }
    };
    //#endregion
    FileUploader.prototype.render = function () {
        var componentConfig = {
            postUrl: '/upload',
            showFiletypeIcon: true
        };
        var jsConfig = {
            dictDefaultMessage: "Drag and drop files here or click anywhere inside this area to select files from your hard drive",
            addRemoveLinks: true,
            autoProcessQueue: false,
            chunking: true,
            chunkSize: 2048,
            parallelChunkUploads: false
        };
        var eventHandlers = {
            init: this.onInit,
            addedfile: this.onFileAdded,
            addedfiles: this.onFilesAdded,
            error: this.onUploadError,
            success: this.onUploadSuccess,
        };
        return (React.createElement("div", { className: "file-upload-panel" },
            React.createElement(react_dropzone_component_1.DropzoneComponent, { config: componentConfig, djsConfig: jsConfig, eventHandlers: eventHandlers }),
            React.createElement("div", { className: "controls" },
                React.createElement("label", null,
                    "Custodian:",
                    React.createElement("input", { type: "text", name: "custodianName", value: this.state.custodian, onChange: this.onCustodianNameEntered })),
                React.createElement("button", { onClick: this.onUploadButtonClicked }, "Begin Upload"))));
    };
    return FileUploader;
}(React.Component));
exports.default = FileUploader;
//# sourceMappingURL=file-uploader.js.map