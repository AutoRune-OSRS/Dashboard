import produce from "immer";
import StatesScript from "states/Script";
import ConstantsScript from "constants/Script";

const ReducersScript = (state=StatesScript, action) => {

    let nextState;

    switch (action.type) {

        case ConstantsScript.TERMINAL_CLEAR:
            nextState = produce(state, draftState => {
                draftState['terminalOutput'] = "1\tAUTORUNE SCRIPT LOG\n";
            });
            return nextState;

        default:
            return state;

    }

};

export default ReducersScript;