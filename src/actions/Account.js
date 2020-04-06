import ConstantsAccount from "constants/Account";

function ActionsAccountAdd(email, password, pin) {

    return {
        type: ConstantsAccount.ACCOUNT_ADD,
        payload: { email, password, pin }
    }

}

function ActionsAccountEdit(accountId) {

    return {
        type: ConstantsAccount.ACCOUNT_EDIT,
        payload: accountId
    }

}

function ActionsAccountSave(accountIdToSave, emailToSave, passwordToSave, pinToSave) {

    return {
        type: ConstantsAccount.ACCOUNT_SAVE,
        payload: { accountIdToSave, emailToSave, passwordToSave, pinToSave }
    }

}

function ActionsAccountDelete(accountId) {

    return {
        type: ConstantsAccount.ACCOUNT_DELETE,
        payload: accountId
    }

}

const ActionsAccount = {
    addAccount: ActionsAccountAdd,
    editAccount: ActionsAccountEdit,
    saveAccount: ActionsAccountSave,
    deleteAccount: ActionsAccountDelete
};

export default ActionsAccount