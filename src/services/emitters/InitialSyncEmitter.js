import servicesConnection from "../Connection";
import ConstantsEvent from "constants/Event";

function sendEmission() {

    const socket = servicesConnection.getSocket();

    if (!socket || !socket.connected)
        return;

    socket.emit(ConstantsEvent.INITIAL_SYNC, "")

}

const InitialSyncEmitter = {
    sendEmission
};

export default InitialSyncEmitter