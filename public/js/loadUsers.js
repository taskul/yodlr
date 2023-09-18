const userTable = document.getElementById("users");

window.addEventListener('load', async (e) => {
    await getUsers()
    const statusButtons = document.querySelectorAll(".state-status")
    statusButtons.forEach((btn, idx) => {
        btn.addEventListener('click', async (e) => {
            if (e.target.textContent === 'Activate') {
                const tableRow = e.target.parentNode.parentNode.getElementsByTagName("td")
                const userId = tableRow[0].textContent;
                const response = await axios.put(`http://localhost:3000/users/${userId}`, { state: "deactivated" })
                if (response) {
                    tableRow[4].textContent = "active"
                    e.target.textContent = 'Deactivate'
                }
            } else if (e.target.textContent === 'Deactivate') {
                const tableRow = e.target.parentNode.parentNode.getElementsByTagName("td")
                const userId = tableRow[0].textContent;
                const response = await axios.put(`http://localhost:3000/users/${userId}`, { state: "deactivated" })
                if (response) {
                    tableRow[4].textContent = "deactivated";
                    e.target.textContent = 'Activate';
                }
            }
        })
    })
})


async function getUsers() {
    const response = await axios.get('http://localhost:3000/users')
    response.data.forEach(user => {
        const tr = document.createElement('tr');

        const tdUserId = document.createElement('td');
        tdUserId.textContent = user.id;
        tdUserId.setAttribute("id", user.id)
        tr.append(tdUserId);

        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = user.firstName;
        tr.append(tdFirstName);

        const tdLastName = document.createElement('td');
        tdLastName.textContent = user.lastName;
        tr.append(tdLastName);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        tr.append(tdEmail);

        const tdState = document.createElement('td');
        tdState.textContent = user.state;
        tr.append(tdState);

        const tdStateManagement = document.createElement('td');
        const stateButton = document.createElement("button")
        stateButton.classList.add("state-status")

        stateButton.textContent = user.state === "active" ? "Deactivate" : "Activate"
        tdStateManagement.append(stateButton)
        tr.append(tdStateManagement);
        userTable.append(tr)
    });

};




