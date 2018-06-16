"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes the statuses in which an uploader component can exist at any given time.
 */
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["AwaitingFiles"] = 0] = "AwaitingFiles";
    FileUploadStatus[FileUploadStatus["AwaitingInput"] = 1] = "AwaitingInput";
    FileUploadStatus[FileUploadStatus["ReadyToUpload"] = 2] = "ReadyToUpload";
    FileUploadStatus[FileUploadStatus["Uploading"] = 3] = "Uploading";
})(FileUploadStatus = exports.FileUploadStatus || (exports.FileUploadStatus = {}));
/**
 * Internal state of individual uploader components.
 */
var FileUploaderState = /** @class */ (function () {
    function FileUploaderState() {
        this.status = FileUploadStatus.AwaitingFiles;
        this.custodian = "";
    }
    return FileUploaderState;
}());
exports.FileUploaderState = FileUploaderState;
/**
 * Props object passed to each uploader component.
 */
var FileUploaderProps = /** @class */ (function () {
    function FileUploaderProps(index) {
        if (index === void 0) { index = 0; }
        this.id = "file-upload-" + (index + 1);
    }
    return FileUploaderProps;
}());
exports.FileUploaderProps = FileUploaderProps;
/**
 * UI state object maintained by the top-level component.
 */
var UploadsState = /** @class */ (function () {
    function UploadsState() {
        this.uploads = [new FileUploaderProps()]; // start off with a single uploader
    }
    return UploadsState;
}());
exports.UploadsState = UploadsState;
//# sourceMappingURL=types.js.map