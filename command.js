const prefix = '!';
const commands = require('./commands.json');

module.exports = msg => {
    if ( msg.author.bot ) return;
    if ( msg.content.charAt(0) == prefix ) {
        const command = msg.content.split(' ')[0].substr(1);
        for ( const c of Object.keys(commands) ) {
            if ( command.toLowerCase() == c.toLowerCase() ) require( commands [c] )( msg );
        }
    } else return;
}