This repository contains a reproducer for https://github.com/renovatebot/renovate/discussions/41757, showing how the readonly token gets ignored.

Can be executed with `npx renovate samgiz/renovate-41757-reproducer --config-file=config.js`.
Assumes `RENOVATE_TOKEN` and `READONLY_GITHUB_TOKEN` are environment variables containing tokens with write and readonly access respectively.

If you fork this repository, make sure to replace the instances of `samgiz` in the command above and `renovate.json` with your user. You should also create a dummy PR #1 for Renovate to post a comment in.
