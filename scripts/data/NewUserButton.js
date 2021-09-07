import { displayRandomUser } from "./User.js";

export const activateNewUserButton = () => {
    const buttonElem = document.getElementById("new-rand-user-button");
    document.addEventListener("click", (event) => {
        if (event.target.id == "new-rand-user-button") {
            displayRandomUser();
        }
    });
};
