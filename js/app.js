// sources:
// - https://tinyurl.com/y23wphkm
// - https://youtu.be/jVx5aRcDoz4?t=162
// - https://tinyurl.com/ybnqdru5
// - https://gta.fandom.com/wiki/The_Open_Road
//
// Nightclub:
// - https://gtaforums.com/topic/912818-business-knowledge-base-after-hours/page/4/?tab=comments#comment-1070339962
// - https://www.reddit.com/r/gtaonline/comments/91tyvu/nightclub_earnings_table_and_guide/

var db = {
    businesses: {
        "bk": {
            id: "bk",
            name: "Bunker",
            type: "regular",
            capacity: 100.0,  // max capacity in units
            resupplyCost: 75000.0,  // cost of resupplying if business is supply bar is empty
            resupplyUnits: 20.0,    // number of units in a full resupply.
            vehicles: [
                // if units > # then the maximum number of vehicles is #
                {units: 75, count: 4},
                {units: 50, count: 3},
                {units: 25, count: 3},
                {units: 0, count: 1},
            ],
            upgrades: [
                // name: name of the upgrade
                // mins: minutes required to produce one unit
                // unitPrice: sale price per unit
                {name: "None", mins: 10, unitPrice: 5000},
                {name: "Equip", mins: 8.5, unitPrice: 6000},
                {name: "Staff", mins: 8.5, unitPrice: 6000},
                {name: "Equip+Staff", mins: 7, unitPrice: 7000},
            ]
        },
        "ck": {
            id: "ck",
            name: "Coke",
            type: "regular",
            capacity: 10.0,
            resupplyCost: 75000.0,
            resupplyUnits: 4,
            vehicles: [
                {units: 6.0, count: 4},
                {units: 2.5, count: 3},
                {units: 1.5, count: 2},
                {units: 0.0, count: 1},
            ],
            upgrades: [
                {name: "None", mins: 50, unitPrice: 20000},
                {name: "Equip", mins: 40, unitPrice: 24000},
                {name: "Staff", mins: 40, unitPrice: 24000},
                {name: "Equip+Staff", mins: 30, unitPrice: 28000},
            ]
        },
        "me": {
            id: "me",
            name: "Meth",
            type: "regular",
            capacity: 20.0,
            resupplyCost: 75000.0,
            resupplyUnits: 8,
            vehicles: [
                {units: 10000, count: 100}, // na
            ],
            upgrades: [
                {name: "None", mins: 30, unitPrice: 8500},
                {name: "Equip", mins: 24, unitPrice: 10200},
                {name: "Staff", mins: 24, unitPrice: 10200},
                {name: "Equip+Staff", mins: 18, unitPrice: 11900},
            ]
        },
        "cc": {
            id: "cc",
            name: "Counterfeit cash",
            shortName: "Cash",
            type: "regular",
            capacity: 40.0,
            resupplyCost: 75000.0,
            resupplyUnits: 20.0,
            vehicles: [
                {units: 10000, count: 100}, // na
            ],
            upgrades: [
                {name: "None", mins: 12, unitPrice: 3500},
                {name: "Equip", mins: 10, unitPrice: 4200},
                {name: "Staff", mins: 10, unitPrice: 4200},
                {name: "Equip+Staff", mins: 8, unitPrice: 4900},
            ]
        },
        "we": {
            id: "we",
            name: "Weed",
            type: "regular",
            capacity: 80.0,
            resupplyCost: 75000.0,
            resupplyUnits: 50.0,
            vehicles: [
                {units: 10000, count: 100}, // na
            ],
            upgrades: [
                {name: "None", mins: 6, unitPrice: 1500},
                {name: "Equip", mins: 5, unitPrice: 1800},
                {name: "Staff", mins: 5, unitPrice: 1800},
                {name: "Equip+Staff", mins: 4, unitPrice: 2100},
            ]
        },
        "df": {
            id: "df",
            name: "Documents Forgery",
            shortName: "Docs",
            type: "regular",
            capacity: 60.0,
            resupplyCost: 75000.0,
            resupplyUnits: 50.0,
            vehicles: [
                {units: 10000, count: 100}, // na
            ],
            upgrades: [
                {name: "None", mins: 5, unitPrice: 1000},
                {name: "Equip", mins: 4, unitPrice: 1200},
                {name: "Staff", mins: 4, unitPrice: 1200},
                {name: "Equip+Staff", mins: 3, unitPrice: 1400},
            ]
        },
        //
        "nc-ck": {
            id: "nc-ck",
            name: "Nightclub - South American Imports (Coke)",
            type: "nightclub",
            capacity: 10.0, // depends on how many floors we have in the nc. max 10, min 2
            resupplyCost: 0.0,
            resupplyUnits: 10.0, // does not matter
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 240, unitPrice: 20000},
                {name: "Equipment", mins: 120, unitPrice: 20000},
            ]
        },
        "nc-ca": {
            id: "nc-ca",
            name: "Nightclub - Cargo/Shipments (Warehouse/Hangar)",
            type: "nightclub",
            capacity: 50.0,
            resupplyCost: 0.0,
            resupplyUnits: 50.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 140, unitPrice: 10000},
                {name: "Equipment", mins: 70, unitPrice: 10000},
            ]
        },
        "nc-me": {
            id: "nc-me",
            name: "Nightclub - Pharmaceutical Research (Meth)",
            type: "nightclub",
            capacity: 20.0,
            resupplyCost: 0.0,
            resupplyUnits: 20.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 120, unitPrice: 8500},
                {name: "Equipment", mins: 60, unitPrice: 8500},
            ]
        },
        "nc-bk": {
            id: "nc-bk",
            name: "Nightclub - Sporting Goods (Bunker)",
            type: "nightclub",
            capacity: 100.0,
            resupplyCost: 0.0,
            resupplyUnits: 100.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 80, unitPrice: 5000},
                {name: "Equipment", mins: 40, unitPrice: 5000},
            ]
        },
        "nc-cc": {
            id: "nc-cc",
            name: "Nightclub - Cash Creation (Cash)",
            type: "nightclub",
            capacity: 40.0,
            resupplyCost: 0.0,
            resupplyUnits: 40.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 60, unitPrice: 3500},
                {name: "Equipment", mins: 30, unitPrice: 3500},
            ]
        },
        "nc-we": {
            id: "nc-we",
            name: "Nightclub - Organic Produce (Weed)",
            type: "nightclub",
            capacity: 80.0,
            resupplyCost: 0.0,
            resupplyUnits: 80.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 40, unitPrice: 1500},
                {name: "Equipment", mins: 20, unitPrice: 1500},
            ]
        },
        "nc-df": {
            id: "nc-df",
            name: "Nightclub - Printing and Copying (Documents)",
            type: "nightclub",
            capacity: 60.0,
            resupplyCost: 0.0,
            resupplyUnits: 60.0,
            vehicles: [{units: 0, count: 1}],
            upgrades: [
                {name: "None", mins: 30, unitPrice: 1000},
                {name: "Equipment", mins: 15, unitPrice: 1000},
            ]
        },
    },
};

var createInternalState = function () {
    var businesses = {};
    var businessesKeys =  Object.keys(db.businesses);
    for (var i=0; i < businessesKeys.length; i++) {
        var key = businessesKeys[i];
        businesses[key] = {
            'stock-edit': false,
            'stock-edit-value': 0,
            'supplies-edit': false,
            'supplies-edit-value': 0,
        };
    };
    return {
        businesses: businesses,
        editBusinesses: false,
    };
};

var createBusinesses = function () {
    var businessesKeys = [
        'bk',
        'ck',
        'me',
        'cc',
        'we',
        'df',
        'nc-ck',
        'nc-ca',
        'nc-me',
        'nc-bk',
        'nc-cc',
        'nc-we',
        'nc-df',
    ];
    var businesses = [];
    for (var i=0; i < businessesKeys.length; i++) {
        var key = businessesKeys[i];
        businesses.push({
            id: key,
            active: true,
            upgrade: 0,
            stock: 0,
            supplies: 0,
        });
    };
    return businesses;
}

var router = new VueRouter({
    mode: 'history',
    routes: []
});

var myVueApp = new Vue({
    router: router,
    el: "#app",
    data: {
        db: db,
        internalState: createInternalState(),
        externalState: {
            active: false,      // should update the values?
            lastUpdate: 0,      // epoch seconds of last update
            sellRemote: false,
            detailed: false,
            businesses: createBusinesses(),
        }
    },
    methods: {
        // calculates remaining time in seconds to complete the full stock, assuming there
        // are enough supplies.
        etaFullStock: function (biz) {
            return this.secsToProduce(this.db.businesses[biz.id].capacity * (1 - biz.stock/5), biz);
        },
        // calculates remaining time in seconds to consume the current supplies, assuming
        // the business is active, and the stock is not full.
        etaResupply: function (biz) {
            return this.secsToProduce(this.db.businesses[biz.id].resupplyUnits *  biz.supplies / 5, biz);
        },
        // calculates how much time is required to produce the given units in seconds.
        secsToProduce: function (units, biz) {
            var activeUpgrade = db.businesses[biz.id].upgrades[biz.upgrade];
            return units * activeUpgrade.mins * 60;
        },
        // pauses the game, thefore the computation of values
        pauseGame: function () {
            this.externalState.active = false;
        },
        // activates the game, thefore the computation of values
        activateGame: function () {
            this.externalState.active = true;
            this.externalState.lastUpdate = (new Date()).getTime() / 1000;
        },
        // recalculates the stock and supplies values of the business
        tick: function () {
            // check if game is active or not
            if (!this.externalState.active) {
                return;
            }
            var now = (new Date()).getTime() / 1000;  // epoch secs
            var deltaTime = now - this.externalState.lastUpdate;

            if (deltaTime < 0.5) {
                return;
            }

            this.externalState.lastUpdate = now;

            // deltaTime = deltaTime * 120; // debugger: time multiplier

            for (var i = 0; i < this.externalState.businesses.length; i++) {
                var biz = this.externalState.businesses[i];
                var bizDb = this.db.businesses[biz.id];
                var upgrade = bizDb.upgrades[biz.upgrade];

                if (bizDb.type === 'nightclub') {
                    biz.supplies = biz.active ? 5 : 0;
                }

                if (biz.resupply) {
                    biz.resupplyTimer = biz.resupplyTimer - deltaTime;
                    if (biz.resupplyTimer < 0) {
                        biz.resupply = false;
                        biz.supplies = 5;
                    }
                }


                // calculate if business is active or not
                if (biz.supplies <= 0 || biz.stock >= 5) {
                    continue;
                }

                var unitsPerSec = 1 / (upgrade.mins * 60);
                var deltaUnits = deltaTime * unitsPerSec;

                var bizStockUnits = bizDb.capacity * biz.stock / 5;

                // check we don't exceed the stock limit
                if (bizStockUnits + deltaUnits > bizDb.capacity) {
                    deltaUnits = bizDb.capacity - bizStockUnits;
                }

                // check we don't consume more than is available
                if (bizDb.resupplyUnits * biz.supplies / 5 - deltaUnits < 0) {
                    deltaUnits = bizDb.resupplyUnits * biz.supplies / 5;
                }

                biz.stock = biz.stock + 5 * deltaUnits / bizDb.capacity;
                if (biz.stock > bizDb.capacity) {
                    biz.stock = 5;
                }
                biz.supplies = biz.supplies - 5 * deltaUnits / bizDb.resupplyUnits;
                if (biz.supplies < 0.000001) {
                    biz.supplies = 0;
                }
            }
        },
        bizHeader: function (biz) {
            var threshold = 15 * 60; // 15 minutes
            var isActive = biz.supplies > 0 && biz.stock < 5;
            var isWarning = this.etaFullStock(biz) < threshold || this.etaResupply(biz) < threshold ;
            if (!isActive) {
                return ['text-light', 'bg-danger'];
            } else if (isWarning) {
                return ['text-dark', 'bg-warning'];
            } else {
                return [];
            }

        },
        floor: function (x) {
            return Math.floor(x);
        },

        vehicles: function(biz) {
            for (var i=0; i < biz.vehicles.length; i++) {
                if (biz.stock >= biz.vehicles[i].units) {
                    return biz.vehicles[i].count;
                }
            }
            return "N/A";
        },

        handleChangeSupplies: function (target, biz) {
            var number = Number.parseFloat(target.value);
            if (Number.isNaN(number)) {
                biz.supplies = 0;
                return;
            }
            biz.supplies = number / 100;
            if (biz.supplies > 1) {
                biz.supplies = 1;
            } else if (biz.supplies < 0) {
                biz.supplies = 0;
            }
        },

        validateBars: function (bars) {
            if (Number.isNaN(bars)) {
                return 0;
            }
            if (bars < 0) {
                return 0;
            }
            if (bars > 5) {
                return 5;
            }

            return bars;
        },

        editBiz: function (biz, attr) {
            this.internalState.businesses[biz.id][attr + '-edit'] = true;
            this.internalState.businesses[biz.id][attr + '-edit-value'] = Math.round(biz[attr] * 10) / 10;
            this.internalState.businesses[biz.id][attr + '-edit-saved'] = biz[attr];
            var callerRefs = this.$refs;
            setTimeout(function () {
                callerRefs['txt-' + attr+ '-edit-' + biz.id][0].focus();
            });

        },

        acceptBizChange: function (biz, attr) {
            this.internalState.businesses[biz.id][attr + '-edit'] = false;
            biz[attr] = this.validateBars(this.internalState.businesses[biz.id][attr + '-edit-value']);
        },

        cancelBizChange: function (biz, attr) {
            this.internalState.businesses[biz.id][attr + '-edit'] = false;
            biz[attr] = this.internalState.businesses[biz.id][attr + '-edit-saved'];
        },

        resupply: function (biz) {
            Vue.set(biz, 'resupply', true);
            Vue.set(biz, 'resupplyTimer', 10 * 60);  // 10 mins
        },

        saveState: function () {
            this.$router.replace({
                path: "?q=" + JSON.stringify(this.externalState),
            });
        }
    },
    watch: {
    },
    computed: {

    },
    filters: {
        // formats seconds to human format
        formatTime: function (secs) {
            var hours = 0;
            var mins = 0;
            if (secs > 3600) {
                hours = Math.floor(secs / 3600);
                secs = secs - hours * 3600;
            }
            if (secs > 60) {
                mins = Math.floor(secs / 60);
                secs = Math.floor(secs - mins * 60);
            }
            secs = Math.floor(secs);

            if (hours > 0) {
                return hours + ":" + ("0" + mins).slice(-2);
            }
            if (mins > 0) {
                return  "" + mins;
            }
            if (secs > 0) {
                return secs + "s"
            }
            return "";
        },

        // rounds a number to the given amount of decimals
        round: function (number, dec) {
            // return number.toFixed(dec);
            var r = Math.pow(10, dec);
            return Math.round(number * r) / r;
        },

        orDefault: function(value, def) {
            if (!value) {
                return def;
            }
            return value;
        },

        money: function(number) {
            var formatter = new Intl.NumberFormat('en-US', {
                // style: 'decimal',
                currency: 'USD',
                minimumFractionDigits: 0
            });
            return (Math.floor(number / 100) / 10) + "K";
            // return formatter.format(number);
        }

    },
    mounted: function() {
        var query = this.$route.query.q
        if (!query || query === "") {
            return;
        }
        this.externalState = JSON.parse(query);
        this.externalState.active = false;
    },
});

setInterval(
    function () {
        myVueApp.tick();
    },
    1000
);

myVueApp.$watch('externalState', function (newState, oldState) {
    this.saveState();
}, {
    deep: true
});