import * as React from "react";
import { render } from "react-dom";
import FileUpload from "./components/file-upload";

//class Hello extends React.Component {
//    render() {
//        return (
//            <h1>Welcome to React!!</h1>
//        );
//    }
//}

render(<FileUpload />, document.getElementById('root'))

//Dropzone.defaultProps = {
//    preventDropOnDocument: true,
//    disabled: false,
//    disablePreview: false,
//    disableClick: false,
//    multiple: true,
//    maxSize: Infinity,
//    minSize: 0
//}