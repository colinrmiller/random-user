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
            // console.log(parsedResponse);
            return parsedResponse;
        });
};

export const displayRandomUser = () => {
    let userPicture, userName, userLocation, userBirthday, userEmail, userCell;
    // let userName;
    getUser().then((parsedResponse) => {
        const displayElement = document.getElementById("display-user");
        const userData = parsedResponse.results[0];
        // console.log("info", userData);
        userPicture = userData.picture.large;
        userName = `${userData.name.title}. ${userData.name.first} ${userData.name.last}`;
        userLocation = `${userData.location.city}, ${userData.location.state}. ${userData.location.country}`;
        userBirthday = `Born: ${readDate(userData.dob.date)} Age:${
            userData.dob.age
        }`;
        userEmail = userData.email;
        userCell = userData.cell;
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
