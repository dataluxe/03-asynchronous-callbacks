'use strict';

const fs = require(fs);

const readTrio = (paths, callback) => {
  paths = paths.map(x=>{return{'path':x, 'text':null};});
  // Map file array out into Object Array - each object has 'path' and 'text'. <text> defaults to null, <path> is the inputted path from the original array.

  for (var [index, element] of paths.entries()) {

    fs.readFile.call(this, element.path, (error, data) => {

      if (error) {
        callback(error);
        return; //First of two exit points for this function - remember, this function should return <undefined>, as this expression will.
      }

      console.log(`File ${index} succesfully read! Characters returned: ${data.length}`);

      element.text = data;

      if (paths.filter(x=>{return x.text===null;}).length > 0) callback(null, paths.map(x=>{return x.text;}));

      return; //Second of two exit points from this function - will also return 'undefined' as required.

    });
  }

};

module.exports = readTrio;
