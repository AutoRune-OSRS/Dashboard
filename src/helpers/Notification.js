import { store } from "react-notifications-component";

function addNotification(title, message, type) {

    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        width: 300,
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });

}

const types = {

    SUCCESS: "success",
    DANGER: "danger",
    INFO: "info",
    DEFAULT: "default",
    WARNING: "warning"

};

const Notifications = {
    addNotification,
    types
};

export default Notifications;