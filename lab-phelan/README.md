I enumarate a commonJS-style Module in /lib/reader.js.

reader.js exports a single function, which in its home file is called (readTrio) (RT).

RT accepts <paths> and <callback>. The former is the Array of three string holding valid paths to text documents in our <../assets/> folder which we are <fs.readFile>ing in this Lab, and the latter is merely a wrapper function which exposes a function for jest to grab in order to evaluate the resolution of our <fs.readFile> calls - it serves no functional purpose in the meat of <readTrio()> in itself.

RT first sequentially runs a series of checks on the incoming parameters. It throws if <path> is not an array, doesn't have three elements, or if its elements are not strings. RT also errors out if <callback> is not a function.

Next, RT spins up three Event-listener-And-Call combos with <fs.readFile>.

One test cast checks that the value finally returned by RT (upon a positive resolution by the last callback) returns values as expected. This is the primary POSITIVE test case.

The final test case intentionally passes poor file paths to make the Asynchronous <fs.readFile> calls fail, and checks that at least one of the calls the callbacks pass returns a valid 'error' through their 'error' route.

I really kinda screwed myself by doing this in unconventional way.

Happy 9:39PM :crying-happy-face: :a-ok-sign: :gun:
