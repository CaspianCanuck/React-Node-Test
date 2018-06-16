import * as React from "react";
import { render } from "react-dom";
import * as Dropzone from "dropzone";
import { DropzoneComponent, DropzoneComponentConfig, DropzoneComponentHandlers } from "react-dropzone-component";
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

    onFileAdded(file) {
        this.props.files.push(file);
    }
    onFilesAdded(files) {
        //this.props.files = this.props.files.concat(files);
    }

    render() {
        const componentConfig: DropzoneComponentConfig = {
            postUrl: 'no-url',
            showFiletypeIcon: true
        };
        const jsConfig: Dropzone.DropzoneOptions = {
            addRemoveLinks: false,
            autoProcessQueue: false,
            dictDefaultMessage: "Drag and drop files here or click anywhere inside this area to select files from your hard drive"
        };
        const eventHandlers: DropzoneComponentHandlers = {
            addedfile: this.onFileAdded.bind(this)
        };
        return (
            <div className="file-upload-panel">
                <DropzoneComponent
                    config={componentConfig}
                    djsConfig={jsConfig}
                    eventHandlers={eventHandlers}
                />
                <label>Custodian: <input type="text" name="custodian" value={this.props.custodian} /></label>
                <button>Begin Upload</button>
            </div>
        );
    }
}