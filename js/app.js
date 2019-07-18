// sources:
// - https://tinyurl.com/y23wphkm
// - https://youtu.be/jVx5aRcDoz4?t=162
// - https://tinyurl.com/ybnqdru5
//
// Nightclub:
// - https://gtaforums.com/topic/912818-business-knowledge-base-after-hours/page/4/?tab=comments#comment-1070339962
// - https://www.reddit.com/r/gtaonline/comments/91tyvu/nightclub_earnings_table_and_guide/
var myVueApp = new Vue({
    el: "#app",
    data: {
        lastUpdate: 0,      // epoch seconds of last update
        active: false,                   // should update the values?
        sellRemote: false,
        resupplyIdx: 0,
        resupplyValue: 0,
        businesses: [
            {
                name: "Bunker",
                editMode: false,
                stock: 100.0,  // current stock in units
                supplies: 1.0,  // current supplies bar in [0,1] percentage
                capacity: 100.0,  // max capacity in units
                resupplyCost: 75000.0,  // cost of resupplying if business is supply bar is empty
                resupplyUnits: 20.0,  // number of units in a full resupply.
                vehicles: [
                    // if units > # then the maximum number of vehicles is #
                    {units: 75, count: 4},
                    {units: 50, count: 3},
                    {units: 25, count: 3},
                    {units: 0, count: 1},
                ],
                upgrade: 3.0,  // index - which upgrade should be applied
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
            {
                name: "Coke",
                editMode: false,
                stock: 4.0,
                supplies: 0.0,
                capacity: 10.0,
                resupplyCost: 75000.0,
                resupplyUnits: 3.33333333333333333333,
                vehicles: [
                    {units: 6.0, count: 4},
                    {units: 2.5, count: 3},
                    {units: 1.5, count: 2},
                    {units: 0.0, count: 1},
                ],
                upgrade: 3.0,
                upgrades: [
                    {name: "None", mins: 50, unitPrice: 20000},
                    {name: "Equip", mins: 40, unitPrice: 24000},
                    {name: "Staff", mins: 40, unitPrice: 24000},
                    {name: "Equip+Staff", mins: 30, unitPrice: 28000},
                ]
            },
            {
                name: "Meth",
                editMode: false,
                stock: 0.0,
                supplies: 0.0,
                capacity: 20.0,
                resupplyCost: 75000.0,
                resupplyUnits: 6.66666666666666666667,
                vehicles: [
                    {units: 10000, count: 100}, // na
                ],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 30, unitPrice: 8500},
                    {name: "Equip", mins: 24, unitPrice: 10200},
                    {name: "Staff", mins: 24, unitPrice: 10200},
                    {name: "Equip+Staff", mins: 18, unitPrice: 11900},
                ]
            },
            {
                name: "Counterfeit cash",
                editMode: false,
                stock: 0.0,
                supplies: 0.0,
                capacity: 40.0,
                resupplyCost: 75000.0,
                resupplyUnits: 20.0,
                vehicles: [
                    {units: 10000, count: 100}, // na
                ],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 12, unitPrice: 3500},
                    {name: "Equip", mins: 10, unitPrice: 4200},
                    {name: "Staff", mins: 10, unitPrice: 4200},
                    {name: "Equip+Staff", mins: 8, unitPrice: 4900},
                ]
            },
            {
                name: "Weed",
                editMode: false,
                stock: 0.0,
                supplies: 0.0,
                capacity: 80.0,
                resupplyCost: 75000.0,
                resupplyUnits: 40.0,
                vehicles: [
                    {units: 10000, count: 100}, // na
                ],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 6, unitPrice: 1500},
                    {name: "Equip", mins: 5, unitPrice: 1800},
                    {name: "Staff", mins: 5, unitPrice: 1800},
                    {name: "Equip+Staff", mins: 4, unitPrice: 2100},
                ]
            },
            {
                name: "Documents Forgery",
                editMode: false,
                stock: 0.0,
                supplies: 0.0,
                capacity: 60.0,
                resupplyCost: 75000.0,
                resupplyUnits: 60.0,
                vehicles: [
                    {units: 10000, count: 100}, // na
                ],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 5, unitPrice: 1000},
                    {name: "Equip", mins: 4, unitPrice: 1200},
                    {name: "Staff", mins: 4, unitPrice: 1200},
                    {name: "Equip+Staff", mins: 3, unitPrice: 1400},
                ]
            },
            //
            {
                name: "Nightclub - South American Imports (Coke)",
                editMode: false,
                type: "nightclub",
                hasTech: true,
                stock: 0.0,
                supplies: 0.0,  // should always be 1 for NC, as long as there's a technician
                capacity: 10.0, // depends on how many floors we have in the nc. max 10, min 2
                resupplyCost: 0.0,
                resupplyUnits: 10.0, // doesn't matter
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 240, unitPrice: 20000},
                    {name: "Equipment", mins: 120, unitPrice: 20000},
                ]
            },
            {
                name: "Nightclub - Cargo/Shipments (Warehouse/Hangar)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 50.0,
                resupplyCost: 0.0,
                resupplyUnits: 50.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 140, unitPrice: 10000},
                    {name: "Equipment", mins: 70, unitPrice: 10000},
                ]
            },
            {
                name: "Nightclub - Pharmaceutical Research (Meth)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 20.0,
                resupplyCost: 0.0,
                resupplyUnits: 20.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 120, unitPrice: 8500},
                    {name: "Equipment", mins: 60, unitPrice: 8500},
                ]
            },
            {
                name: "Nightclub - Sporting Goods (Bunker)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 100.0,
                resupplyCost: 0.0,
                resupplyUnits: 100.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 80, unitPrice: 5000},
                    {name: "Equipment", mins: 40, unitPrice: 5000},
                ]
            },
            {
                name: "Nightclub - Cash Creation (Cash)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 40.0,
                resupplyCost: 0.0,
                resupplyUnits: 40.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 60, unitPrice: 3500},
                    {name: "Equipment", mins: 30, unitPrice: 3500},
                ]
            },
            {
                name: "Nightclub - Organic Produce (Weed)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 80.0,
                resupplyCost: 0.0,
                resupplyUnits: 80.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 40, unitPrice: 1500},
                    {name: "Equipment", mins: 20, unitPrice: 1500},
                ]
            },
            {
                name: "Nightclub - Printing and Copying (Documents)",
                editMode: false,
                type: "nightclub",
                stock: 0.0,
                supplies: 0.0,
                capacity: 60.0,
                resupplyCost: 0.0,
                resupplyUnits: 60.0,
                vehicles: [{units: 0, count: 1}],
                upgrade: 0,
                upgrades: [
                    {name: "None", mins: 30, unitPrice: 1000},
                    {name: "Equipment", mins: 15, unitPrice: 1000},
                ]
            },


        ],
    },
    methods: {
        toggle: function (todo) {
            todo.done = !todo.done
        },
        // calculates remaining time in seconds to complete the full stock, assuming there
        // are enough supplies.
        etaFullStock: function (biz) {
            return this.secsToProduce(biz.capacity - biz.stock, biz);
        },
        // calculates remaining time in seconds to consume the current supplies, assuming
        // the business is active, and the stock is not full.
        etaResupply: function (biz) {
            return this.secsToProduce(biz.supplies * biz.resupplyUnits, biz);
        },
        // calculates how much time is required to produce the given units in seconds.
        secsToProduce: function (units, biz) {
            var activeUpgrade = biz.upgrades[biz.upgrade];
            return units * activeUpgrade.mins * 60;
        },
        // pauses the game, thefore the computation of values
        pauseGame: function () {
            this.active = false;
        },
        // activates the game, thefore the computation of values
        activateGame: function () {
            this.active = true;
            this.lastUpdate = (new Date()).getTime() / 1000;
        },
        // changes the business upgrade
        changeBiz: function (index, delta) {
            var biz = this.businesses[index];
            biz.upgrade += delta;
            if (biz.upgrade >= biz.upgrades.length) {
                biz.upgrade = biz.upgrades.length - 1;
            }
            if (biz.upgrade < 0) {
                biz.upgrade = 0
            }
        },
        // changes stock value of a business by a percertage of the max stock
        changeStock: function (index, delta) {
            var biz = this.businesses[index];
            biz.stock += delta * biz.capacity;
            if (biz.stock > biz.capacity) {
                biz.stock = biz.capacity;
            }
            if (biz.stock < 0) {
                biz.stock = 0
            }
        },
        // changes supplies value of a business by a percertage
        changeSupplies: function (index, delta) {
            var biz = this.businesses[index];
            biz.supplies += delta;
            if (biz.supplies > 1) {
                biz.supplies = 1;
            }
            if (biz.supplies < 0) {
                biz.supplies = 0;
            }
        },
        // recalculates the stock and supplies values of the business
        tick: function () {
            // check if game is active or not
            if (!this.active) {
                return;
            }
            var now = (new Date()).getTime() / 1000;  // epoch secs
            var deltaTime = now - this.lastUpdate;

            if (deltaTime < 0.5) {
                return;
            }

            this.lastUpdate = now;

            // deltaTime = deltaTime * 120; // debugger: time multiplier

            for (var i = 0; i < this.businesses.length; i++) {
                var biz = this.businesses[i];
                var upgrade = biz.upgrades[biz.upgrade];

                if (biz.type === 'nightclub') {
                    biz.supplies = biz.hasTech ? biz.capacity : 0;
                }
                // calculate if business is active or not
                if (biz.supplies == 0 || biz.stock == biz.capacity || biz.editMode) {
                    continue;
                }

                var unitsPerSec = 1 / (upgrade.mins * 60);
                var deltaUnits = deltaTime * unitsPerSec;

                // check we don't exceed the stock limit
                if (biz.stock + deltaUnits > biz.capacity) {
                    deltaUnits = biz.capacity - biz.stock;
                }

                // check we don't consume more than is available
                if (biz.supplies * biz.resupplyUnits - deltaUnits < 0) {
                    deltaUnits = biz.supplies * biz.resupplyUnits;
                }

                biz.stock = biz.stock + deltaUnits;
                if (biz.stock > biz.capacity) {
                    biz.stock = biz.capacity;
                }
                biz.supplies = biz.supplies - deltaUnits / biz.resupplyUnits;
                if (biz.supplies < 0.000001) {
                    biz.supplies = 0;
                }
            }
        },
        // show resupply dialog
        showChangeSuppliesDialog: function (index) {
            this.resupplyIdx = index;
            $('#resupplyValueTxt').val("" + (100 * this.businesses[index].supplies));
            $('#resupplyModal').modal();
        },
        // confirm resupply. resupply was accepted
        confirmSuppliesDialog: function () {
            var biz = this.businesses[this.resupplyIdx];
            biz.supplies = parseFloat($('#resupplyValueTxt').val() / 100);
            if (biz.supplies > 1) {
                biz.supplies = 1;
            }
            if (biz.supplies < 0) {
                biz.supplies = 0;
            }
            $('#resupplyModal').modal('hide');
        },
        bizHeader: function (biz) {
            var threshold = 15 * 60; // 15 minutes
            var isActive = biz.supplies > 0 && biz.stock < biz.capacity;
            var isWarning = this.etaFullStock(biz) < threshold || this.etaResupply(biz) < threshold ;
            if (!isActive) {
                return ['text-light', 'bg-danger'];
            } else if (isWarning) {
                return ['text-dark', 'bg-warning'];
            } else {
                return ['text-light', 'bg-success'];
            }

        },
        floor: function (x) {
            return Math.floor(x);
        },

        handleChangeStock: function (target, biz) {
            var number = Number.parseFloat(target.value);
            if (Number.isNaN(number)) {
                biz.stock = 0;
                return;
            }
            biz.stock = biz.capacity * number / 100;
            if (biz.stock > biz.capacity) {
                biz.stock = biz.capacity;
            } else if (biz.stock < 0) {
                biz.stock = 0;
            }
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

        vehicles: function(biz) {
            for (var i=0; i < biz.vehicles.length; i++) {
                if (biz.stock >= biz.vehicles[i].units) {
                    return biz.vehicles[i].count;
                }
            }
            return "N/A";
        }
    },
    computed: {

    },
    filters: {
        // formats seconds to human format
        formatTime: function (secs) {
            var acum = "";
            if (secs > 3600) {
                // render hours
                var hours = Math.floor(secs / 3600);
                acum = acum + "" + hours + "h "
                secs = secs - hours * 3600;
            }
            if (secs > 60) {
                // render minutes
                var mins = Math.floor(secs / 60);
                acum = acum + "" + mins + "m "
                secs = secs - mins * 60;
            }
            // render seconds
            secs = Math.floor(secs);
            if (acum == "" && secs > 0) {
                acum = acum + "" + secs + "s"
            }
            return acum;
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
            return formatter.format(number);

        }

    },
});

setInterval(
    function () {
        myVueApp.tick();
    },
    1000
);
