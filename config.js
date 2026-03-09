module.exports = {
  hostRules: [
    {
      matchHost: "api.github.com",
      token: process.env.READONLY_GITHUB_TOKEN,
      readOnly: true,
    },
    {
      matchHost: "api.github.com",
      hostType: "github",
      token: process.env.READONLY_GITHUB_TOKEN,
      readOnly: true,
    },
  ],
  allowedCommands: [
    ".*"
  ],
  allowShellExecutorForPostUpgradeCommands: true,
};
