/** 
 * Describes the statuses in which an uploader component can exist at any given time.
 */
export enum FileUploadStatus {
    AwaitingInput,
    ReadyToUpload,
    Uploading,
    Finished
}

export class FileUploaderState {
}

/** 
 * Props object passed to each uploader component.
 */
export class FileUploaderProps {
    index: number;
    key: string;
    files: string[];
    custodian: string;
    progress: number;
    status: FileUploadStatus;

    constructor(index: number = 0) {
        this.index = index;
        this.files = [];
        this.key = FileUploaderProps.id(this);
    }

    static id(props: FileUploaderProps) {
        return `file-upload-${props.index + 1}`;
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

