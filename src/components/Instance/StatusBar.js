import React from "react";

import "stylesheets/Instance/InstanceBars.css";

import {connect} from "react-redux";

function ComponentsInstanceStatusBarStatus(props) {

    const { title, text } = props;


    return (
        <div className={"instance-control-bar-status"}>
            <p className={"instance-control-bar-status-title"}>{title}</p>
            <p className={"instance-control-bar-status-text"}>{text}</p>
        </div>
    );

}

function ComponentInstanceStatusBar(props) {

    const { instanceToEdit, instanceData } = props;

    const dataToDisplay = instanceData[instanceToEdit-1];

    return (
        <div className={"instance-control-bar"}>
            <ComponentsInstanceStatusBarStatus title={"Instance Status"} text={dataToDisplay["instanceStatus"]} />
            <ComponentsInstanceStatusBarStatus title={"Script Selected"} text={dataToDisplay["scriptSelected"]} />
            <ComponentsInstanceStatusBarStatus title={"Script Status"} text={dataToDisplay["scriptStatus"]} />
            <ComponentsInstanceStatusBarStatus title={"Account Selected"} text={dataToDisplay["accountSelected"]} />
            <ComponentsInstanceStatusBarStatus title={"Account Status"} text={dataToDisplay["accountStatus"]} />
        </div>
    );

}

function mapState(state) {
    const { instanceToEdit, instanceData } = state.Instances;
    return { instanceToEdit, instanceData };
}

const ComponentsInstanceStatusBar = connect(mapState)(ComponentInstanceStatusBar);

export default ComponentsInstanceStatusBar;