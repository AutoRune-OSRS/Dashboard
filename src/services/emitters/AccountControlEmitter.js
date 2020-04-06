import servicesConnection from "../Connection";
import ConstantsEvent from "constants/Event";

function sendEmission(command, instanceId, accountInfo) {

    const socket = servicesConnection.getSocket();

    if (!socket || !socket.connected)
        return;

    const payload = JSON.stringify({command: command, instance_id: instanceId, account_info: JSON.stringify(accountInfo)});

    socket.emit(ConstantsEvent.ACCOUNT_CONTROL, payload)

}

const accountControlEmitter = {
    sendEmission
};

export default accountControlEmitter