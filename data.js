/************************************
 SMART MICROGRID – DATA LAYER
************************************/

/* ================================
 HOUSE ENERGY DATA
================================ */
const houseData = [
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

/* ================================
 DERIVED ENERGY BALANCE
================================ */
function getEnergyBalance(house) {
    return house.energyProduced - house.energyConsumed;
}

/* ================================
 P2P ENERGY TRADING LEDGER
================================ */
const tradingLedger = [
    {
        seller: "House 1",
        buyer: "House 2",
        energy: 8,
        credits: 16,
        timestamp: "10:32 AM"
    }
];

/* ================================
 MESH NETWORK DATA
================================ */
const meshNetwork = {
    nodes: ["House 1", "House 2", "House 3"],
    connections: [
        ["House 1", "House 2"],
        ["House 1", "House 3"],
        ["House 2", "House 3"]
    ],
    routing: {
        algorithm: "Breadth First Search (BFS)",
        activeRoute: "House 1 → House 3",
        faultTolerance: true,
        failedNode: null
    }
};

/* ================================
 AI SOLAR ENERGY PREDICTION DATA
================================ */
const aiPredictionData = [
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

/* ================================
 SYSTEM STATUS (EXPO VIEW)
================================ */
const systemStatus = {
    gridMode: "Decentralized",
    pricingModel: "Credit-based (2 credits / kWh)",
    aiModel: "Regression-based Solar Forecasting",
    communication: "Mesh Network",
    lastUpdated: new Date().toLocaleString()
};

