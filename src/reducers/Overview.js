import StatesOverview from "states/Overview";
import ConstantsOverview from "constants/Overview";

const ReducersOverview = (state=StatesOverview, action) => {
    switch (action.type) {
        case ConstantsOverview.STATS_UPDATE:
            return state;
        case ConstantsOverview.GRAPHS_UPDATE:
            return state;
        default:
            return state;
    }
};

export default ReducersOverview;