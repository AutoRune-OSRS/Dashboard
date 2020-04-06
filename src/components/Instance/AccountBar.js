import React from "react";

import "stylesheets/Instance/InstanceBars.css";
import ActionsInstance from "actions/Instance";
import {connect} from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import ListItemText from "@material-ui/core/ListItemText";
import ARModal from "components/ARModal";

function ComponentInstanceAccountBar(props) {

    const { instanceToEdit, accountData } = props;

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const [accountSelectorOpen, setAccountSelectorOpen] = React.useState(false);

    const handleListItemClick = (event, index) => {

        setSelectedIndex(index);

        const account = accountData[index];

        const accountInfo = {email: account[1], password: account[2], pin: account[3]};

        props.accountSet(instanceToEdit, accountInfo);

        setAccountSelectorOpen(false);

    };

    function getAccountList() {
        const accountEmails = accountData.map(acc => acc[1]);
        return (
            <List component="nav" aria-label="main mailbox folders">
                {
                    accountEmails.map((email, index) =>

                        <ListItem button key={index} selected={selectedIndex === index}
                                  onClick={ event => { handleListItemClick(event, index) } }>

                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>

                            <ListItemText primary={email} className={"script-selection-text"}/>

                        </ListItem>

                    )
                }
            </List>
        );
    }

    return (
        <div className={"instance-control-bar"}>

            <button className={"instance-control-bar-button"} onClick={() => setAccountSelectorOpen(true)}>Set Account</button>

            <ARModal show={accountSelectorOpen} title={"Select Account"} onClose={() => setAccountSelectorOpen(false)} >
                { getAccountList() }
            </ARModal>
            <button className={"instance-control-bar-button"} onClick={() => props.accountLogin(instanceToEdit)}>Login</button>
            <button className={"instance-control-bar-button"} onClick={() => props.accountLogout(instanceToEdit)}>Logout</button>
        </div>
    );

}

function mapState(state) {
    const { instanceToEdit } = state.Instances;
    const { accountData } = state.Account;
    return { instanceToEdit, accountData };
}

const actionCreators = {
    accountSet: ActionsInstance.accountSelect,
    accountLogin: ActionsInstance.accountLogin,
    accountLogout: ActionsInstance.accountLogout,
};

const ComponentsInstanceAccountBar = connect(mapState, actionCreators)(ComponentInstanceAccountBar);

export default ComponentsInstanceAccountBar;