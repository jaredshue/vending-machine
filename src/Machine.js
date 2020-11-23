class Machine {
  constructor() {
    this.snacks = []
    this.balance = 0;
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }

  deposit(amount) {
    this.balance += amount;
    return `You have deposited Rs ${this.balance}`;
  }
}

module.exports = Machine