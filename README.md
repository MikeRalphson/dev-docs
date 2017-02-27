# BigCommerce API & Themes Documentation
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/bc-AlyssNoland/developer-documentation)
*Create apps and themes for thousands of successful merchants on a leading SaaS provider for merchants running an online business*

This project hosts the documentation available at [https://developer.bigcommerce.com/](https://developer.bigcommerce.com/).

Getting Started with Slate
------------------------------

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.
- **Node** and **npm** (optional) - used for auto-generating markdown from Swagger API documenation.

### Getting Set Up

1. Fork this repository on Github.
2. Clone *your forked repository* (not our original one) to your hard drive with `git clone https://github.com/YOUR-USERNAME/slate.git`
3. `cd slate`
4. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567. Whoa! That was fast!

Now that Slate is all set up your machine, you'll probably want to learn more about [editing Slate markdown](https://github.com/lord/slate/wiki/Markdown-Syntax), or [how to publish docs](https://github.com/lord/slate/wiki/Deploying-Slate).

If you'd prefer to use Docker, instructions are available [in the wiki](https://github.com/lord/slate/wiki/Docker).

### Auto-generating markdown from swagger

**Prerequisites** - you must `npm install js-yaml` and `npm install widdershins` (note: tested on widdershins 1.0.8)

1. Make sure the updated swagger file is in `data`
2. Commit the updated swagger file
3. Run `node swagger2md.js`
4. Check the result in `source/api/v3`
5. Commit the result
6. Deploy
