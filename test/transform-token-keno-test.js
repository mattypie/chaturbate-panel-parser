'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-token-keno');

const PANEL = [
  {
    label: 'Board Count',
    value: '67 #s / 44 prizes',
  },
  {
    label: 'Tips / On Board',
    value: '1751 / 5509',
  },
  {
    label: 'MVP',
    value: 'bubbalickity (646)',
  },
];

describe('Transform::Token_Keno', () => {
  let results = [];

  beforeEach(() => {
    results = transformer.transform(PANEL);
  });

  it('should set hasGoal', () => {
    expect(results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(results.goalAmount).to.equal(7260);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(1751);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(5509);
  });

  it('should NOT set goalCount', () => {
    expect(results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('bubbalickity');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(646);
  });

  it('should NOT set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal(null);
  });

  it('should NOT set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(null);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
