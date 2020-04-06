import React, {Component} from "react";

import CardHeader from "material-kit/components/Card/CardHeader";
import CardBody from "material-kit/components/Card/CardBody";
import Card from "material-kit/components/Card/Card";

import "stylesheets/Account/Account.css"

import StylesAccount from "stylesheets/Account/Account";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import CardFooter from "material-kit/components/Card/CardFooter";
import ARTable from "components/ARTable";
import ActionsAccount from "actions/Account";
import Notifications from "helpers/Notification";


class ComponentAccountTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            pin: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.accountSubmit = this.accountSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.tableEdit = this.tableEdit.bind(this);
        this.tableDelete = this.tableDelete.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value.replace(' ','').replace('\t', '') });
    }

    cancelEdit() {
        this.props.editAccount(-1);
        this.setState({
            email: "",
            password: "",
            pin: ""
        });
    }

    tableEdit(key) {

        const { accountData } = this.props;

        const accountDetails = accountData[key];

        this.setState({
            email: accountDetails[1],
            password: accountDetails[2],
            pin: accountDetails[3]
        });

        this.props.editAccount(key)
    }

    tableDelete(key) {
        this.props.deleteAccount(key)
    }

    accountSubmit(e) {

        e.preventDefault();

        const { email, password, pin } = this.state;

        const { maxAccounts, usedAccounts, accountToEdit, accountData } = this.props;

        const isEdit = accountToEdit !== -1;

        if (usedAccounts >= maxAccounts)
            return;

        if (email && password) {

            if (isEdit) {
                this.props.saveAccount(accountToEdit, email, password, pin)
            } else {
                if (accountData.some((acc) => acc[1] === email))
                    Notifications.addNotification("Account", "Account with that email already exists!", Notifications.types.DANGER);
                else
                    this.props.addAccount(email, password, pin)
            }

        }

    }

    render() {
        const { maxAccounts, usedAccounts, accountDataToDisplay, accountToEdit, classes, width } = this.props;

        const formHeader = accountToEdit === -1 ? "Add Account" : "Edit Account "+accountToEdit;

        const formSubmitText = accountToEdit === -1 ? "Add Account" : "Save Account";

        let cancelButton = "";

        if (accountToEdit !== -1) {
            cancelButton = <button className={"account-button account-add"} onClick={this.cancelEdit}>Cancel</button>;
        }

        const { email, password, pin } = this.state;

        return (
            <Card className={"account-table"}>
                <CardHeader color="autorune" className={"account-table-header"}>
                    <h4 className={classes.cardTitleWhite}>Oldschool Accounts</h4>
                    <p className={classes.cardCategoryWhite}>
                        Current account count: {usedAccounts}<br />
                        Maximum allowed accounts: {maxAccounts}
                    </p>
                </CardHeader>
                <CardBody className={"account-table-body"}>
                    <ARTable
                        tableHead={["ID", "Email", "Status"]}
                        tableData={accountDataToDisplay}
                        tableEditFunction={this.tableEdit}
                        tableDeleteFunction={this.tableDelete}
                        width={width}
                    />
                </CardBody>
                <CardFooter>
                    <form className="account-form" id="account-form" autoComplete="on" onSubmit={this.accountSubmit}>

                        <h4 className={classes.cardTitle}>{formHeader}</h4>

                        <input className={"account-input account-email"} type="text" name="email" placeholder="Email" value={email} autoComplete="email" onChange={this.handleChange} required />
                        <input className={"account-input account-password"} type="text" name="password" placeholder="Password" value={password} autoComplete="password" onChange={this.handleChange} required />
                        <input className={"account-input account-pin"} type="text" name="pin" placeholder="Pin" value={pin} autoComplete="pin" onChange={this.handleChange} />

                        <input type="submit" value={formSubmitText} className="account-button account-add"/>

                        {cancelButton}

                    </form>
                </CardFooter>
            </Card>
        );
    }

}

function mapState(state) {
    const { maxAccounts, usedAccounts, accountData, accountDataToDisplay, accountToEdit } = state.Account;
    return { maxAccounts, usedAccounts, accountData, accountDataToDisplay, accountToEdit };
}

const actionCreators = {
    editAccount: ActionsAccount.editAccount,
    addAccount: ActionsAccount.addAccount,
    saveAccount: ActionsAccount.saveAccount,
    deleteAccount: ActionsAccount.deleteAccount
};

const ComponentsAccountTable = withStyles(StylesAccount)(connect(mapState, actionCreators)(ComponentAccountTable));

export default ComponentsAccountTable;