import StatesNavigation from "states/Navigation";

import produce from "immer";
import ConstantsNavigation from "constants/Navigation";

const ReducersNavigation = (state=StatesNavigation, action) => {
    let nextState;
    switch (action.type) {
        case ConstantsNavigation.NAVIGATION_TOGGLE:
            const isOpen = state.isOpen;
            nextState = produce(state, draftState => {
                draftState['isOpen'] = !isOpen;
            });
            return nextState;
        case ConstantsNavigation.NAVIGATION_SWITCH_SCREEN:
            const { screen } = action.payload;
            nextState = produce(state, draftState => {
                draftState['currentScreen'] = screen;
            });
            return nextState;
        default:
            return state;
    }
};

export default ReducersNavigation;