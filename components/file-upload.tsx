import * as React from "react";
import { render } from "react-dom";

interface FileUploadState {
    files: any[]
}

export default class FileUpload extends React.Component {

    state: FileUploadState;

    constructor() {
        super();
        this.state = { files: [] };
    }

    //onDrop(files) {
    //    this.setState({ files: this.state.files.concat(files) });
    //}

    render() {
        return (
            <form action="/file-upload" class="dropzone">
                Drop your files here!
                <div class="fallback">
                    <input name="file" type="file" multiple />
                </div>
            </form>
        );
    }
}
