import StatesInstance from "states/Instance";
import ConstantsInstance from "constants/Instance";
import produce from "immer";


const ReducersInstance = (state=StatesInstance, action) => {

    let nextState;

    switch (action.type) {

        case ConstantsInstance.INSTANCE_ADDED:
            nextState = produce(state, draftState => {
                draftState["usedInstances"] = state["usedInstances"] + 1;
                draftState["instanceData"].push(draftState["defaultInstanceData"]);
            });
            return nextState;

        case ConstantsInstance.INSTANCE_SELECTED:
            const instanceToEdit = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceToEdit"] = instanceToEdit;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_REMOVED:
            const instanceToRemove = action.payload;
            const newInstanceToEdit = state.instanceToEdit < state["usedInstances"] - 1 ? state.instanceToEdit : state.instanceToEdit - 1;
            nextState = produce(state, draftState => {
                draftState["usedInstances"] = state["usedInstances"] - 1;
                draftState["instanceToEdit"] = newInstanceToEdit;
                draftState["instanceData"].splice(instanceToRemove, 1);
            });
            return nextState;

        case ConstantsInstance.INSTANCE_RESET:
            nextState = produce(state, draftState => {
                draftState["usedInstances"] = 0;
                draftState["runningBots"] = 0;
                draftState["instanceToEdit"] = 0;
                draftState["instanceData"] = []
            });
            return nextState;

        case ConstantsInstance.INSTANCE_SCRIPT_SELECTED:
            const { instanceIdForScriptSelect, scriptIdSelected } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceIdForScriptSelect]["scriptSelected"] = scriptIdSelected.toString();
                draftState["instanceData"][instanceIdForScriptSelect]["scriptStatus"] = "Stopped";
            });
            return nextState;

        case ConstantsInstance.INSTANCE_SCRIPT_STARTED:
            const { instanceIdForScriptStart } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceIdForScriptStart]["scriptStatus"] = "Started";
                draftState["runningBots"] = draftState["runningBots"] + 1;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_SCRIPT_PAUSED:
            const { instanceIdForScriptPause } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceIdForScriptPause]["scriptStatus"] = "Paused";
                draftState["runningBots"] = draftState["runningBots"] - 1;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_SCRIPT_STOPPED:
            const { instanceIdForScriptStop } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceIdForScriptStop]["scriptStatus"] = "Stopped";
                draftState["runningBots"] = draftState["runningBots"] - 1;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_ACCOUNT_SELECTED:
            const { instanceIdForSet, selectedEmail, accountStatus } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceIdForSet]["accountSelected"] = selectedEmail;
                draftState["instanceData"][instanceIdForSet]["accountStatus"] = accountStatus;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_ACCOUNT_LOGGED_IN:
            const { instanceForLogin, loginStatus } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceForLogin]["accountStatus"] = loginStatus;
            });
            return nextState;

        case ConstantsInstance.INSTANCE_ACCOUNT_LOGGED_OUT:
            const { instanceForLogout, logoutStatus } = action.payload;
            nextState = produce(state, draftState => {
                draftState["instanceData"][instanceForLogout]["accountStatus"] = logoutStatus;
            });
            return nextState;

        default:
            return state;
    }
};

export default ReducersInstance;