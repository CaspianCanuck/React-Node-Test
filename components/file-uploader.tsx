import * as React from "react";
import { render } from "react-dom";
import { FileUploadStatus, FileUploaderProps } from "../types";

/**
 * Component responsible for rendering a single Dropzone panel.
 * @param props
 */
export default class FileUploader extends React.Component<FileUploaderProps> {
    constructor(props: FileUploaderProps) {
        super(props);
    }

    render() {
        return (
            <form action="/file-upload" className="dropzone">
                <div className="progress">
                    Drag and drop your files here or use the button below to select them.
                </div>
                <div className="fallback">
                    <input name="file" type="file" multiple />
                </div>
            </form>
        );
    }
}