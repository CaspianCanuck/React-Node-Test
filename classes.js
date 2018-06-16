"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["AwaitingInput"] = 0] = "AwaitingInput";
    FileUploadStatus[FileUploadStatus["ReadyToUpload"] = 1] = "ReadyToUpload";
    FileUploadStatus[FileUploadStatus["Uploading"] = 2] = "Uploading";
    FileUploadStatus[FileUploadStatus["Finished"] = 3] = "Finished";
})(FileUploadStatus = exports.FileUploadStatus || (exports.FileUploadStatus = {}));
var FileUploaderProps = /** @class */ (function () {
    function FileUploaderProps(index) {
        if (index === void 0) { index = 0; }
        this.id = "file-upload-" + index;
        this.files = [];
    }
    return FileUploaderProps;
}());
exports.FileUploaderProps = FileUploaderProps;
var UploadsState = /** @class */ (function () {
    function UploadsState() {
        this.uploads = [];
    }
    return UploadsState;
}());
exports.UploadsState = UploadsState;
//# sourceMappingURL=classes.js.map