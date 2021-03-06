import { Tamago } from "./../src/tamagotchi.js";

describe ("Tamago", function () {
  let tamago;

  beforeEach (function () {
    tamago = new Tamago();
  });

  it ("should be an instance of the Tamago class", function () {
    expect(tamago).toEqual(jasmine.any(Tamago));
  });

  it ("should decrease the hunger level by 30", function () {
    tamago.feed();
    expect(tamago.hunger).toEqual(0);
  });

  it ("should decrease and increase levels appropriately", function () {
    tamago.timetick();
    expect(tamago.hunger).toEqual(35);
    expect(tamago.happiness).toEqual(95);
    expect(tamago.energy).toEqual(98);
    expect(tamago.bathroom).toEqual(32);
  });

  it ("should increase the happiness level by 15", function () {
    tamago.play();
    expect(tamago.happiness).toEqual(115);
  });

  it ("should reset the energy level to 100", function () {
    tamago.sleep();
    expect(tamago.energy).toEqual(100);
  });

  it ("should set pooped to 1 and bathroom to 30, then pooped 0 when cleaned", function () {
    tamago.poop();
    expect(tamago.pooped).toEqual(1);
    expect(tamago.bathroom).toEqual(30);
    tamago.clean();
    expect(tamago.pooped).toEqual(0);
  });

  it ("should set alive to false", function () {
    tamago.die();
    expect(tamago.alive).toBeFalsy();
  });

});
