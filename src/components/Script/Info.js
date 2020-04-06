import React, {Component} from "react";

import Card from "material-kit/components/Card/Card";
import CardHeader from "material-kit/components/Card/CardHeader";
import CardBody from "material-kit/components/Card/CardBody";
import {withStyles} from "@material-ui/core";

import "stylesheets/Script/Info.css"

import StylesScript from "stylesheets/Script/Script";
import {connect} from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import ActionsInstance from "actions/Instance";

function ComponentsScriptStatus(props) {

    const { title, text } = props;

    return (
        <div className={"script-status"}>
            <p className={"script-status-title"}>{title}</p>
            <p className={"script-status-text"}>{text}</p>
        </div>
    );

}


class ComponentScriptInfo extends Component {

    constructor(props) {
        super(props);

        this.selectInstance = this.selectInstance.bind(this);
    }

    selectInstance(event) {
        const selected = event.target.value;
        this.props.setSelected(selected)
    }

    render() {

        const { usedInstances, instanceToEdit, classes } = this.props;

        return (
            <Card className={"script-info"}>
                <CardHeader color="autorune" className={"script-info-header"}>
                    <h4 className={classes.cardTitleWhite}>Script Info</h4>
                </CardHeader>
                <CardBody className={"script-info-body"}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Instance</InputLabel>
                        <Select value={instanceToEdit} onChange={this.selectInstance}>
                            <MenuItem value={0}>
                                <em>None</em>
                            </MenuItem>
                            {
                                Array.from({length: usedInstances}, (v, i) => i).map((id, index) =>
                                    <MenuItem key={index} value={id+1}>
                                        {id+1}
                                    </MenuItem>
                                )
                            }
                        </Select>
                        <FormHelperText>Select Instance</FormHelperText>
                    </FormControl>
                    <div className={"script-status-display"}>
                        <ComponentsScriptStatus title={"Script Name"} text={"Poop Collector"} />
                        <ComponentsScriptStatus title={"Runtime"} text={"69 Minutes"} />
                    </div>
                </CardBody>
            </Card>
        );
    }

}

function mapState(state) {
    const { usedInstances, instanceToEdit } = state.Instances;
    return { usedInstances, instanceToEdit };
}

const actionCreators = {
    setSelected: ActionsInstance.select,
};

const ComponentsScriptInfo = withStyles(StylesScript)(connect(mapState, actionCreators)(ComponentScriptInfo));

export default ComponentsScriptInfo;