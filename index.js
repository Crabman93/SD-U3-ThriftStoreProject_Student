//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes

class Store{
    constructor(name, state, inventory, balance, expenses, profit, paidTax, salesTax){
        this.name = name;
        this.state = state;
        this.inventory = inventory;
        this.balance = balance;
        this.expenses = expenses;
        this.profit = profit;
        this.paidTax = paidTax;
        this.salesTax = salesTax;
    }
    static createStore(name, state, inventory, balance, expenses, profit, paidTax){
    let foundSalesTax = salesTax.find(objectState => state == objectState["state"]);
    let stateSalesTax = foundSalesTax["tax"];
    return new Store(name, state, inventory, balance, expenses, profit, paidTax, stateSalesTax);
    }

    addToInventory(newItem){

//Does the store have the budget to purchase the item?
if(newItem[purchasePrice] > this.balance) {
    console.log("Not enough Money for purchase!")
    return
}

//Does the item already exist? This should be tracked by a upc. see Product below for more details.

//If it already exists in inventory, simply update the quantity.

//There shouldn't be duplicated items with the same upc.

//If the item doesn't already exist, it should be added to inventory.

//A mark-up price should be set to a purchase price. This will be noted in Product
    }
}

class Product{
    constructor(upc, name, type, purchasePrice, quantity){
        this.upc = upc;
        this.name = name;
        this.type = type;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity;
    }
}

//! CREATE STORES
// Generate 3 different stores, each in a different state.
let storeOne = Store.createStore('storeOne', 'Vermont', [], 100, 0, 0, 0);
console.log(storeOne);

//! Inventory
let dogTreats = new Product(123, "milkBone", "Pet Supply", 10.00, 500)


//! Stocking

//* First Store

//* Second Store

//* Third Store

//! Selling

//* First Store

//* Second Store

//* Third Store

//! Testing
/* 
    Simply console log each store to check the completed details.
*/