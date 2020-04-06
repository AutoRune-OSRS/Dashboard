import ConstantsInstance from "constants/Instance";
import instanceControlEmitter from "../services/emitters/InstanceControlEmitter";
import accountControlEmitter from "services/emitters/AccountControlEmitter";

import Notifications from "helpers/Notification";
import scriptControlEmitter from "services/emitters/ScriptControlEmitter";
import ConstantsEventCommand from "constants/EventCommand";

function ActionsInstanceSelect(instanceId) {

    if (instanceId === 0)
        return ActionsInstanceSelected(0);

    instanceControlEmitter.sendEmission(ConstantsEventCommand.INSTANCE_SELECT, instanceId);

    return {
        type: ConstantsInstance.INSTANCE_SELECTING,
        payload: instanceId
    }

}

function ActionsInstanceSelected(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Instance selected", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_SELECTED,
        payload: instanceId
    }

}

function ActionsInstanceAdd() {

    instanceControlEmitter.sendEmission(ConstantsEventCommand.INSTANCE_ADD, 0);

    return {
        type: ConstantsInstance.INSTANCE_ADDING,
    }

}

function ActionsInstanceAdded(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Instance added", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_ADDED
    }
}

function ActionsInstanceRemove(instanceId) {

    instanceControlEmitter.sendEmission(ConstantsEventCommand.INSTANCE_REMOVE, instanceId);

    return {
        type: ConstantsInstance.INSTANCE_REMOVING,
        payload: instanceId
    }

}

function ActionsInstanceRemoved(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Instance removed", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_REMOVED,
        payload: instanceId
    }
}

function ActionsInstanceScriptSelect(instanceId, scriptId) {

    scriptControlEmitter.sendEmission(ConstantsEventCommand.SCRIPT_SELECT, instanceId, scriptId);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_SELECTING,
        payload: { instanceId, scriptId }
    }

}

function ActionsInstanceScriptSelected(instanceId, scriptId) {

    Notifications.addNotification("Instance "+instanceId, "Script Set", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_SELECTED,
        payload: { instanceIdForScriptSelect: instanceId, scriptIdSelected: scriptId }
    }
}

function ActionsInstanceScriptStart(instanceId) {

    scriptControlEmitter.sendEmission(ConstantsEventCommand.SCRIPT_START, instanceId, -1);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_STARTING,
        payload: { instanceId }
    }

}

function ActionsInstanceScriptStarted(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Script Started", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_STARTED,
        payload: { instanceIdForScriptStart: instanceId }
    }
}

function ActionsInstanceScriptPause(instanceId) {

    scriptControlEmitter.sendEmission(ConstantsEventCommand.SCRIPT_PAUSE, instanceId, -1);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_PAUSING,
        payload: { instanceId }
    }

}

function ActionsInstanceScriptPaused(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Script Paused", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_PAUSED,
        payload: { instanceIdForScriptPause: instanceId }
    }
}

function ActionsInstanceScriptStop(instanceId) {

    scriptControlEmitter.sendEmission(ConstantsEventCommand.SCRIPT_STOP, instanceId, -1);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_STOPPING,
        payload: { instanceId }
    }

}

function ActionsInstanceScriptStopped(instanceId) {

    Notifications.addNotification("Instance "+instanceId, "Script Stopped", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_SCRIPT_STOPPED,
        payload: { instanceIdForScriptStop: instanceId }
    }
}

function ActionsInstanceReset() {

    return {
        type: ConstantsInstance.INSTANCE_RESET
    }

}

function ActionsInstanceAccountSelect(instanceId, accountInfo) {

    accountControlEmitter.sendEmission(ConstantsEventCommand.ACCOUNT_SELECT, instanceId, accountInfo);

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_SELECTING,
        payload: { instanceIdForSet: instanceId, selectedEmail: "Please Wait", accountStatus: "Please Wait" }
    }

}

function ActionsInstanceAccountSelected(instanceId, email) {

    Notifications.addNotification("Instance "+instanceId, "Account set to "+email, Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_SELECTED,
        payload: { instanceIdForSet: instanceId, selectedEmail: email, accountStatus: "Login Screen" }
    }
}

function ActionsInstanceAccountLogin(instanceId) {

    accountControlEmitter.sendEmission(ConstantsEventCommand.ACCOUNT_LOGIN, instanceId, "");

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_LOGGING_IN,
        payload: {instanceForLogin: instanceId, loginStatus: "Logging In"}
    }

}

function ActionsInstanceAccountLoggedIn(instanceId, status) {

    Notifications.addNotification("Instance "+instanceId, "Account logged in", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_LOGGED_IN,
        payload: {instanceForLogin: instanceId, loginStatus: status}
    }
}

function ActionsInstanceAccountLogout(instanceId) {

    accountControlEmitter.sendEmission(ConstantsEventCommand.ACCOUNT_LOGOUT, instanceId, "");

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_LOGGING_OUT,
        payload: {instanceForLogout: instanceId, logoutStatus: "Logging Out"}
    }

}

function ActionsInstanceAccountLoggedOut(instanceId, status) {

    Notifications.addNotification("Instance "+instanceId, "Account logged out", Notifications.types.SUCCESS);

    return {
        type: ConstantsInstance.INSTANCE_ACCOUNT_LOGGED_OUT,
        payload: {instanceForLogout: instanceId, logoutStatus: status}
    }

}

const ActionsInstance = {
    select: ActionsInstanceSelect,
    selected: ActionsInstanceSelected,
    add: ActionsInstanceAdd,
    added: ActionsInstanceAdded,
    remove: ActionsInstanceRemove,
    removed: ActionsInstanceRemoved,
    reset: ActionsInstanceReset,

    scriptSelect: ActionsInstanceScriptSelect,
    scriptSelected: ActionsInstanceScriptSelected,
    scriptStart: ActionsInstanceScriptStart,
    scriptStarted: ActionsInstanceScriptStarted,
    scriptPause: ActionsInstanceScriptPause,
    scriptPaused: ActionsInstanceScriptPaused,
    scriptStop: ActionsInstanceScriptStop,
    scriptStopped: ActionsInstanceScriptStopped,

    accountSelect: ActionsInstanceAccountSelect,
    accountSelected: ActionsInstanceAccountSelected,
    accountLogin: ActionsInstanceAccountLogin,
    accountLoggedIn: ActionsInstanceAccountLoggedIn,
    accountLogout: ActionsInstanceAccountLogout,
    accountLoggedOut: ActionsInstanceAccountLoggedOut,
};

export default ActionsInstance