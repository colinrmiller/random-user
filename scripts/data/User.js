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
            return parsedResponse;
        });
};

// 1. Create a function to display the user information
// on the DOM with meaningful sections and semantic HTML.
// Do NOT include the user's login(that would be a silly idea).
// Be sure to include a picture. Also be sure to convert the date
// into a human readable format.
export const displayUser = () => {
    let userPicture, userName, userLocation, userBirthday, userEmail, userCell;
    // let userName;
    const user = getUser()
        .then((parsedResponse) => {
            const userData = parsedResponse.results[0];
            console.log("info", userData);
            userPicture = userData.picture.large;
            userName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
            userLocation = `${userData.location.city}, ${userData.location.state}. ${userData.location.country}`;
            userBirthday = `Born: ${readDate(userData.dob.date)} Age:${
                userData.dob.age
            }`;
            userEmail = userData.email;
            userCell = userData.cell;
        })
        .then(() => {
            const displayElement = document.getElementById("display-user");
            displayElement.innerHTML = `
            <section class="user__header">
                <div class="user__img">
                    <img src="${userPicture}" alt="${userName}'s picture">
                </div>
                <div class="user__name">
                    <h3> ${userName}</h3>
                </div>
            </section>
            <section class="user__info">
                <div class="user__location">
                    <p>${userLocation}</p>
                </div>
                <div class="user__birthday">
                    <p>${userBirthday}</p>
                </div>
                <div class="user__email">
                    <p>Email: ${userEmail}</p>
                </div>
                <div class="user__cell">
                    <p>Cell: ${userCell}</p>
                </div>
            </section>
            `;
        });
    // console.log(userPicture, userName);

    // displayELement.innerHTML = `
    // <section class="user__></section>
    // // `;
};

const readDate = (dateString) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const date = new Date(Date.parse(dateString));
    // .parse(dateString);
    var year = date.getFullYear();

    var month = months[date.getMonth()];

    var day = date.getDate();

    return `${month} ${day}, ${year} `;
};
