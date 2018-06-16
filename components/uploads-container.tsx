import * as React from "react";
import { render } from "react-dom";
import { FileUploader } from "./file-uploader";
import { FileUploadStatus, IFileUploaderProps, FileUploaderProps, IUploadsState, UploadsState } from "../classes";

/**
 * Top-level component responsible for rendering a list of uploaders and handling UI interactions.
 */
export default class UploadsContainer extends React.Component<{}, IUploadsState> {

    state: IUploadsState

    constructor() {
        super({});
        this.state = new UploadsState();
        this.onMoreClicked = this.onMoreClicked.bind(this);
    }

    onMoreClicked(e) {
        // Add a new uploader component to the list.
        e.preventDefault();
        this.setState(prevState => {
            prevState.uploads.push(new FileUploaderProps(prevState.uploads.length));
            return prevState;
        });
    }

    render() {
        return (
            <section id="uploads-container">
                <h1>Upload your files individually or in batches</h1>
                {
                    this.state.uploads.map((upload) => (
                        <FileUploader
                            key={upload.id}
                            id={upload.id}
                            files={upload.files}
                            custodian={upload.custodian}
                            progress={upload.progress}
                            status={upload.status}
                        />
                    ))
                }
                <button id="upload-more-button" onClick={this.onMoreClicked}>
                    Upload More Files
                </button>
            </section>
        );
    }
}