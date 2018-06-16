/** 
 * Describes the statuses in which an uploader component can exist at any given time.
 */
export enum FileUploadStatus {
    AwaitingInput,
    ReadyToUpload,
    Uploading
}

/**
 * Internal state of individual uploader components.
 */
export class FileUploaderState {
    custodian: string;
    status: FileUploadStatus;

    constructor() {
        this.status = FileUploadStatus.AwaitingInput;
        this.custodian = "";
    }
}

/** 
 * Props object passed to each uploader component.
 */
export class FileUploaderProps {
    id: string;

    constructor(index: number = 0) {
        this.id = `file-upload-${index + 1}`;
    }
}

/**
 * UI state object maintained by the top-level component.
 */
export class UploadsState { 
    uploads: FileUploaderProps[];

    constructor() {
        this.uploads = [new FileUploaderProps()];   // start off with a single uploader
    }
}

