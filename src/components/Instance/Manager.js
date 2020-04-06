import React, {Component} from "react";

import Card from "material-kit/components/Card/Card";
import CardHeader from "material-kit/components/Card/CardHeader";
import CardBody from "material-kit/components/Card/CardBody";
import {withStyles} from "@material-ui/core";

import "stylesheets/Instance/Instance.css"

import StylesInstance from "stylesheets/Instance/Instance";
import {connect} from "react-redux";
import ComponentsInstanceControlBar from "components/Instance/ControlBar";
import ComponentsInstanceScriptBar from "components/Instance/ScriptBar";
import ComponentsInstanceStatusBar from "components/Instance/StatusBar";
import ComponentsInstanceAccountBar from "components/Instance/AccountBar";


class ComponentInstanceManager extends Component {

    render() {
        const { classes, instanceToEdit } = this.props;

        if (instanceToEdit === 0) {
            return (
                <div className={"instance-manager"}>
                    <Card className={"instance-manager-card"}>
                        <CardHeader color="autorune" className={"instance-manager-card-header"}>
                            <h4 className={classes.cardTitleWhite}>Basic Controls</h4>
                        </CardHeader>
                        <CardBody className={"instance-manager-card-body"}>
                            <ComponentsInstanceControlBar />
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className={"instance-manager"}>
                    <div className={"instance-manager-row"}>
                        <Card className={"instance-manager-card"}>
                            <CardHeader color="autorune" className={"instance-manager-card-header"}>
                                <h4 className={classes.cardTitleWhite}>Basic Controls</h4>
                            </CardHeader>
                            <CardBody className={"instance-manager-card-body"}>
                                <ComponentsInstanceControlBar/>
                            </CardBody>
                        </Card>
                        <Card className={"instance-manager-card"}>
                            <CardHeader color="autorune" className={"instance-manager-card-header"}>
                                <h4 className={classes.cardTitleWhite}>Instance Status</h4>
                            </CardHeader>
                            <CardBody className={"instance-manager-card-body"}>
                                <ComponentsInstanceStatusBar/>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={"instance-manager-row"}>
                        <Card className={"instance-manager-card"}>
                            <CardHeader color="autorune" className={"instance-manager-card-header"}>
                                <h4 className={classes.cardTitleWhite}>Script Controls</h4>
                            </CardHeader>
                            <CardBody className={"instance-manager-card-body"}>
                                <ComponentsInstanceScriptBar/>
                            </CardBody>
                        </Card>
                        <Card className={"instance-manager-card"}>
                            <CardHeader color="autorune" className={"instance-manager-card-header"}>
                                <h4 className={classes.cardTitleWhite}>Account Controls</h4>
                            </CardHeader>
                            <CardBody className={"instance-manager-card-body"}>
                                <ComponentsInstanceAccountBar/>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
    }

}

function mapState(state) {
    const { instanceToEdit } = state.Instances;
    return { instanceToEdit };
}

const ComponentsInstanceManager = withStyles(StylesInstance)(connect(mapState)(ComponentInstanceManager));

export default ComponentsInstanceManager;