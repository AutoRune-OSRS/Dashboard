import ConstantsScript from "constants/Script";

function ActionsScriptTerminalClear() {
    return {
        type: ConstantsScript.TERMINAL_CLEAR
    }
}

const ActionsScript = {
    TerminalClear: ActionsScriptTerminalClear
};

export default ActionsScript;