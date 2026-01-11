/************************************************
 SMART P2P MICROGRID – DATA LAYER
 (Simulated Backend for Expo Demo)
************************************************/

/* ============================================
 HOUSE ENERGY DATA
 Used in: Overview + Surplus/Deficit tabs
============================================ */
const houses = [
    {
        id: 1,
        energyProduced: 18,
        energyConsumed: 10,
        credits: 116
    },
    {
        id: 2,
        energyProduced: 6,
        energyConsumed: 14,
        credits: 84
    },
    {
        id: 3,
        energyProduced: 12,
        energyConsumed: 9,
        credits: 100
    }
];

/* Utility function */
function getEnergyBalance(house) {
    return house.energyProduced - house.energyConsumed;
}

/* ============================================
 P2P ENERGY TRADING DATA
 Used in: Trading tab
============================================ */
const tradingInfo = {
    status: "Trade Executed Successfully",
    details: {
        seller: "House 1",
        buyer: "House 2",
        energyTransferred: 8,   // kWh
        creditsExchanged: 16
    },
    pricingModel: "2 Credits per kWh"
};

/* ============================================
 MESH NETWORK DATA
 Used in: Mesh Network tab
============================================ */
const meshNetwork = {
    topology: "Fully Connected Mesh",
    nodes: ["House 1", "House 2", "House 3"],
    connections: [
        "House 1 ↔ House 2",
        "House 1 ↔ House 3",
        "House 2 ↔ House 3"
    ],
    routing: {
        algorithm: "Breadth First Search (BFS)",
        activeRoute: "House 1 → House 3",
        faultTolerance: "Enabled",
        failedNode: "None"
    }
};

/* ============================================
 AI SOLAR ENERGY FORECAST DATA
 Used in: AI Prediction tab
============================================ */
const aiForecast = [
    {
        house: "House 1",
        today: 18.5,
        tomorrow: 20.2,
        confidence: "High"
    },
    {
        house: "House 2",
        today: 6.8,
        tomorrow: 8.1,
        confidence: "Medium"
    },
    {
        house: "House 3",
        today: 12.1,
        tomorrow: 13.6,
        confidence: "High"
    }
];

/* ============================================
 SYSTEM META INFORMATION
 (Optional – for explanation)
============================================ */
const systemInfo = {
    gridType: "Decentralized Microgrid",
    energySource: "Solar PV",
    tradingMechanism: "Peer-to-Peer Credit-Based",
    communication: "Mesh Network",
    aiModel: "Regression-based Solar Forecasting",
    deployment: "Progressive Web App (PWA)",
    lastUpdated: new Date().toLocaleString()
};

