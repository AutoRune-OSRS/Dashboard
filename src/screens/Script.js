import React from 'react';

import "stylesheets/global.css";
import {connect} from "react-redux";
import {withSize} from "react-sizeme";
import ComponentsScriptTerminal from "components/Script/Terminal";
import ComponentsScriptInfo from "components/Script/Info";

function ScreenScript(props) {

    const { width } = props.size;

    let screenClass;
    if (props.isOpen)
        screenClass = "screen screen-nav-open";
    else
        screenClass = "screen screen-nav-collapsed";

    return (
        <div className={screenClass} style={{visibility: width && width < 270 ? 'hidden' : 'visible'}}>
            <ComponentsScriptInfo />
            <ComponentsScriptTerminal />
        </div>
    );

}

function mapState(state) {
    const { isOpen } = state.Navigation;
    return { isOpen };
}

const ScreensScript = connect(mapState)(withSize()(ScreenScript));

export default ScreensScript;