import * as React from "react";
import { render } from "react-dom";
import { FileUploadStatus, IFileUploaderProps } from "../classes";

/**
 * Stateless component responsible for rendering a single Dropzone panel.
 * @param props
 */
export const FileUploader: React.StatelessComponent<IFileUploaderProps> = (props) =>
    <form action="/file-upload" className="dropzone" id={props.id}>
        <div className="progress">
            Drag and drop your files here or use the button below to select them.
        </div>
        <div className="fallback">
            <input name="file" type="file" multiple />
        </div>
    </form>
