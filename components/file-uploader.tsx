import * as React from "react";
import { render } from "react-dom";
import * as Dropzone from "dropzone";
import { DropzoneComponent, DropzoneComponentConfig, DropzoneComponentHandlers } from "react-dropzone-component";
import { FileUploadStatus, FileUploaderProps, FileUploaderState } from "../types";
import { debug } from "util";
import { setTimeout } from "timers";

/**
 * Component responsible for rendering a single Dropzone panel.
 * @param props
 */
export default class FileUploader extends React.Component<FileUploaderProps, FileUploaderState> {

    dropzone: Dropzone = null; // instance of the Dropzone JS object

    constructor(props: FileUploaderProps) {
        super(props);
        this.state = new FileUploaderState();

        // Bind all event handlers to the component's instance.
        this.onInit = this.onInit.bind(this);
        this.onUploadButtonClicked = this.onUploadButtonClicked.bind(this);
        this.onCustodianNameEntered = this.onCustodianNameEntered.bind(this);
        this.onUploadError = this.onUploadError.bind(this);
        this.onUploadSuccess = this.onUploadSuccess.bind(this);
        this.onFileAdded = this.onFileAdded.bind(this);
        this.onFileRemoved = this.onFileRemoved.bind(this);
    }

    //#region Helper methods
    
    hasFilesInQueue() {
        return this.dropzone.getQueuedFiles().length > 0;
    }
    hasFilesInTransit() {
        return this.dropzone.getUploadingFiles().length > 0;
    }
    hasCustodianName() {
        return this.state.custodian.trim().length > 0;
    }
    updateStatus(newStatus?: FileUploadStatus) {
        if (!newStatus) {
            // Intelligently set the status based on the circumstances.
            if (this.hasFilesInQueue() && this.hasCustodianName())
                newStatus = FileUploadStatus.ReadyToUpload;
            else if (this.hasFilesInQueue())
                newStatus = FileUploadStatus.AwaitingInput;
            else
                newStatus = FileUploadStatus.AwaitingFiles;
        }
        this.setState(oldState => ({ status: newStatus }));
    }
    showControls() {
        return this.dropzone !== null && this.state.status !== FileUploadStatus.AwaitingFiles;
    }
    //#endregion

    //#region Event handlers

    onInit(dz: Dropzone) {
        this.dropzone = dz; // save a reference to the Dropzone JS component so we can call its methods later
    }

    onFileAdded() {
        setTimeout(() => this.updateStatus(), 500);
    }
    onFileRemoved() {
        this.updateStatus();
    }

    onCustodianNameEntered(e) {
        if (e.target.value) {
            this.setState({ custodian: e.target.value });
            this.updateStatus();
        }
    }

    onUploadButtonClicked(e) {
        // Make sure to initiate uploads only when we're ready.
        switch (this.state.status) {
            case FileUploadStatus.ReadyToUpload:
                this.updateStatus(FileUploadStatus.Uploading);
                this.dropzone.processQueue();
                break;
            case FileUploadStatus.AwaitingInput:
                alert("Please enter the Custodian's name.");
                break;
            case FileUploadStatus.Uploading:
                alert("Please wait for the uploads to finish before uploading more files.");
                break;
            default:
                // Sanity check (we should never land here unless there's a bug).
                alert("Please add some files to upload.");
                break;
        }
    }

    onUploadError() {
        this.updateStatus();
        alert("One or more files failed to upload, please try again.");
    }
    onUploadSuccess() {
        // Kick off the next upload after the previous one succeeds and at the end
        // reset the status once all files have been uploaded.
        if (this.hasFilesInQueue())
            this.dropzone.processQueue();
        else if (!this.hasFilesInTransit()) {
            this.updateStatus(FileUploadStatus.AwaitingFiles);
        }
    }
    //#endregion

    render() {
        const componentConfig: DropzoneComponentConfig = {
            postUrl: '/upload',
            showFiletypeIcon: true
        };
        const jsConfig: Dropzone.DropzoneOptions = {
            dictDefaultMessage: "Drag and drop files here or click anywhere inside this area to select files from your hard drive",
            addRemoveLinks: true,
            autoProcessQueue: false,
            chunking: true,
            chunkSize: 2048, // files will be sent in 2Kb chunks
            parallelChunkUploads: false
        };
        const eventHandlers: DropzoneComponentHandlers = {
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
            controls = (
                <div className="controls">
                    <label>
                        Custodian:
                        <input type="text" name="custodianName"
                            value={this.state.custodian}
                            onChange={this.onCustodianNameEntered}
                        />
                    </label>
                    <button onClick={this.onUploadButtonClicked}>Begin Upload</button>
                </div>
            );
        }
        return (
            <div className="file-upload-panel">
                <DropzoneComponent
                    config={componentConfig}
                    djsConfig={jsConfig}
                    eventHandlers={eventHandlers}
                />
                {controls}
            </div>
        );
    }
}