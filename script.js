/*******************************
 BASIC AUTH (NO CAPTCHA)
********************************/

function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (!u || !p) {
        showError("⚠️ Please fill all fields");
        return;
    }

    // DEMO CREDENTIALS
    if (u === "solar" && p === "6169") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        showTab("overview");
        document.getElementById("loginError").innerText = "";
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
    document.querySelectorAll(".tab-content").forEach(t => {
        t.style.display = "none";
    });

    document.getElementById(tabId).style.display = "block";

    if (tabId === "overview") loadOverview();
    if (tabId === "surplus") loadSurplus();
    if (tabId === "trading") loadTrading();
    if (tabId === "mesh") loadMesh();
    if (tabId === "ai") loadAI();
}

/*******************************
 ENERGY DATA (SIMULATED)
********************************/
const houses = [
    { id: 1, produced: 18, consumed: 10, credits: 116 },
    { id: 2, produced: 6, consumed: 14, credits: 84 },
    { id: 3, produced: 12, consumed: 9, credits: 100 }
];

/*******************************
 OVERVIEW TAB
********************************/
function loadOverview() {
    let html = "";
    houses.forEach(h => {
        const bal = h.produced - h.consumed;
        html += `
        <div class="card">
            <h3>House ${h.id}</h3>
            <p>Energy Balance: <b>${bal} kWh</b></p>
            <p>Credits: <b>${h.credits}</b></p>
        </div>`;
    });
    document.getElementById("overviewCards").innerHTML = html;
}

/*******************************
 SURPLUS / DEFICIT TAB
********************************/
function loadSurplus() {
    let html = "<ul>";
    houses.forEach(h => {
        const bal = h.produced - h.consumed;
        html += `<li>
            House ${h.id} → 
            ${bal > 0 ? "🟢 Surplus +" + bal : "🔴 Deficit " + bal} kWh
        </li>`;
    });
    html += "</ul>";
    document.getElementById("surplusData").innerHTML = html;
}

/*******************************
 P2P TRADING TAB
********************************/
function loadTrading() {
    document.getElementById("tradeStatus").innerText =
        "House 1 transferred 8 kWh → House 2 (16 Credits)";
}

/*******************************
 MESH NETWORK TAB
********************************/
function loadMesh() {
    document.getElementById("meshData").innerHTML = `
        <p>📡 Active Nodes: House 1, House 2, House 3</p>
        <p>🔁 Routing Algorithm: BFS</p>
        <p>✅ Shortest Route: House 1 → House 3</p>
        <p>🛡️ Fault Tolerant: YES</p>
    `;
}

/*******************************
 AI PREDICTION TAB
********************************/
function loadAI() {
    document.getElementById("aiData").innerHTML = `
        <table>
            <tr><th>House</th><th>Today</th><th>Tomorrow</th></tr>
            <tr><td>1</td><td>18.5</td><td>20.2</td></tr>
            <tr><td>2</td><td>6.8</td><td>8.1</td></tr>
            <tr><td>3</td><td>12.1</td><td>13.6</td></tr>
        </table>
        <p>Model: Regression-based ML using historical solar data</p>
    `;
}

/*******************************
 THEME
********************************/
function toggleTheme() {
    document.body.classList.toggle("dark");
}

