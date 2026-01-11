<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Smart P2P Microgrid Dashboard</title>

    <!-- PWA -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#1abc9c">

    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
</head>

<body class="dark">

<!-- ================= LOGIN PAGE ================= -->
<section id="loginPage" class="login-box">
    <h1>🔐 Smart Microgrid Secure Login</h1>

    <input id="username" type="text" placeholder="Username">
    <input id="password" type="password" placeholder="Password">

    <button onclick="login()">Login</button>

    <p id="loginError" class="error-text"></p>
    <p class="demo-note">Demo Login: <b>solar / 6169</b></p>
</section>

<!-- ================= DASHBOARD ================= -->
<section id="dashboard" style="display:none;">

    <!-- TOP BAR -->
    <header class="top-bar">
        <h1>🌞 Smart P2P Solar Microgrid</h1>
        <div class="top-actions">
            <button onclick="toggleTheme()">🌙 / ☀️</button>
            <button onclick="logout()">Logout</button>
        </div>
    </header>

    <!-- TAB NAVIGATION -->
    <nav class="tab-buttons">
        <button onclick="showTab('overview')">Overview</button>
        <button onclick="showTab('surplus')">Surplus / Deficit</button>
        <button onclick="showTab('trading')">P2P Trading</button>
        <button onclick="showTab('mesh')">Mesh Network</button>
        <button onclick="showTab('ai')">AI Prediction</button>
    </nav>

    <!-- ================= TAB CONTENT ================= -->

    <!-- OVERVIEW TAB -->
    <main id="overview" class="tab-content">
        <h2>📌 System Overview</h2>
        <div id="overviewCards" class="card-container"></div>
    </main>

    <!-- SURPLUS TAB -->
    <main id="surplus" class="tab-content">
        <h2>⚡ Energy Surplus & Deficit</h2>
        <div id="surplusData"></div>
    </main>

    <!-- TRADING TAB -->
    <main id="trading" class="tab-content">
        <h2>🔄 Peer-to-Peer Energy Trading</h2>
        <p id="tradeStatus"></p>
    </main>

    <!-- MESH TAB -->
    <main id="mesh" class="tab-content">
        <h2>📡 Mesh Network Communication</h2>
        <div id="meshData"></div>
    </main>

    <!-- AI TAB -->
    <main id="ai" class="tab-content">
        <h2>🤖 AI-Based Solar Energy Forecast</h2>
        <div id="aiData"></div>
    </main>

</section>

<!-- ================= SCRIPTS ================= -->
<script src="data.js"></script>
<script src="script.js"></script>

<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
</script>

</body>
</html>

