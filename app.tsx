import * as React from "react";
import { render } from "react-dom";
import UploadsContainer from "./components/uploads-container";

render(<UploadsContainer />, document.getElementById('root'))

//Dropzone.defaultProps = {
//    preventDropOnDocument: true,
//    disabled: false,
//    disablePreview: false,
//    disableClick: false,
//    multiple: true,
//    maxSize: Infinity,
//    minSize: 0
//}