import * as React from "react";
import { render } from "react-dom";
import FileUploader from "./file-uploader";
import { FileUploadStatus, FileUploaderProps, UploadsState } from "../types";

/**
 * Top-level component responsible for rendering a list of uploaders and handling UI interactions.
 */
export default class UploadsContainer extends React.Component<{}, UploadsState> {

    state: UploadsState

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
                        <FileUploader id={upload.id} key={upload.id} />
                    ))
                }
                <button id="upload-more-button" onClick={this.onMoreClicked}>
                    Upload More Files
                </button>
            </section>
        );
    }
}