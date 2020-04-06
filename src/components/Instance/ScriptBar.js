import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'stylesheets/Global/Tabs.css';

import "stylesheets/Instance/InstanceBars.css";
import ARModal from "components/ARModal";
import ActionsInstance from "actions/Instance";
import {connect} from "react-redux";

function ComponentInstanceScriptBar(props) {

    const { instanceToEdit } = props;

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const [scriptSelectorOpen, setScriptSelectorOpen] = React.useState(false);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setScriptSelectorOpen(false);

        const scriptId = index; //TODO: Get actual script id
        props.selectScript(instanceToEdit, scriptId)
    };

    function getScriptList(tab) {
        return (
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button selected={selectedIndex === 0} onClick={event => { handleListItemClick(event, 0); }}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Fake Script 1: "+tab} className={"script-selection-text"}/>
                </ListItem>
                <ListItem button selected={selectedIndex === 1} onClick={event => { handleListItemClick(event, 1); }}>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Fake Script 2: "+tab} className={"script-selection-text"}/>
                </ListItem>
            </List>
        );
    }

    return (
        <div className={"instance-control-bar"}>

            <button className={"instance-control-bar-button"} onClick={() => setScriptSelectorOpen(true)}>Select Script</button>

            <ARModal show={scriptSelectorOpen} title={"Select Script"} onClose={() => setScriptSelectorOpen(false)} >
                <Tabs>
                    <TabList>
                        <Tab>Recent</Tab>
                        <Tab>All</Tab>
                    </TabList>

                    <TabPanel>
                        {getScriptList(1)}
                    </TabPanel>
                    <TabPanel>
                        {getScriptList(2)}
                    </TabPanel>
                </Tabs>
            </ARModal>

            <button className={"instance-control-bar-button"} onClick={props.startScript(instanceToEdit)}>Start Script</button>
            <button className={"instance-control-bar-button"} onClick={props.pauseScript(instanceToEdit)}>Pause Script</button>
            <button className={"instance-control-bar-button"} onClick={props.stopScript(instanceToEdit)}>Stop Script</button>
        </div>
    );

}

function mapState(state) {
    const { instanceToEdit } = state.Instances;
    return { instanceToEdit };
}

const actionCreators = {
    selectScript: ActionsInstance.scriptSelect,
    startScript: ActionsInstance.scriptStart,
    pauseScript: ActionsInstance.scriptPause,
    stopScript: ActionsInstance.scriptStop
};

const ComponentsInstanceScriptBar = connect(mapState, actionCreators)(ComponentInstanceScriptBar);

export default ComponentsInstanceScriptBar;