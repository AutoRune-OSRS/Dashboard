import servicesConnection from "../Connection";
import ConstantsEvent from "constants/Event";

function sendEmission(command, instanceId) {

    const socket = servicesConnection.getSocket();

    if (!socket || !socket.connected)
        return;

    const payload = JSON.stringify({command: command, instance_id: instanceId});

    socket.emit(ConstantsEvent.INSTANCE_CONTROL, payload)

}

const instanceControlEmitter = {
    sendEmission
};

export default instanceControlEmitter