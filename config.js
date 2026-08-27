module.exports = {
  hostRules: [
    {
      matchHost: "api.github.com",
      token: process.env.READONLY_GITHUB_TOKEN,
      readOnly: true,
    },
    {
      hostType: "github",
      matchHost: "github.com",
      token: process.env.READONLY_GITHUB_TOKEN,
      readOnly: true,
    },
  ],
  "git-submodules": {
    enabled: true,
  },
  allowedCommands: [
    ".*"
  ],
  allowShellExecutorForPostUpgradeCommands: true,
};
