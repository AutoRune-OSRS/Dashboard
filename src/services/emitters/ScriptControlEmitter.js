import servicesConnection from "services/Connection";
import ConstantsEvent from "constants/Event";

function sendEmission(command, instanceId, scriptId) {

    const socket = servicesConnection.getSocket();

    if (!socket || !socket.connected)
        return;

    const payload = JSON.stringify({command: command, instance_id: instanceId, script_id: scriptId});

    socket.emit(ConstantsEvent.SCRIPT_CONTROL, payload)

}

const scriptControlEmitter = {
    sendEmission
};

export default scriptControlEmitter