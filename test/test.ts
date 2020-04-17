import { Scrambow } from '../src/scrambow';
import { expect } from 'chai';

describe('Scrambow', () => {
  let test: Scrambow;

  beforeEach(() => {
    test = new Scrambow();
  });

  describe('constructor', () => {
    it('default type should be 333', () => {
      expect(test.type).to.be.eq('333');
    });

    it('should display an error for an unsupported type', () => {
      const error = /Invalid scrambler, allowed: /g;

      expect(() => test.setType('notarealtype')).to.throw(error);
    });
  });

  describe('default', () => {
    it('seed should return Math', () => {
      expect(test.seed).to.deep.eq(Math);
    });

    it('length should return 20', () => {
      expect(test.length).to.eq(20);
    });
  });

  describe('same scrambles', () => {
    let expected: Scrambow;

    beforeEach(() => {
      expected = new Scrambow();
    })

    it('should match 2x2', () => {
      const expectedScrambles = expected.setSeed(1).setType('222').get(10);

      const generated = test.setSeed(1).setType('222').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match 3x3', () => {
      const expectedScrambles = expected.setSeed(1).setType('333').get(10);

      const generated = test.setSeed(1).setType('333').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match 4x4', () => {
      const expectedScrambles = expected.setSeed(1).setType('444').get(10);

      const generated = test.setSeed(1).setType('444').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match 5x5', () => {
      const expectedScrambles = expected.setSeed(1).setType('555').get(10);

      const generated = test.setSeed(1).setType('555').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match minx', () => {
      const expectedScrambles = expected.setSeed(1).setType('minx').get(10);

      const generated = test.setSeed(1).setType('minx').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match pyram', () => {
      const expectedScrambles = expected.setSeed(1).setType('pyram').get(1);

      const generated = test.setSeed(1).setType('pyram').get(1);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match sq1', () => {
      const expectedScrambles = expected.setSeed(1).setType('sq1').get(10);

      const generated = test.setSeed(1).setType('sq1').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match edges', () => {
      const expectedScrambles = expected.setSeed(1).setType('edges').get(10);

      const generated = test.setSeed(1).setType('edges').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match ll', () => {
      const expectedScrambles = expected.setSeed(1).setType('ll').get(10);

      const generated = test.setSeed(1).setType('ll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match lsll', () => {
      const expectedScrambles = expected.setSeed(1).setType('lsll').get(10);

      const generated = test.setSeed(1).setType('lsll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match zzlsll', () => {
      const expectedScrambles = expected.setSeed(1).setType('zzlsll').get(10);

      const generated = test.setSeed(1).setType('zzlsll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match nls', () => {
      const expectedScrambles = expected.setSeed(1).setType('nls').get(10);

      const generated = test.setSeed(1).setType('nls').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match pll', () => {
      const expectedScrambles = expected.setSeed(1).setType('pll').get(10);

      const generated = test.setSeed(1).setType('pll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match zzll', () => {
      const expectedScrambles = expected.setSeed(1).setType('zzll').get(10);

      const generated = test.setSeed(1).setType('zzll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match cmll', () => {
      const expectedScrambles = expected.setSeed(1).setType('cmll').get(10);

      const generated = test.setSeed(1).setType('cmll').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match cmllsune', () => {
      const expectedScrambles = expected.setSeed(1).setType('cmllsune').get(10);

      const generated = test.setSeed(1).setType('cmllsune').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match ble', () => {
      const expectedScrambles = expected.setSeed(1).setType('ble').get(10);

      const generated = test.setSeed(1).setType('ble').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match lccp', () => {
      const expectedScrambles = expected.setSeed(1).setType('lccp').get(10);

      const generated = test.setSeed(1).setType('lccp').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });

    it('should match wv', () => {
      const expectedScrambles = expected.setSeed(1).setType('wv').get(10);

      const generated = test.setSeed(1).setType('wv').get(10);

      expect(generated).to.deep.eq(expectedScrambles);
    });
  });

  describe('type', () => {
    it('should be set to 333', () => {
      test.setType('333');

      expect(test.type).to.eq('333');
    });

    it('should be set to 444', () => {
      test.setType('444');

      expect(test.type).to.eq('444');
    });

    it('should be set to 555', () => {
      test.setType('555');

      expect(test.type).to.eq('555');
    });
  });

  describe('chaining', () => {
    it('should chain a seed followed by a get', () => {
      new Scrambow().setSeed(10).get(2);
    });

    it('should chain a type set followed by a get', () => {
      new Scrambow().setType('444').get(2);
    });

    it('should chain a seed followed by a type set followed by a get', () => {
      new Scrambow().setSeed(1).setType('444').get();
    });

    it('should chain a type set followed by a seed set followed by a get', () => {
      new Scrambow().setType('444').setSeed(1).get(1);
    });
  });

  describe('seeded scrambles', () => {
    it('should return the same each time', () => {
      const seeded_scramble = test.setSeed(1).get().map(t => t['scramble_string']);

      for (let i = 1; i <= 100; i++) {
        expect(seeded_scramble).to.deep.eq(test.setSeed(1).get().map(t => t['scramble_string']));
      }
    });

    it('complex should return the same each time', () => {
      const seeded_scramble = test.setSeed(50).setType('444').get().map(t => t['scramble_string']);

      for (let i = 1; i <= 100; i++) {
        expect(seeded_scramble).to.deep.eq(test.setSeed(50).setType('444').get().map(t => t['scramble_string']));
      }
    });
  });

  describe('minx', () => {
    it('should initalize from constructor', () => {
      const test = new Scrambow('minx');
      test.get();
    });

    it('should initalize from constructor with chained type set', () => {
      const test = new Scrambow().setType('minx');
      test.get();
    });

    it('should initalize from constructor with chained type set and chained get', () => {
      new Scrambow().setType('minx').get();
    });
  });

  describe('pyram', () => {
    it('should initalize from constructor', () => {
      const test = new Scrambow('pyram');
      test.get();
    });

    it('should initalize from constructor with chained type set', () => {
      const test = new Scrambow().setType('pyram');
      test.get();
    });

    it('should initalize from constructor with chained type set and chained get', () => {
      new Scrambow().setType('pyram').get();
    });
  });

  describe('clock', () => {
    it('should initalize from constructor', () => {
      const test = new Scrambow('clock');
      test.get();
    });

    it('should initalize from constructor with chained type set', () => {
      const test = new Scrambow().setType('clock');
      test.get();
    });

    it('should initalize from constructor with chained type set and chained get', () => {
      new Scrambow().setType('clock').get();
    });
  });

  describe('sq1', () => {
    it('should initalize from constructor', () => {
      const test = new Scrambow('sq1');
      test.get();
    });

    it('should initalize from constructor with chained type set', () => {
      const test = new Scrambow().setType('sq1');
      test.get();
    });

    it('should initalize from constructor with chained type set and chained get', () => {
      new Scrambow().setType('sq1').get();
    });
  });

  describe('555', () => {
    it('scramble should equal 60', () => {
      const result = test.setType('555').get().map(t => t['scramble_string']);
      expect(result.join().split(' ').length).to.eq(60);
    });

    it('scramble should equal 5', () => {
      const result = test.setType('555').setLength(5).get().map(t => t['scramble_string']);
      expect(result.join().split(' ').length).to.eq(5);
    });

    it('scramble should equal 1', () => {
      const result = test.setType('555').setLength(1).get().map(t => t['scramble_string']);
      expect(result.join().split(' ').length).to.eq(1);
    });

    it('scramble should equal 10', () => {
      const result = test.setType('555').setLength(10).get().map(t => t['scramble_string']);
      expect(result.join().split(' ').length).to.eq(10);
    });
  });
});
