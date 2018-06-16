"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes the statuses in which an uploader component can exist at any given time.
 */
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["AwaitingInput"] = 0] = "AwaitingInput";
    FileUploadStatus[FileUploadStatus["ReadyToUpload"] = 1] = "ReadyToUpload";
    FileUploadStatus[FileUploadStatus["Uploading"] = 2] = "Uploading";
    FileUploadStatus[FileUploadStatus["Finished"] = 3] = "Finished";
})(FileUploadStatus = exports.FileUploadStatus || (exports.FileUploadStatus = {}));
///** 
// * Describes the signature of props passed to each uploader component.
// */
//export interface IFileUploaderProps {
//    key: string;
//    files: string[];
//    custodian: string;
//    progress: number;
//    status: FileUploadStatus;
//}
/**
 * Props object passed to each uploader component.
 */
var FileUploaderProps = /** @class */ (function () {
    function FileUploaderProps(index) {
        if (index === void 0) { index = 0; }
        this.key = "file-upload-" + index;
        this.files = [];
    }
    return FileUploaderProps;
}());
exports.FileUploaderProps = FileUploaderProps;
///** 
// * Describes the signature of the UI state maintained by the top-level component.
// */
//export interface IUploadsState {
//    uploads: IFileUploaderProps[];
//}
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