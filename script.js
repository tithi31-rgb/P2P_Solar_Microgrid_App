/*******************************
 BASIC AUTH (NO CAPTCHA)
********************************/

function login() {
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();

    if (!u || !p) {
        showError("⚠️ Please fill all fields");
        return;
    }

    // DEMO CREDENTIALS
    if (u === "solar" && p === "6169") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("loginError").innerText = "";
        showTab("overview"); // default tab
    } else {
        showError("❌ Invalid username or password");
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

function showError(msg) {
    document.getElementById("loginError").innerText = msg;
}

/*******************************
 TAB SYSTEM
********************************/
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });

    // Show selected tab
    document.getElementById(tabId).style.display = "block";

    // Load data for selected tab
    switch (tabId) {
        case "overview":
            loadOverview();
            break;
        case "surplus":
            loadSurplus();
            break;
        case "trading":
            loadTrading();
            break;
        case "mesh":
            loadMesh();
            break;
        case "ai":
            loadAI();
            break;
    }
}

/*******************************
 OVERVIEW TAB
********************************/
function loadOverview() {
    let html = "";

    houses.forEach(h => {
        const balance = h.energyProduced - h.energyConsumed;
        html += `
            <div class="card">
                <h3>House ${h.id}</h3>
                <p>Energy Produced: ${h.energyProduced} kWh</p>
                <p>Energy Consumed: ${h.energyConsumed} kWh</p>
                <p><b>Balance: ${balance} kWh</b></p>
                <p>Credits: ${h.credits}</p>
            </div>
        `;
    });

    document.getElementById("overviewCards").innerHTML = html;
}

/*******************************
 SURPLUS / DEFICIT TAB
********************************/
function loadSurplus() {
    let html = "<ul>";

    houses.forEach(h => {
        const balance = h.energyProduced - h.energyConsumed;
        html += `
            <li>
                House ${h.id} :
                ${balance > 0
                    ? "🟢 Surplus +" + balance + " kWh"
                    : "🔴 Deficit " + balance + " kWh"}
            </li>
        `;
    });

    html += "</ul>";
    document.getElementById("surplusData").innerHTML = html;
}

/*******************************
 P2P TRADING TAB
********************************/
function loadTrading() {
    const t = tradingInfo.details;

    document.getElementById("tradeStatus").innerHTML = `
        <p><b>Status:</b> ${tradingInfo.status}</p>
        <p><b>Seller:</b> ${t.seller}</p>
        <p><b>Buyer:</b> ${t.buyer}</p>
        <p><b>Energy Transferred:</b> ${t.energyTransferred} kWh</p>
        <p><b>Credits Exchanged:</b> ${t.creditsExchanged}</p>
        <p><b>Pricing Model:</b> ${tradingInfo.pricingModel}</p>
    `;
}

/*******************************
 MESH NETWORK TAB
********************************/
function loadMesh() {
    let html = `
        <p><b>Topology:</b> ${meshNetwork.topology}</p>
        <p><b>Routing Algorithm:</b> ${meshNetwork.routing.algorithm}</p>
        <p><b>Active Route:</b> ${meshNetwork.routing.activeRoute}</p>
        <p><b>Fault Tolerance:</b> ${meshNetwork.routing.faultTolerance}</p>
        <p><b>Failed Node:</b> ${meshNetwork.routing.failedNode}</p>
        <ul>
    `;

    meshNetwork.connections.forEach(link => {
        html += `<li>${link}</li>`;
    });

    html += "</ul>";

    document.getElementById("meshData").innerHTML = html;
}

/*******************************
 AI PREDICTION TAB
********************************/
function loadAI() {
    let html = `
        <table>
            <tr>
                <th>House</th>
                <th>Today (kWh)</th>
                <th>Tomorrow (kWh)</th>
                <th>Confidence</th>
            </tr>
    `;

    aiForecast.forEach(p => {
        html += `
            <tr>
                <td>${p.house}</td>
                <td>${p.today}</td>
                <td>${p.tomorrow}</td>
                <td>${p.confidence}</td>
            </tr>
        `;
    });

    html += "</table>";

    document.getElementById("aiData").innerHTML = html;
}

/*******************************
 THEME TOGGLE
********************************/
function toggleTheme() {
    document.body.classList.toggle("light");
}

