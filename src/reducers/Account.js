import StatesAccount from "states/Account";
import ConstantsAccount from "constants/Account";

import produce from "immer";

const ReducersAccount = (state=StatesAccount, action) => {
    let nextState;
    switch (action.type) {
        case ConstantsAccount.ACCOUNT_ADD:
            const { email, password, pin } = action.payload;
            nextState = produce(state, draftState => {
                draftState.accountData.push([state.accountData.length.toString(), email, password, pin, "Available"]);
                draftState.accountDataToDisplay.push([state.accountDataToDisplay.length.toString(), email, "Available"]);
                draftState.usedAccounts = state.usedAccounts + 1;
            });
            return nextState;
        case ConstantsAccount.ACCOUNT_EDIT:
            const toEdit = action.payload;
            nextState = produce(state, draftState => {
                draftState.accountToEdit = toEdit;
            });
            return nextState;
        case ConstantsAccount.ACCOUNT_SAVE:
            const { accountIdToSave, emailToSave, passwordToSave, pinToSave } = action.payload;
            const accountStatus = state.accountData[accountIdToSave][4];
            nextState = produce(state, draftState => {
                draftState.accountData[accountIdToSave] = [accountIdToSave.toString(), emailToSave, passwordToSave, pinToSave, accountStatus];
                draftState.accountDataToDisplay[accountIdToSave] = [accountIdToSave.toString(), emailToSave, accountStatus];
            });
            return nextState;
        case ConstantsAccount.ACCOUNT_DELETE:
            const accountToDelete = action.payload;
            const newAccountToEdit = state.accountToEdit < state.usedAccounts - 1 ? state.accountToEdit : state.accountToEdit - 1;
            nextState = produce(state, draftState => {
                draftState.usedAccounts = state.usedAccounts - 1;
                draftState.accountToEdit = newAccountToEdit;
                draftState.accountData.splice(accountToDelete, 1);
                draftState.accountDataToDisplay.splice(accountToDelete, 1);

                const dataToFix = draftState.accountData.filter(acc => parseInt(acc[0]) > accountToDelete);
                dataToFix.forEach(acc => draftState.accountData[draftState.accountData.indexOf(acc)][0] = (parseInt(acc[0]) - 1).toString());

                const displayDataToFix = draftState.accountDataToDisplay.filter(acc => parseInt(acc[0]) > accountToDelete);
                displayDataToFix.forEach(acc => draftState.accountDataToDisplay[draftState.accountDataToDisplay.indexOf(acc)][0] = (parseInt(acc[0]) - 1).toString());
            });
            return nextState;
        default:
            return state;
    }
};

export default ReducersAccount;