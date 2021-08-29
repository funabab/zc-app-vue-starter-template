# Zuri Chat App Development - Vue Starter Template

This starter template was generated with [Vue CLI](https://cli.vuejs.org/).
It only comes with a few modification to make zuri.chat app development easy.

## How To Use

Clone this repo, then inside the cloned repo folder run

```bash
    npm install
```

Or if you are using Yarn

```bash
    yarn install
```

Also make sure you set the `pluginDomain` in the **package.json** file to match your plugin domain name

**The `pluginDomain` can only be a valid zuri.chat subdomain e.g plugin.zuri.chat**

## How To Build Your Plugin

To build, your simply build it like any Vue CLI generated project by running

```bash
    npm run build
```

Make sure you've already set the `pluginDomain` in the **package.json** file to match your plugin domain name

## Building for Another Domain

To build plugin for another domain, change `pluginDomain` in the **package.json** to `pluginTestingDomain` and set it the alternate domain then build.

### Project setup

```
yarn install
```

#### Compiles and hot-reloads for development

```
yarn serve
```

#### Compiles and minifies for production

```
yarn build
```

#### Lints and fixes files

```
yarn lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
