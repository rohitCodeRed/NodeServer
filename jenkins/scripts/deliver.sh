#!/usr/bin/env sh

set -x
npm run build
set +x

set -x
node index.js &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3001 to see your Node.js application in action.'