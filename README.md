# nulog

Switch off console.log

A custom logger to skip conditional statements when trying to mute logs.

If your code looks like this:

```js
if (!process.env.TEST || !commandLineArguments.quiet)
  console.log('A message to log in production');
```

You can now initialize a `nulog` instance with a toggle variable that will
send your logs to /dev/null if false is passed.

```js
var logger = require('nulog')(!commandLineArguments.quiet);
logger.log('You will not see this msg when --quiet is true');
```
