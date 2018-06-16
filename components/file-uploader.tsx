import * as React from "react";
import { render } from "react-dom";
import { FileUploadStatus, FileUploaderProps, FileUploaderState } from "../types";

/**
 * Component responsible for rendering a single Dropzone panel.
 * @param props
 */
export default class FileUploader extends React.Component<FileUploaderProps, FileUploaderState> {
    constructor(props: FileUploaderProps) {
        super(props);
        this.state = new FileUploaderState();
    }

    //componentDidMount() {
    //    const { preventDropOnDocument } = this.props
    //    this.dragTargets = []

    //    if (preventDropOnDocument) {
    //        document.addEventListener('dragover', onDocumentDragOver, false)
    //        document.addEventListener('drop', this.onDocumentDrop, false)
    //    }
    //    this.fileInputEl.addEventListener('click', this.onInputElementClick, false)
    //    window.addEventListener('focus', this.onFileDialogCancel, false)
    //}

    render() {
        return (
            <form action="/file-upload" className="dropzone" id={FileUploaderProps.id(this.props)}>
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