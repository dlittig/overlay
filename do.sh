rm -r node_modules/
rm -r out/

sudo docker run --rm -ti \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine \
 /bin/bash -c "apt-get update && apt-get install -y fakeroot zip && apt-get clean && rm -rf /var/lib/apt/lists/* && yarn install && yarn make:all"
