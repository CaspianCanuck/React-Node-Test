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
var timers_1 = require("timers");
/**
 * Component responsible for rendering a single Dropzone panel.
 * @param props
 */
var FileUploader = /** @class */ (function (_super) {
    __extends(FileUploader, _super);
    function FileUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.dropzone = null; // instance of the Dropzone JS object
        _this.state = new types_1.FileUploaderState();
        // Bind all event handlers to the component's instance.
        _this.onInit = _this.onInit.bind(_this);
        _this.onUploadButtonClicked = _this.onUploadButtonClicked.bind(_this);
        _this.onCustodianNameEntered = _this.onCustodianNameEntered.bind(_this);
        _this.onUploadError = _this.onUploadError.bind(_this);
        _this.onUploadSuccess = _this.onUploadSuccess.bind(_this);
        _this.onFileAdded = _this.onFileAdded.bind(_this);
        _this.onFileRemoved = _this.onFileRemoved.bind(_this);
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
        if (!newStatus) {
            // Intelligently set the status based on the circumstances.
            if (this.hasFilesInQueue() && this.hasCustodianName())
                newStatus = types_1.FileUploadStatus.ReadyToUpload;
            else if (this.hasFilesInQueue())
                newStatus = types_1.FileUploadStatus.AwaitingInput;
            else
                newStatus = types_1.FileUploadStatus.AwaitingFiles;
        }
        this.setState(function (oldState) { return ({ status: newStatus }); });
    };
    FileUploader.prototype.showControls = function () {
        return this.dropzone !== null && this.state.status !== types_1.FileUploadStatus.AwaitingFiles;
    };
    //#endregion
    //#region Event handlers
    FileUploader.prototype.onInit = function (dz) {
        this.dropzone = dz; // save a reference to the Dropzone JS component so we can call its methods later
    };
    FileUploader.prototype.onFileAdded = function () {
        var _this = this;
        timers_1.setTimeout(function () { return _this.updateStatus(); }, 500);
    };
    FileUploader.prototype.onFileRemoved = function () {
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
                alert("Please enter the Custodian's name.");
                break;
            case types_1.FileUploadStatus.Uploading:
                alert("Please wait for the uploads to finish before uploading more files.");
                break;
            default:
                // Sanity check (we should never land here unless there's a bug).
                alert("Please add some files to upload.");
                break;
        }
    };
    FileUploader.prototype.onUploadError = function () {
        this.updateStatus();
        alert("One or more files failed to upload, please try again.");
    };
    FileUploader.prototype.onUploadSuccess = function () {
        // Kick off the next upload after the previous one succeeds and at the end
        // reset the status once all files have been uploaded.
        if (this.hasFilesInQueue())
            this.dropzone.processQueue();
        else if (!this.hasFilesInTransit()) {
            this.updateStatus(types_1.FileUploadStatus.AwaitingFiles);
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
            addedfiles: this.onFileAdded,
            removedfile: this.onFileRemoved,
            error: this.onUploadError,
            success: this.onUploadSuccess,
        };
        // Conditionally render the controls when files have been added.
        var controls = null;
        if (this.showControls()) {
            controls = (React.createElement("div", { className: "controls" },
                React.createElement("label", null,
                    "Custodian:",
                    React.createElement("input", { type: "text", name: "custodianName", value: this.state.custodian, onChange: this.onCustodianNameEntered })),
                React.createElement("button", { onClick: this.onUploadButtonClicked }, "Begin Upload")));
        }
        return (React.createElement("div", { className: "file-upload-panel" },
            React.createElement(react_dropzone_component_1.DropzoneComponent, { config: componentConfig, djsConfig: jsConfig, eventHandlers: eventHandlers }),
            controls));
    };
    return FileUploader;
}(React.Component));
exports.default = FileUploader;
//# sourceMappingURL=file-uploader.js.map