import React from "react";

import "stylesheets/Instance/InstanceBars.css";

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import ActionsInstance from "actions/Instance";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: "5px 30px",
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function ComponentInstanceControlBar(props) {

    const classes = useStyles();

    const { usedInstances, instanceToEdit } = props;

    const selectInstance = event => {
        const selected = event.target.value;
        props.setSelected(selected)
    };

    const addInstance = () => {
        props.addInstance()
    };

    const removeInstance = () => {
        props.removeInstance(instanceToEdit)
    };

    return (
        <div className={"instance-control-bar"}>
            <FormControl className={classes.formControl}>
                <InputLabel>Instance</InputLabel>
                <Select value={instanceToEdit} onChange={selectInstance}>
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
                <FormHelperText>Select Instance To Manage</FormHelperText>
            </FormControl>
            <button className={"instance-control-bar-button"} onClick={removeInstance}>Remove Instance</button>
            <button className={"instance-control-bar-button"} onClick={addInstance}>Add Instance</button>
        </div>
    );

}

function mapState(state) {
    const { usedInstances, instanceToEdit } = state.Instances;
    return { usedInstances, instanceToEdit };
}

const actionCreators = {
    setSelected: ActionsInstance.select,
    addInstance: ActionsInstance.add,
    removeInstance: ActionsInstance.remove
};

const ComponentsInstanceControlBar = connect(mapState, actionCreators)(ComponentInstanceControlBar);

export default ComponentsInstanceControlBar;