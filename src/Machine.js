class Machine {
  constructor() {
    this.snacks = []
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
    return `You have deposited Rs ${amount}`;
  }
}

module.exports = Machine