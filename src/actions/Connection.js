import ConstantsConnection from "constants/Connection";
import servicesConnection from "services/Connection";
import Notifications from "helpers/Notification";
import InitialSyncEmitter from "services/emitters/InitialSyncEmitter";

function ActionsConnectionConnect(ip, port) {

    return dispatch => {

        dispatch(request());

        servicesConnection.connect(ip, port).then(
            response => dispatch(successful()),
            error => dispatch(failure())
        );

    };

    function request() {
        return { type: ConstantsConnection.CONNECTION_CONNECT }
    }

    function successful() {
        InitialSyncEmitter.sendEmission();
        return { type: ConstantsConnection.CONNECTION_CONNECT_SUCCESSFUL, payload: { ip: ip, port: port } }
    }

    function failure() {
        return { type: ConstantsConnection.CONNECTION_CONNECT_FAILURE }
    }

}

function ActionsConnectionDisconnect(notify, forced) {

    if (notify)
        Notifications.addNotification("Connection", "Disconnected from client!", Notifications.types.DANGER);

    return dispatch => {

        dispatch(request());

        if (forced)
            servicesConnection.closeSocket();

        dispatch(successful());

    };

    function request() {
        return { type: ConstantsConnection.CONNECTION_DISCONNECT }
    }

     function successful() {
         return { type: ConstantsConnection.CONNECTION_DISCONNECT_SUCCESSFUL }
     }

}

function ActionsConnectionTest(ip, port) {

    return dispatch => {

        dispatch(request());

        servicesConnection.connect(ip, port).then(
            response => dispatch(successful()),
            error => dispatch(failure())
        );

    };

    function request() {
        return { type: ConstantsConnection.CONNECTION_TEST }
    }

    function successful() {
        servicesConnection.closeSocket();
        return { type: ConstantsConnection.CONNECTION_TEST_SUCCESSFUL, payload: { ip: ip, port: port } }
    }

    function failure() {
        return { type: ConstantsConnection.CONNECTION_TEST_FAILURE }
    }

}

const ActionsConnection = {
    connect: ActionsConnectionConnect,
    disconnect: ActionsConnectionDisconnect,
    test: ActionsConnectionTest,
};

export default ActionsConnection