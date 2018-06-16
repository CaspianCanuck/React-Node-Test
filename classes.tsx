export enum FileUploadStatus {
    AwaitingInput,
    ReadyToUpload,
    Uploading,
    Finished
}

export interface IFileUploaderProps {
    id: string;
    files: string[];
    custodian: string;
    progress: number;
    status: FileUploadStatus;
}

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

export interface IUploadsState {
    uploads: IFileUploaderProps[];
}

export class UploadsState implements IUploadsState {
    uploads: IFileUploaderProps[];

    constructor() {
        this.uploads = [];
    }
}

