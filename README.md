This repository contains a reproducer for https://github.com/renovatebot/renovate/discussions/41757, showing how the readonly token gets ignored.

Can be executed with `LOG_LEVEL=debug RENOVATE_TOKEN="github_pat_..." READONLY_GITHUB_TOKEN="whatever_this_doesnt_get_used" RENOVATE_CONFIG_FILE=config.js npx renovate samgiz/renovate-41757-reproducer`. The github token needs read and write access to pull requests and contents of the repository it's being run on.

If you fork this repository, make sure to replace the instances of `samgiz` in the command above and `renovate.json` with your user. You should also create a dummy PR #1 for Renovate to post a comment in.

The result of running the command above is a comment in commit #1 of the repository, proving that the write token is being passed to `postUpgradeTasks`. See https://github.com/samgiz/renovate-41757-reproducer/pull/1#issuecomment-4075422523.

This repository also contains the private `renovate-41757-reproducer-private` Git submodule. The `git-submodules` manager is enabled in `renovate.json`.

To test the proposed fix, use two fine-grained GitHub tokens:

- `RENOVATE_TOKEN` has read/write access to public repositories only, and no access to the private submodule repository.
- `READONLY_GITHUB_TOKEN` has read-only access to `samgiz/renovate-41757-reproducer-private`.

Renovate should only be able to fetch new submodule versions and create a new update PR if it can access the private repo with the READONLY token.
