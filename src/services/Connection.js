import socketIOClient from "socket.io-client";
import url from "socket.io-client/lib/url";

let socket;

function createSocket() {
    socket = socketIOClient({ autoConnect: false });
    return socket;
}

function closeSocket() {
    socket.close();
}

const connect = function (ip, port) {
    return new Promise(function (resolve, reject) {

        const endpoint = 'http://' + ip + ':' + port;

        socket.uri = url(endpoint).source;

        socket.open();

        socket.on('connect', () => {
            resolve("Success!");
        });

        socket.on('connect_error', (error) => {
            socket.close();
            reject(Error(error));
        });

    });
};

function getSocket() {

    return socket

}

const servicesConnection = {
    connect,
    getSocket,
    createSocket,
    closeSocket
};

export default servicesConnection


