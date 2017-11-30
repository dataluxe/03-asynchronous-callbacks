'use strict';

const fs = require('fs');

function readTrio (paths, callback) {

  if (Array.isArray(paths)===false) {
    throw new TypeError(`<paths> must be an Array.... is '${typeof paths}'`);
  }

  if (paths.length!==3) {
    throw new Error(`<paths> must have exactly 3 elements.... has ${paths.length}`);
  }

  if (paths.filter(x=>typeof x === 'string').length!==3) {
    throw new Error('All elements of <paths> must be strings!');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`<callback> must be a function, in order to provide Jest with an endpoint to test this function! Is: ${typeof callback}`);
  }

  //Should add another <throw> block here with a regex for paths - too much work tho.

  paths = paths.map(x=>{return{'path':x, 'text':null};});
  // Map file array out into Object Array - each object has 'path' and 'text'. <text> defaults to null, <path> is the inputted path from the original array.

  for (let i=0, len=paths.length; i<len; i++) {

    //console.log(`Main 'for' loop started - ${new Date().getTime()}`);//REMOVE-------

    fs.readFile(paths[i].path, (error, data) => {

      //console.log(`readFile callback's 'this': ${this}`);
      //console.log(`readFile callback's 'error': ${error}`);
      //console.log(`readFile callback's 'data': ${data}`);
      //console.log(`readFile callback's 'i': ${i}`);
      //console.log(`readFile callback's 'element': ${paths[i]}`);


      if (error) {
        callback(error);
        return; //First of two exit points for this function - remember, this function should return <undefined>, as this expression will.
      }

      //console.log(`File ${i} succesfully read! Characters returned: ${data.length}`);//REMOVE-------

      paths[i].text = data.toString('UTF-8', 0, 25);

      //console.log(`paths[${i}].text - ${paths[i].text}`);
      //console.log(`paths: ${paths}`);

      if (paths.filter(x=>{return x.text===null;}).length === 0) callback(null, paths.map(x=>{return x.text;}));

      return; //Second of two exit points from this function - will also return 'undefined' as required.
    });

    //console.log(`Main 'for' loop completed - ${new Date().getTime()}`);//REMOVE-------

  }

}

module.exports = readTrio;
