function login() {
    if (username.value === "admin" && password.value === "1234") {
        loginPage.style.display = "none";
        dashboard.style.display = "block";
        loadDashboard();
        startLiveUpdate();
    } else {
        loginError.innerText = "Invalid credentials";
    }
}

function logout() {
    location.reload();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

function loadDashboard() {
    renderCredits();
    networkStatusElem.innerText = networkStatus;
}

function renderCredits() {
    creditCards.innerHTML = "";
    creditBars.innerHTML = "";

    houses.forEach(h => {
        creditCards.innerHTML +=
            `<div class="card">
                <h3>House ${h.id}</h3>
                <p>${h.credits} Credits</p>
             </div>`;

        creditBars.innerHTML +=
            `<div class="bar">
                <div class="bar-fill" style="width:${h.credits}%">
                    House ${h.id}: ${h.credits}
                </div>
             </div>`;
    });
}

function startLiveUpdate() {
    setInterval(() => {
        houses.forEach(h => {
            h.credits += Math.floor(Math.random() * 3 - 1);
            if (h.credits < 0) h.credits = 0;
        });
        renderCredits();
    }, 3000);
}

const networkStatusElem = document.getElementById("networkStatus");
