/** 
 * Describes the statuses in which an uploader component can exist at any given time.
 */
export enum FileUploadStatus {
    AwaitingInput,
    ReadyToUpload,
    Uploading,
    Finished
}

/** 
 * Describes the signature of props passed to each uploader component.
 */
export interface IFileUploaderProps {
    id: string;
    files: string[];
    custodian: string;
    progress: number;
    status: FileUploadStatus;
}

/** 
 * Props object passed to each uploader component.
 */
export class FileUploaderProps implements IFileUploaderProps {
    id: string;
    files: string[];
    custodian: string;
    progress: number;
    status: FileUploadStatus;

    constructor(index: number = 0) {
        this.id = `file-upload-${index}`;
        this.files = [];
    }
}

/** 
 * Describes the signature of the UI state maintained by the top-level component.
 */
export interface IUploadsState {
    uploads: IFileUploaderProps[];
}

/**
 * UI state object maintained by the top-level component.
 */
export class UploadsState implements IUploadsState {
    uploads: IFileUploaderProps[];

    constructor() {
        this.uploads = [new FileUploaderProps()];   // start off with a single uploader
    }
}

