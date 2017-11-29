const fp = require(`../lib/fp`);

describe(`Testing suite for fp.js`, () => {

  describe('fp.map()', () => {

    test(`+ : "Concat Mixed Array"`, () => {
      expect(fp.map(
        input=>{return input + `stuff`;},
        [1, 'test', null]
      )).toEqual(['1stuff', 'teststuff', 'nullstuff']);
    });

    test(`- : "Callback not a function"`, () => {
      expect (
        () => {
          fp.map(
            'Throw : string, not function',
            [1, 'test', null]
          );
        }
      ).toThrow();
    });

    test(`- : "Collection not an array"`, () => {
      expect (
        () => {
          fp.map(
            input=>{return input + `stuff`;},
            'Throw : string, not array'
          );
        }
      ).toThrow();
    });
  });

  describe('fp.filter()', () => {

    test(`+ : "Filter Int Array"`, () => {
      expect(fp.filter(
        input=>{return input > 4;},
        [2, 7, 2, 7, 2, 2, 7, 8, 1, 0, -1]
      )).toEqual([7, 7, 7, 8]);
    });

    test(`- : "Callback not a function"`, () => {
      expect (
        () => {
          fp.filter(
            'Throw : string, not function',
            [2, 7, 2, 7, 2, 2, 7, 8, 1, 0, -1]
          );
        }
      ).toThrow();
    });

    test(`- : "Collection not an array"`, () => {
      expect (
        () => {
          fp.filter(
            input=>{return input > 4;},
            'Throw : string, not array'
          );
        }
      ).toThrow();
    });
  });

  describe('fp.reduce()', () => {
    test(`+ : "Sum Int Array"`, () => {
      expect(fp.reduce(
        (accumulator, currentValue) => {return accumulator + currentValue;},
        10,
        [4, 10, 15, 100, 1, 9]
      )).toBe(149);
    });

    test(`- : "Callback not a function"`, () => {
      expect (
        () => {
          fp.reduce(
            'Throw : string, not function',
            10,
            [4, 10, 15, 100, 1, 9]
          );
        }
      ).toThrow();
    });

    test(`- : "Collection not an array"`, () => {
      expect (
        () => {
          fp.reduce(
            (accumulator, currentValue) => {return accumulator + currentValue;},
            10,
            'Throw : string, not array'
          );
        }
      ).toThrow();
    });

    test(`- : "If Collection is empty, initialState must be populated."`, () => {
      expect (
        () => {
          fp.reduce(
            (accumulator, currentValue) => {return accumulator + currentValue;},
            [],
            null
          );
        }
      ).toThrow();
    });
  });

  describe('fp.slice()', () => {
    test(`+ : "Slice Array"`, () => {
      expect(fp.slice(
        1,
        5,
        ['4', 4, 'test', null, {}, 'okay', 110]
      )).toEqual([4, 'test', null, {}]);
    });

    test(`- : "Collection not an Array"`, () => {
      expect (
        () => {
          fp.slice(
            1,
            5,
            'Throw : string, not array'
          );
        }
      ).toThrow();
    });

    test(`- : "Begin and End must be integers"`, () => {
      expect (
        () => {
          fp.slice(
            'Throw : string, not integer',
            {},
            ['4', 4, 'test', null, {}, 'okay', 110]
          );
        }
      ).toThrow();
    });
  });

});
