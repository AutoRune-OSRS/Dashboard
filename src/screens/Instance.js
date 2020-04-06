import React from 'react';

import "stylesheets/global.css";
import {connect} from "react-redux";
import {withSize} from "react-sizeme";
import ComponentsInstanceControls from "components/Instance/Manager";

function ScreenInstance(props) {

    const { width } = props.size;

    let screenClass;
    if (props.isOpen)
        screenClass = "screen screen-nav-open";
    else
        screenClass = "screen screen-nav-collapsed";

    return (
        <div className={screenClass} style={{visibility: width && width < 270 ? 'hidden' : 'visible'}}>
            <ComponentsInstanceControls />
        </div>
    );

}

function mapState(state) {
    const { isOpen } = state.Navigation;
    return { isOpen };
}

const ScreensInstance = connect(mapState)(withSize()(ScreenInstance));

export default ScreensInstance;