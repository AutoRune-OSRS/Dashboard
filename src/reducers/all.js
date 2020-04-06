import { combineReducers } from 'redux';

import ReducersNavigation from "reducers/Navigation";
import ReducersConnection from "reducers/Connection";
import ReducersOverview from "reducers/Overview";
import ReducersAccount from "reducers/Account";
import ReducersScript from "reducers/Script";
import ReducersInstance from "reducers/Instance";

const ReducersAll = combineReducers({
    Navigation: ReducersNavigation,
    Connection: ReducersConnection,
    Overview: ReducersOverview,
    Account: ReducersAccount,
    Script: ReducersScript,
    Instances: ReducersInstance
});

export default ReducersAll;
