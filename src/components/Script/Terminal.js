import React, {Component} from "react";

import Card from "material-kit/components/Card/Card";
import CardHeader from "material-kit/components/Card/CardHeader";
import CardBody from "material-kit/components/Card/CardBody";
import {withStyles} from "@material-ui/core";

import "stylesheets/Script/Terminal.css"

import StylesScript from "stylesheets/Script/Script";
import {connect} from "react-redux";
import ActionsScript from "actions/Script";

class ComponentScriptTerminal extends Component {

    render() {
        const { terminalOutput, classes } = this.props;

        return (
            <Card className={"script-terminal"}>
                <CardHeader color="autorune" className={"script-terminal-header"}>
                    <h4 className={classes.cardTitleWhite}>Script Log</h4>
                    <p className={classes.cardCategoryWhite}>
                        Last updated: 2 seconds ago
                    </p>
                </CardHeader>
                <CardBody className={"script-terminal-body"}>
                    <pre>{terminalOutput}</pre>
                </CardBody>
            </Card>
        );
    }

}

function mapState(state) {
    const { terminalOutput } = state.Script;
    return { terminalOutput };
}

const actionCreators = {
    clearTerminal: ActionsScript.TerminalClear,
};

const ComponentsScriptTerminal = withStyles(StylesScript)(connect(mapState, actionCreators)(ComponentScriptTerminal));

export default ComponentsScriptTerminal;