module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npx --yes gepeto@latest --name={{encodeURIComponent(args.name)}} --git={{encodeURIComponent(args.git)}} --icon={{encodeURIComponent(args.icon)}}",
      path: "..",
    }, 
  }, {
    when: "{{args.x}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=x --value={{args.x}}',
    },
  }, {
    when: "{{args.github}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=github --value={{args.github}}',
    },
  }, {
    when: "{{args.buymeacoffee}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=buymeacoffee --value={{args.buymeacoffee}}',
    },
  }, {
    when: "{{args.kofi}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=kofi --value={{args.kofi}}',
    },
  }, {
    when: "{{args.bsky}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=bluesky --value={{args.bsky}}',
    },
  }, {
    when: "{{args.website}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=website --value={{args.website}}',
    },
  }, {
    when: "{{args.bitcoin}}",
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: 'npx --yes gepeto@latest add link --title=bitcoin --value={{args.bitcoin}}',
    },
  }, {
    method: "notify",
    params: {
      html: "Generation complete. Click the home button to find the generated repository!"
    }
  }]
}