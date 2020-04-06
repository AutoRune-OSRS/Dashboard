import StatesConnection from "states/Connection";

import produce from "immer";

import ConstantsConnection from "constants/Connection";

const ReducersConnection = (state=StatesConnection, action) => {
    let nextState;
    switch (action.type) {
        case ConstantsConnection.CONNECTION_CONNECT:
        case ConstantsConnection.CONNECTION_TEST:
        case ConstantsConnection.CONNECTION_DISCONNECT:
            nextState = produce(state, draftState => {
                draftState['connectionState'] = action.type;
                draftState['connectionResponse'] = ConstantsConnection.CONNECTION_NO_RESPONSE;
            });
            return nextState;
        case ConstantsConnection.CONNECTION_CONNECT_SUCCESSFUL:
            const { ip, port } = action.payload;
            nextState = produce(state, draftState => {
                draftState['connectionState'] = ConstantsConnection.CONNECTION_CONNECTED;
                draftState['connectionResponse'] = ConstantsConnection.CONNECTION_NO_RESPONSE;
                draftState['ipAddress'] = ip;
                draftState['port'] = port;
            });
            return nextState;
        case ConstantsConnection.CONNECTION_DISCONNECT_SUCCESSFUL:
            nextState = produce(state, draftState => {
                draftState['connectionState'] = ConstantsConnection.CONNECTION_DISCONNECTED;
                draftState['connectionResponse'] = ConstantsConnection.CONNECTION_NO_RESPONSE;
            });
            return nextState;
        case ConstantsConnection.CONNECTION_TEST_SUCCESSFUL:
            const { testIp, testPort } = action.payload;
            nextState = produce(state, draftState => {
                draftState['connectionState'] = ConstantsConnection.CONNECTION_DISCONNECTED;
                draftState['connectionResponse'] = ConstantsConnection.CONNECTION_TEST_SUCCESSFUL;
                draftState['ipAddress'] = testIp;
                draftState['port'] = testPort;
            });
            return nextState;
        case ConstantsConnection.CONNECTION_CONNECT_FAILURE:
        case ConstantsConnection.CONNECTION_TEST_FAILURE:
        case ConstantsConnection.CONNECTION_DISCONNECT_FAILURE:
            nextState = produce(state, draftState => {
                draftState['connectionState'] = ConstantsConnection.CONNECTION_DISCONNECTED;
                draftState['connectionResponse'] = action.type;
            });
            return nextState;
        default:
            return state;
    }
};

export default ReducersConnection;