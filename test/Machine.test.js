const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  it('displays the amount depositted when depositting money', () => {
    const vendingMachine = new Machine()
    const displayMessage = "You have deposited Rs 100"
    expect(vendingMachine.deposit(100)).toEqual(displayMessage);
  })
})