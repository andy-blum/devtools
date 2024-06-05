# @carbon/devtools-web-extension

The [Carbon Devtools](http://ibm.biz/carbon-devtools) web extension is a plugin
tool for browsers that provides designers, developers, QA teams and anyone
collaborating to build and validate Carbon pages with a simple set of tools.

- [Features](#features)
- [Install on Chrome](#install-on-chrome)
- [Install on Firefox](#install-on-firefox)
- [Local development](#local-development)
- [Contributing](#-contributing)
- [License](#-license)

## Features

### Grid overlay

Use the grid overlay feature to lay the 2x and mini unit grid on top of your
page to quickly check the alignment of your page's layout. breakpoints.

![chrome - screenshot - 1280x800  (2)](https://user-images.githubusercontent.com/3793636/135755372-1682626a-cf4f-45f9-a709-860ee7dce417.png)

<a href="https://user-images.githubusercontent.com/3793636/135755378-d1b232bc-5894-457b-bc3f-2850934ed906.png" target="_blank"><img src="https://user-images.githubusercontent.com/3793636/135755378-d1b232bc-5894-457b-bc3f-2850934ed906.png" alt="Grid overlay visual example" width="320px" /></a>

### Specs

Switch between a number of speccing options like color, spacing, and typography
to identify what Carbon tokens are being used for a given component or element
on the page.

![chrome - screenshot - 1280x800  (3)](https://user-images.githubusercontent.com/3793636/135755431-36f3a2af-be58-464d-9c57-e8f3d70986fa.png)

<a href="https://user-images.githubusercontent.com/3793636/135755428-6e90d04c-2c63-45b7-8b97-4e978f0a03d4.png" target="_blank"><img src="https://user-images.githubusercontent.com/3793636/135755428-6e90d04c-2c63-45b7-8b97-4e978f0a03d4.png" alt="Token identifier visual example" width="320px" /></a>

### Component list

Quickly get an inventory of all the Carbon supported components being used on a
given page. Search for a specific component, and click on it to find where it's
located on the page.

![chrome - screenshot - 1280x800  (4)](https://user-images.githubusercontent.com/3793636/135755438-817709eb-3cc5-47c7-b45d-a4cb7e12cff2.png)

### Resize browser

Identify what Carbon breakpoint you're browser is actively using, and quickly
resize your browser to see how your page responds at various supported

## Install on Chrome

1. Go to [Carbon Devtools](http://ibm.biz/carbon-devtools-chrome) on the Chrome
   Web Store.
2. Click the "Add to Chrome" button.
3. Once installed you can click to open it next to the Chrome Omnibox.

> This extension works for all chromium based browsers, and thus can be applied
> to Microsoft Edge, Brave, and Opera as well.

## Install on Firefox

1. Go to
   [Carbon Devtools](https://addons.mozilla.org/en-US/firefox/addon/carbondevtools/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
   on the Firefox browser add-ons.
2. Click the "+ Add to Firefox" button.
3. Once installed you can click to open it from your toolbar.

## Local development

1. Use node v16
2. From the repository's root dir, run `yarn install`
3. From this package's dir, run `yarn build` to build once or `yarn watch` to
   build on every filesave
4. Launch the local build with one of the below:

- `yarn launch:chrome` to open https://ibm.com in chrome
- `yarn launch:firefox` to open https://ibm.com in firefox
- `yarn launch:firefox:dev` to open firefox to the extension's debugging page.

Note: You may need to re-launch the extension for some changes (e.g. changes to
the manifest file).

#### Build extension

1. `fork`, `clone` and `yarn install` dependencies
2. `yarn build` or `yarn watch` to build extension

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
