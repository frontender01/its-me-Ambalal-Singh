<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StableCoin - The Cryptocurrency That Never Falls</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-slideUp {
            animation: slideUp 0.5s ease-out;
        }
        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }
        .price-stable {
            color: #10b981;
            text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
        }
        .page-content {
            display: none;
        }
        .page-content.active {
            display: block;
        }
        .nav-item {
            transition: all 0.3s ease;
        }
        .nav-item:hover {
            transform: translateY(-2px);
        }
        .trading-card {
            background: rgba(31, 41, 55, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(75, 85, 99, 0.3);
        }
        .order-book-item {
            transition: all 0.2s ease;
        }
        .order-book-item:hover {
            background: rgba(75, 85, 99, 0.2);
        }
        .trade-button {
            transition: all 0.3s ease;
            transform: scale(1);
        }
        .trade-button:hover {
            transform: scale(1.05);
        }
        .trade-button:active {
            transform: scale(0.95);
        }
        .balance-card {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
            border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .bottom-nav-item {
            transition: all 0.3s ease;
        }
        .bottom-nav-item.active {
            color: #10b981;
        }
        .bottom-nav-item:active {
            transform: scale(0.95);
        }
        .mobile-nav-item {
            transition: all 0.3s ease;
        }
        .mobile-nav-item.active {
            background-color: rgba(16, 185, 129, 0.2);
            color: #10b981;
        }
        @media (max-width: 768px) {
            .page-content {
                padding-bottom: 80px;
            }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
    <!-- Navigation -->
    <nav class="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span class="text-lg font-bold text-white">SC</span>
                    </div>
                    <span class="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">StableCoin</span>
                </div>

                <div class="hidden md:flex space-x-6">
                    <button onclick="showPage('dashboard')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-dashboard">Dashboard</button>
                    <button onclick="showPage('trading')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-trading">Trading</button>
                    <button onclick="showPage('about')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-about">About</button>
                    <button onclick="showPage('how-it-works')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-how">How It Works</button>
                    <button onclick="showPage('tokenomics')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-tokenomics">Tokenomics</button>
                    <button onclick="showPage('roadmap')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-roadmap">Roadmap</button>
                    <button onclick="showPage('team')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-team">Team</button>
                    <button onclick="showPage('contact')" class="nav-item text-gray-300 hover:text-white px-3 py-2 rounded-md" id="nav-contact">Contact</button>
                </div>

                <div class="flex items-center space-x-4">
                    <select id="languageSelect" onchange="changeLanguage()" class="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                        <option value="en">🇺🇸 English</option>
                        <option value="es">🇪🇸 Español</option>
                        <option value="fr">🇫🇷 Français</option>
                        <option value="de">🇩🇪 Deutsch</option>
                        <option value="zh">🇨🇳 中文</option>
                        <option value="ja">🇯🇵 日本語</option>
                        <option value="ar">🇸🇦 العربية</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="pt">🇧🇷 Português</option>
                        <option value="hi">🇮🇳 हिंदी</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>

    <!-- Dashboard Page -->
    <div id="dashboard" class="page-content active">
        <div class="container mx-auto px-4 py-8">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="flex items-center justify-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                        <span class="text-2xl font-bold text-white">SC</span>
                    </div>
                    <h1 class="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" id="main-title">
                        StableCoin
                    </h1>
                </div>
                <p class="text-xl text-gray-300" id="main-subtitle">The Cryptocurrency That Never Falls</p>
                <p class="text-sm text-gray-400 mt-2" id="main-description">Protected by Advanced Buyback Technology</p>
            </div>

            <!-- Price Display -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700">
                <div class="text-center">
                    <h2 class="text-2xl font-semibold mb-4" id="current-price-title">Current Price</h2>
                    <div class="text-6xl font-bold price-stable mb-4" id="currentPrice">$1.00</div>
                    <div class="flex items-center justify-center space-x-4">
                        <span class="text-green-400 flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            +0.00% (24h)
                        </span>
                        <span class="text-green-400 font-semibold" id="stable-indicator">STABLE</span>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <button onclick="showPage('trading')" class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <div class="flex items-center justify-center">
                        <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <div>
                            <div class="text-xl">Start Trading</div>
                            <div class="text-sm opacity-80">Buy & Sell StableCoin</div>
                        </div>
                    </div>
                </button>

                <button onclick="connectWallet()" class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <div class="flex items-center justify-center">
                        <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                        </svg>
                        <div>
                            <div class="text-xl">Connect Wallet</div>
                            <div class="text-sm opacity-80">Access Your Funds</div>
                        </div>
                    </div>
                </button>
            </div>

            <!-- Buyback System Status -->
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-semibold mb-4 flex items-center">
                        <div class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                        <span id="buyback-status-title">Buyback System Status</span>
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="system-status-label">System Status:</span>
                            <span class="text-green-400 font-semibold" id="system-status">ACTIVE</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="reserve-fund-label">Reserve Fund:</span>
                            <span class="text-white font-semibold" id="reserveFund">$10,000,000</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="transaction-fee-label">Transaction Fee:</span>
                            <span class="text-white font-semibold">0.10%</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="fees-collected-label">Fees Collected:</span>
                            <span class="text-green-400 font-semibold" id="feesCollected">$0</span>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-semibold mb-4" id="market-stats-title">Market Statistics</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="market-cap-label">Market Cap:</span>
                            <span class="text-white font-semibold" id="marketCap">$100,000,000</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="volume-24h-label">24h Volume:</span>
                            <span class="text-white font-semibold" id="volume24h">$5,000,000</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400" id="holders-label">Holders:</span>
                            <span class="text-white font-semibold" id="holders">25,847</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Trading Page -->
    <div id="trading" class="page-content">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8" id="trading-title">StableCoin Trading</h1>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Left Column: Chart and Quick Actions -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Price Chart -->
                    <div class="trading-card rounded-xl p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-xl font-semibold">SC/USD Chart</h2>
                            <div class="flex space-x-2">
                                <button onclick="setTimeframe('1H')" class="timeframe-btn bg-gray-700 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">1H</button>
                                <button onclick="setTimeframe('1D')" class="timeframe-btn bg-blue-600 text-white px-3 py-1 rounded text-sm">1D</button>
                                <button onclick="setTimeframe('1W')" class="timeframe-btn bg-gray-700 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">1W</button>
                                <button onclick="setTimeframe('1M')" class="timeframe-btn bg-gray-700 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">1M</button>
                            </div>
                        </div>
                        <div class="h-64">
                            <canvas id="priceChart"></canvas>
                        </div>
                    </div>

                    <!-- Quick Trade Actions -->
                    <div class="grid md:grid-cols-2 gap-4">
                        <button onclick="quickTrade('buy')" class="trade-button bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            <div class="text-lg">Quick Buy</div>
                            <div class="text-sm opacity-80">Market Price</div>
                        </button>

                        <button onclick="quickTrade('sell')" class="trade-button bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                            </svg>
                            <div class="text-lg">Quick Sell</div>
                            <div class="text-sm opacity-80">Market Price</div>
                        </button>
                    </div>
                </div>

                <!-- Right Column: Trading Interface -->
                <div class="space-y-6">
                    <!-- Balance Display -->
                    <div class="balance-card rounded-xl p-6">
                        <h3 class="text-lg font-semibold mb-4">Your Balance</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">USD:</span>
                                <span class="text-white font-semibold" id="usdBalance">$10,000.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">StableCoin:</span>
                                <span class="text-white font-semibold" id="scBalance">0 SC</span>
                            </div>
                            <div class="flex justify-between border-t border-gray-600 pt-3">
                                <span class="text-gray-400">Total Value:</span>
                                <span class="text-green-400 font-semibold" id="totalValue">$10,000.00</span>
                            </div>
                        </div>
                    </div>

                    <!-- Trading Form -->
                    <div class="trading-card rounded-xl p-6">
                        <div class="flex mb-4">
                            <button id="buyTab" onclick="setTradeType('buy')" class="flex-1 bg-green-600 text-white py-2 px-4 rounded-l-lg font-semibold">Buy</button>
                            <button id="sellTab" onclick="setTradeType('sell')" class="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded-r-lg font-semibold">Sell</button>
                        </div>

                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Order Type</label>
                                <select id="orderType" onchange="toggleOrderType()" class="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none">
                                    <option value="market">Market Order</option>
                                    <option value="limit">Limit Order</option>
                                </select>
                            </div>

                            <div id="priceInput" style="display: none;">
                                <label class="block text-gray-400 text-sm mb-2">Price (USD)</label>
                                <input type="number" id="limitPrice" step="0.001" placeholder="1.000" class="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none">
                            </div>

                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Amount (SC)</label>
                                <input type="number" id="tradeAmount" step="0.01" placeholder="0.00" class="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none">
                                <div class="flex justify-between mt-2">
                                    <button onclick="setPercentage(25)" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-400/20 transition-all duration-200 text-sm">25%</button>
                                    <button onclick="setPercentage(50)" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-400/20 transition-all duration-200 text-sm">50%</button>
                                    <button onclick="setPercentage(75)" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-400/20 transition-all duration-200 text-sm">75%</button>
                                    <button onclick="setPercentage(100)" class="text-blue-400 hover:text-blue-300 px-2 py-1 rounded hover:bg-blue-400/20 transition-