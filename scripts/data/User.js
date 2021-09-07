export const getUser = () => {
    return fetch("https://randomuser.me/api", {
        headers: {
            Accept: "application/json",
            dataType: "json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((parsedResponse) => {
            console.log(parsedResponse);
        });
};
