class Machine {
  constructor() {
    this.snacks = []
    this.balance = 0;
    this.availableChange = {};
    this.acceptedBills = [500, 100, 50, 20, 10];
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
    if (!this.acceptedBills.includes(amount)) {
      return "Unacceptable bill!";
    }

    this.balance += amount;

    if (this.availableChange[amount] == undefined) {
      this.availableChange[amount] = 0;
    }

    this.availableChange[amount]++;

    return `You have deposited Rs ${this.balance}`;
  }

  selectItem(name) {
    var output = { item: name, change: [] };
    var snack = this.snacks.filter(x => x.name == name)[0];

    if (snack == undefined) {
      return "The item you selected is unavailable";
    }
    
    if (this.balance < snack.price) {
      var difference = snack.price - this.balance;
      return `Your deposit is insufficient.  Please add Rs ${difference} for this item`;
    }

    if (this.balance > snack.price) {
      var difference = this.balance - snack.price;

      for (var i in this.acceptedBills) {
        var bill = this.acceptedBills[i];

        if (this.availableChange[bill] == undefined) {
          continue;
        }

        while (difference / bill >= 1) {
          difference -= bill;
          this.availableChange[bill]--;
          this.balance -= bill;
          output.change.push(bill);
        }
      }

      if (difference != 0) {
        return 'Cannot return proper change.  Please choose another item or cancel the transaction'
      }
    }

    return output;
  }

  cancel() {
    var output = {change: []}
    var amount = this.balance;

    for (var i in this.acceptedBills) {
      var bill = this.acceptedBills[i];

      if (this.availableChange[bill] == undefined) {
        continue;
      }

      while (amount / bill >= 1) {
        amount -= bill;
        this.availableChange[bill]--;
        this.balance -= bill;
        output.change.push(bill);
      }
    }

    if (amount != 0) {
      return 'Cannot return proper change.  Please choose another item or cancel the transaction'
    }

    return output
  }
}

module.exports = Machine