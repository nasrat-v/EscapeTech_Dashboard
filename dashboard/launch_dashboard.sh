#!/bin/bash                                                                                               

BUILD_PWA="npm run build"
RUN_DASHBOARD="npm run start-sw"

echo "///////////////////  New launch at `date` \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"
${BUILD_PWA}
${RUN_DASHBOARD}
