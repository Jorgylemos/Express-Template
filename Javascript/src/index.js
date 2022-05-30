/** Good coding my friend :) ! */

/** @Librarys import. */
//...

/** Import files. */
const { App, Port } = require('./App');

/** @dotenv global config. */
require('dotenv').config();

function main() {
    /** @Create a new app object. 
    * @App
    */
    const app = App();

    /** Calls the @Listener function to expose the port. */
    app.then(async function Listener() {
        console.clear()
        await Port(port)
    }).then(() => console.log(`\x1b[32m > Node 17+ \x1b[33m(Javascript)` + `\n` + `\x1b[32m > Local: http://localhost:${port}/` + '\n' +
        '\n' + `\x1b[30m > [Github: \x1b[33m https://github.com/jorgylemos\x1b[30m]`))

    /** Creating a new @variable for introducing the port number.. */
    const port = process.env.PORT || 5000;
}

/** Call the main function to start it.
* @function main(){
    ...
}
*/
main();