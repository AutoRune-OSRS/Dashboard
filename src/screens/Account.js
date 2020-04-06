import React from 'react';

import "stylesheets/global.css";
import {connect} from "react-redux";
import ComponentsAccountTable from "components/Account/AccountTable";

import { withSize } from "react-sizeme";

function ScreenAccount(props) {

    const { width } = props.size

    let screenClass;
    if (props.isOpen)
        screenClass = "screen screen-nav-open";
    else
        screenClass = "screen screen-nav-collapsed";

    return (
        <div className={screenClass} style={{visibility: width && width < 270 ? 'hidden' : 'visible'}}>
            <ComponentsAccountTable width={width}/>
        </div>
    );

}

function mapState(state) {
    const { isOpen } = state.Navigation;
    return { isOpen };
}

const ScreensAccount = connect(mapState)(withSize()(ScreenAccount));

export default ScreensAccount;