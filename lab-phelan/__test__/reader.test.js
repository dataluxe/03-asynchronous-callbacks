const reader = require(`../lib/reader`);

describe(`Testing suite for fp.js`, () => {

  describe('fp.map()', () => {

    test(`+ : "Return first 25 chars of each three files"`, (done) => {
      reader.readTrio((paths, callback) => {
        expect(
          [`../assets/ani.txt`,`../assets/nqu.txt`,`../assets/zzq.txt`], (err)=>console.log(err)
        ).toEqual([
          'anianiani anianiani ania',
          'nqu uqn nqu uqn nqu uqn n',
          'zzq_zzq_qzz____zzq_zzq_q',
        ]);
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
