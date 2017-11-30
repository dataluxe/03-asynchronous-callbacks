'use strict';

const fs = require(fs);

const readTrio = (paths, callback) => {

  if (Array.isArray(paths)===false) {
    throw new TypeError(`<paths> must be an Array.... is '${typeof paths}'`);
  }

  if (paths.length!==3) {
    throw new Error(`<paths> must have exactly 3 elements.... has ${paths.length}`);
  }

  if (paths.filter(x=>typeof x === 'string').length!==3) {
    throw new Error('All elements of <paths> must be strings!');
  }

  //Should add another <throw> block here with a regex for paths - too much work tho.

  if (typeof callback !== 'function') {
    throw new Error(`<callback> must be a function.... iss ${typeof callback}`);
  }

  //STOPWATCH FUNCTION - REMOVE WHEN DONE --------------------
  let stopwatch = {
    'sTime' : new Date().getTime(),
    'lap' : (sTime) => {
      return (sTime-(new Date().getTime())).toString();
    },
  };
  //STOPWATCH FUNCTION - REMOVE WHEN DONE --------------------

  paths = paths.map(x=>{return{'path':x, 'text':null};});
  // Map file array out into Object Array - each object has 'path' and 'text'. <text> defaults to null, <path> is the inputted path from the original array.

  for (var [index, element] of paths.entries()) {

    console.log(`Main 'for' loop started - ${stopwatch.lap}`);//REMOVE-------

    fs.readFile.call(this, element.path, (error, data) => {

      if (error) {
        callback(error);
        return; //First of two exit points for this function - remember, this function should return <undefined>, as this expression will.
      }

      console.log(`File ${index} succesfully read! Characters returned: ${data.length}`);//REMOVE-------

      data = data.toString('UTF-8', 0, 25);
      element.text = data;

      if (paths.filter(x=>{return x.text===null;}).length > 0) callback(null, paths.map(x=>{return x.text;}));

      return; //Second of two exit points from this function - will also return 'undefined' as required.
    });

    console.log(`Main 'for' loop completed - ${stopwatch.lap}`);//REMOVE-------

  }

};

module.exports = readTrio;
