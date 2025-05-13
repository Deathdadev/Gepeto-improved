module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Deathdadev/Gepeto-improved-ui.git app",
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pnpm install",
        ]
      }
    },
  ]
}
