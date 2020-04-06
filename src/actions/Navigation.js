import ConstantsNavigation from "constants/Navigation";

function ActionsNavigationToggle() {
    return {
        type: ConstantsNavigation.NAVIGATION_TOGGLE
    }
}

function ActionsNavigationSwitchScreen(screen) {

    return dispatch => {
        dispatch(switchScreen());
    };


    function switchScreen() {
        return {
            type: ConstantsNavigation.NAVIGATION_SWITCH_SCREEN,
            payload: { screen }
        }
    }

}

const ActionsNavigation = {
    toggle: ActionsNavigationToggle,
    switchScreen: ActionsNavigationSwitchScreen
};

export default ActionsNavigation