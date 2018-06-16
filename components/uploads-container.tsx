import * as React from "react";
import { render } from "react-dom";
import { FileUploader } from "./file-uploader";
import { FileUploadStatus, IFileUploaderProps, FileUploaderProps, IUploadsState, UploadsState } from "../classes";

export default class UploadsContainer extends React.Component {

    state: IUploadsState

    constructor() {
        super({});
        this.state = new UploadsState();
        this.state.uploads.push(new FileUploaderProps());
    }

    render() {
        return (
            <section id="uploads-container">
                <h1>Upload your files individually or in batches</h1>
                {
                    this.state.uploads.map((upload) => (
                        <FileUploader
                            id={upload.id}
                            index={upload.index}
                            files={upload.files}
                            custodian={upload.custodian}
                            progress={upload.progress}
                            status={upload.status}
                        />
                    ))
                }
            </section>
        );
    }
}