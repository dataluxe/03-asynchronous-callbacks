const reader = require(`../lib/reader`);

describe(`Testing suite for reader.js`, () => {

  describe('Testing reader.readTrio()', () => {

    test(`+ : "Return first 25 chars of each three files"`, (done) => {
      reader(
        [`${__dirname}/../assets/ani.txt`,
          `${__dirname}/../assets/nqu.txt`,
          `${__dirname}/../assets/zzq.txt`,
        ],
        (error,data) => {
          expect(data).toEqual([
            'anianiani anianiani anian',
            'nqu uqn nqu uqn nqu uqn n',
            'zzq_zzq_qzz____zzq_zzq_qz',
          ]);
          done();
        });
    });

  });

});

// test(`- : "Cannnot find target file"`, () => {
//   expect (
//     () => {
//       fp.map(
//         'Throw : string, not function',
//         [1, 'test', null]
//       );
//     }
//   ).toThrow();
// });
