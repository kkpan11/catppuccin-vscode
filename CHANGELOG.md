# Changelog

## [4.0.0](https://github.com/kkpan11/catppuccin-vscode/compare/v3.1.0...v4.0.0) (2023-09-04)


### ⚠ BREAKING CHANGES

* rework syntax highlighting

### Features

* add an option for a subtle border on some UI elements ([dcdc113](https://github.com/kkpan11/catppuccin-vscode/commit/dcdc113db6b74d30c0dcd031e39cd43e77493662))
* add color overrides ([742eb65](https://github.com/kkpan11/catppuccin-vscode/commit/742eb6589556877f2d9eae3c9ee6807ed4edb3df))
* add more accent colours ([ae397bd](https://github.com/kkpan11/catppuccin-vscode/commit/ae397bd419fb5673f88c695269580654cbb37ad6))
* add schema for colorOverrides ([f5f4275](https://github.com/kkpan11/catppuccin-vscode/commit/f5f42756c308306b64e705c797e93954efd781d0))
* add support for vscode web ([#85](https://github.com/kkpan11/catppuccin-vscode/issues/85)) ([111eaff](https://github.com/kkpan11/catppuccin-vscode/commit/111eaff814704087993f8bc79e88931f4c1fedc6))
* add toggle for bold fonts ([#58](https://github.com/kkpan11/catppuccin-vscode/issues/58)) ([f11fbe4](https://github.com/kkpan11/catppuccin-vscode/commit/f11fbe4550aa0a7913cde4cc47eacea20a439538))
* assets ([39e5537](https://github.com/kkpan11/catppuccin-vscode/commit/39e55372871d08e7e220025b3a33d9e161609a48))
* catppuccin 0.2.0 spec ([287785a](https://github.com/kkpan11/catppuccin-vscode/commit/287785ab92c5c235dae76b93f877243b579e0828))
* client-side theme re-compilation, togglable italics ([#38](https://github.com/kkpan11/catppuccin-vscode/issues/38)) ([caebbbb](https://github.com/kkpan11/catppuccin-vscode/commit/caebbbbf58df1f0f555fc9c53d2899000cce02ff))
* enable toggling per flavour, as well as global settings ([f5e8340](https://github.com/kkpan11/catppuccin-vscode/commit/f5e83404fdca6813616ece27c6a924488f997c76))
* **extension:** add support for Error Lens extension ([#71](https://github.com/kkpan11/catppuccin-vscode/issues/71)) ([dafd341](https://github.com/kkpan11/catppuccin-vscode/commit/dafd341c4c3387ef32fa4afb832214b27abafb6f)), closes [#68](https://github.com/kkpan11/catppuccin-vscode/issues/68)
* flat workbench appearance ([#59](https://github.com/kkpan11/catppuccin-vscode/issues/59)) ([5974a21](https://github.com/kkpan11/catppuccin-vscode/commit/5974a21d05f21c2867edc82d75b2e6830ea7dd71))
* minimal workbench ([#111](https://github.com/kkpan11/catppuccin-vscode/issues/111)) ([e6b53fe](https://github.com/kkpan11/catppuccin-vscode/commit/e6b53fe8565d2626d1cdf3b56357495cb13d1e60)), closes [#105](https://github.com/kkpan11/catppuccin-vscode/issues/105)
* new debugging colors (breakpoints, widgets) ([eb2e640](https://github.com/kkpan11/catppuccin-vscode/commit/eb2e640edbc74a1f9855d131f6d16b2816bd5a5b))
* new shade util & document previous utils ([7090919](https://github.com/kkpan11/catppuccin-vscode/commit/7090919c913967f6eab93a055b622a922fd4e88c))
* new ui colors ([c19e334](https://github.com/kkpan11/catppuccin-vscode/commit/c19e334faed8169d42aeb28bca1c82a1ced020c6))
* options for paired brackets ([#79](https://github.com/kkpan11/catppuccin-vscode/issues/79)) ([32edaaf](https://github.com/kkpan11/catppuccin-vscode/commit/32edaafd1851ef1eaf5fc78acd19cf337c19f003))
* **options:** support hex codes in `catppuccin.customUIColors` ([#126](https://github.com/kkpan11/catppuccin-vscode/issues/126)) ([6df739f](https://github.com/kkpan11/catppuccin-vscode/commit/6df739f9c7dce789216f4afd76df21e3fb3abb14)), closes [#109](https://github.com/kkpan11/catppuccin-vscode/issues/109)
* revert using accents for focus borders ([b7a3ab4](https://github.com/kkpan11/catppuccin-vscode/commit/b7a3ab4473546aba170a2a3d0c3fca9424a91739))
* rework syntax highlighting ([d04578b](https://github.com/kkpan11/catppuccin-vscode/commit/d04578b0201eeaa6834e4e060a7cc22ce6fbbd66))
* sample ([1a81e0d](https://github.com/kkpan11/catppuccin-vscode/commit/1a81e0d5a037ef1a69e11c77eebf8a1800387971))
* style breakpoint highlights ([#90](https://github.com/kkpan11/catppuccin-vscode/issues/90)) ([0529f90](https://github.com/kkpan11/catppuccin-vscode/commit/0529f907fec22e61a93f8ac8de82a8865e16e100))
* style inlay hints ([#87](https://github.com/kkpan11/catppuccin-vscode/issues/87)) ([032dc31](https://github.com/kkpan11/catppuccin-vscode/commit/032dc317001590f42973997cacef8226432459d1))
* sync icon theme with editor theme ([#93](https://github.com/kkpan11/catppuccin-vscode/issues/93)) ([a250b24](https://github.com/kkpan11/catppuccin-vscode/commit/a250b245f89c3ee8cb0b726895c5f21bf06539f0))
* **syntax:** add AsciiDoc support, loosen Markdown scopes ([c7ec7d5](https://github.com/kkpan11/catppuccin-vscode/commit/c7ec7d51afdc76e58131b7e82aef97a02901dd7b))
* **syntax:** add golang semantic tokens ([abf9b40](https://github.com/kkpan11/catppuccin-vscode/commit/abf9b40b56e246cb1d8958fbd566d6ed5e839d7b))
* **syntax:** add GraphQL syntax highlighting ([eae5a26](https://github.com/kkpan11/catppuccin-vscode/commit/eae5a260b0c63eb174ad3ca999dc6f8f169f73d4))
* **syntax:** add LaTeX support ([5e6251e](https://github.com/kkpan11/catppuccin-vscode/commit/5e6251e6e2b69907ffed1a1bb905c3f9ad5a230e))
* **syntax:** add Typst semantic tokens ([#140](https://github.com/kkpan11/catppuccin-vscode/issues/140)) ([59eee65](https://github.com/kkpan11/catppuccin-vscode/commit/59eee65956336eb6e73814bb06e5b471766dd2de))
* template instructions ([a8f3170](https://github.com/kkpan11/catppuccin-vscode/commit/a8f3170972abd28efcd307c4548497640a6bec4c))
* **ui:** change input border accents, use accent for enabled options ([#137](https://github.com/kkpan11/catppuccin-vscode/issues/137)) ([d73c6bd](https://github.com/kkpan11/catppuccin-vscode/commit/d73c6bd948b50ac5cd20bb80afeecc2d2598010f))
* **ui:** consistently use peach for warnings & yellow for modified ([22ee5cf](https://github.com/kkpan11/catppuccin-vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* **ui:** named color customizations ([#65](https://github.com/kkpan11/catppuccin-vscode/issues/65)) ([cc13bc6](https://github.com/kkpan11/catppuccin-vscode/commit/cc13bc6740708d8b0dbb44294f6e3b137fe1bb34))
* **ui:** rework minimap colors ([#129](https://github.com/kkpan11/catppuccin-vscode/issues/129)) ([a9c0e0d](https://github.com/kkpan11/catppuccin-vscode/commit/a9c0e0d1fee9925ee904da033a2e228f80e583f1))
* **ui:** use accent color for more focused elements ([#128](https://github.com/kkpan11/catppuccin-vscode/issues/128)) ([2b1a8a7](https://github.com/kkpan11/catppuccin-vscode/commit/2b1a8a7d9a0c687519ec72e4b333ecbe71c43f09)), closes [#91](https://github.com/kkpan11/catppuccin-vscode/issues/91)
* **ui:** use neovim-style search highlighting ([#131](https://github.com/kkpan11/catppuccin-vscode/issues/131)) ([ef9b76c](https://github.com/kkpan11/catppuccin-vscode/commit/ef9b76cd700682c74d1e9488ce9701564204dcb8)), closes [#103](https://github.com/kkpan11/catppuccin-vscode/issues/103)
* update ([8fc26aa](https://github.com/kkpan11/catppuccin-vscode/commit/8fc26aa4e0db22feeb828777197b763f8f303477))
* update ss ([e60a03f](https://github.com/kkpan11/catppuccin-vscode/commit/e60a03f866cd429683bbad34facc46d696e8e840))
* vscode theme catppuccin v0.1.3 ([e94b5a1](https://github.com/kkpan11/catppuccin-vscode/commit/e94b5a19b1aa980ffd6af049e872d54bf3b52c16))


### Bug Fixes

* [#19](https://github.com/kkpan11/catppuccin-vscode/issues/19) changed scrollbar opacity and diff opacity to increase readability ([b279edc](https://github.com/kkpan11/catppuccin-vscode/commit/b279edc1b2c8919302f844496fbfec2826eea8ed))
* Add install tutorial in readme ([567ab62](https://github.com/kkpan11/catppuccin-vscode/commit/567ab629dc8d0621b53e3df87edee4fe50b5d324))
* add opacity to git conflict markers ([e9405f2](https://github.com/kkpan11/catppuccin-vscode/commit/e9405f2fe7b825b5ff1dbc131f344fb6ae12ebc5)), closes [#42](https://github.com/kkpan11/catppuccin-vscode/issues/42)
* added shadow to sticky scroll ([#77](https://github.com/kkpan11/catppuccin-vscode/issues/77)) ([78cd81d](https://github.com/kkpan11/catppuccin-vscode/commit/78cd81d50a321a7aa3f7146bdb66bd84ba170bc9)), closes [#72](https://github.com/kkpan11/catppuccin-vscode/issues/72)
* bold conditionals (all and cpp catg) ([cf3e8ea](https://github.com/kkpan11/catppuccin-vscode/commit/cf3e8ea4d4c00b72eb6c8ab470315642174ba1dd))
* c++ var fg ([4979748](https://github.com/kkpan11/catppuccin-vscode/commit/497974884ec3c172e4b91e8813ed61db4956054c))
* change checkbox colors, make inputs in settings consistent ([29c0b67](https://github.com/kkpan11/catppuccin-vscode/commit/29c0b67529a574fb03aa98acff692ffca9479bf2))
* colors for debugIcons ([#64](https://github.com/kkpan11/catppuccin-vscode/issues/64)) ([a151279](https://github.com/kkpan11/catppuccin-vscode/commit/a15127952bff00166086a60fe092bb6bd8a15d1d))
* compile step ([#63](https://github.com/kkpan11/catppuccin-vscode/issues/63)) ([674e744](https://github.com/kkpan11/catppuccin-vscode/commit/674e744290a426556043593cc74a4317e54ed285))
* context menu bg fix ([469490a](https://github.com/kkpan11/catppuccin-vscode/commit/469490ab6e5a66da6f356976f05225cc73849437))
* context menu, modified files fg ([ce6a63d](https://github.com/kkpan11/catppuccin-vscode/commit/ce6a63db958d734dc6ac1d1172c09c661ffb2516))
* debug log entries in `isFreshInstall` ([#106](https://github.com/kkpan11/catppuccin-vscode/issues/106)) ([195149d](https://github.com/kkpan11/catppuccin-vscode/commit/195149d77c3a7fb1526dd4dcc8c9ef579a52f95b))
* don't use `as string` ([1cbd896](https://github.com/kkpan11/catppuccin-vscode/commit/1cbd896d1d32c1cfdef3a91a4040bf2588ae0e35))
* drag&drop color and input selection ([0402444](https://github.com/kkpan11/catppuccin-vscode/commit/0402444d3ab9a1e3f23f820f8c8e85ef54dfb598))
* dropdown/checkbox bg ([c8d7a42](https://github.com/kkpan11/catppuccin-vscode/commit/c8d7a428b8ac7793d89cb8b9b6bcba928608e1c9))
* fixed all issues except [#18](https://github.com/kkpan11/catppuccin-vscode/issues/18) ([191b64f](https://github.com/kkpan11/catppuccin-vscode/commit/191b64ff104b5508c8f6ba185340daa4a0c9abfb))
* frappe and mocha mix-up ([037fd86](https://github.com/kkpan11/catppuccin-vscode/commit/037fd862ddb2ac76c9a945dea9e659b8930e2868))
* funcs and vars ([7b7176b](https://github.com/kkpan11/catppuccin-vscode/commit/7b7176b89bbfa9c7f55120f95d6d13b684540f19))
* give minimap background some opacity ([ac6f692](https://github.com/kkpan11/catppuccin-vscode/commit/ac6f692e41d9cbf754b38aef7fe14fb36629a86d))
* highlight border to be transparent ([#113](https://github.com/kkpan11/catppuccin-vscode/issues/113)) ([cc37357](https://github.com/kkpan11/catppuccin-vscode/commit/cc373574711c65da2bf753094a732e5e4b7b3f9e))
* improve readability by switching active and inactive tab bg color ([e1c1150](https://github.com/kkpan11/catppuccin-vscode/commit/e1c1150001f10bd4e12bd939e7c1347130e641d3))
* json syntax ([0ea3716](https://github.com/kkpan11/catppuccin-vscode/commit/0ea371684f82ffe973e48299e4aef6741f676686))
* June Clean-up issues ([0b8895e](https://github.com/kkpan11/catppuccin-vscode/commit/0b8895e3044e69af32e6ceb707eb4036a8bb953d))
* June Clean-up issues ([b850135](https://github.com/kkpan11/catppuccin-vscode/commit/b8501352bfe57ee17bf7e1f0c165b578a2e86d50))
* June Clean-up issues ([df000a6](https://github.com/kkpan11/catppuccin-vscode/commit/df000a642ad61f959c2213fafa9fc70cf1af53b1))
* June Clean-up issues ([58fcb66](https://github.com/kkpan11/catppuccin-vscode/commit/58fcb66b74d8b5e7c9cb6ff13bcbdf925a2b4002))
* lua syntax ([b0ecf0e](https://github.com/kkpan11/catppuccin-vscode/commit/b0ecf0eb806a92bc1864c3f3fd237ddfe147eea4))
* make debug colors peach, remote colors blue ([9b23faa](https://github.com/kkpan11/catppuccin-vscode/commit/9b23faa41593f2fc8e1f41e9e61b99720eac11ef))
* **named colors:** accent opacity ([#70](https://github.com/kkpan11/catppuccin-vscode/issues/70)) ([e524df8](https://github.com/kkpan11/catppuccin-vscode/commit/e524df8de9f12ab15a0dce8af752beca0f47e42d)), closes [#69](https://github.com/kkpan11/catppuccin-vscode/issues/69)
* revert `crust` sideBarSectionHeader ([#66](https://github.com/kkpan11/catppuccin-vscode/issues/66)) ([a46ffb8](https://github.com/kkpan11/catppuccin-vscode/commit/a46ffb8a5792cc6c4178249db4658a1c03f36328))
* rust syntax + added 'all' settings ([5a49850](https://github.com/kkpan11/catppuccin-vscode/commit/5a49850b44d55d6468ee62e8c1ed21e95059f9ce))
* selection better readability ([9bd2197](https://github.com/kkpan11/catppuccin-vscode/commit/9bd2197d1ddd6e85699d5e637cb072d47b6d0759))
* shell syntax ([4360cdc](https://github.com/kkpan11/catppuccin-vscode/commit/4360cdce3a34e4446c05980405a40f8d6e005704))
* some delimeters in cpp port ([5127f1b](https://github.com/kkpan11/catppuccin-vscode/commit/5127f1b9c96df3ae25ad9c7dfeb3631ff8515ad6))
* spelling ([0e13062](https://github.com/kkpan11/catppuccin-vscode/commit/0e13062e5e22eab5ba18ed8543ee2c4c6f3c1e5a))
* StatusBarRemoteItem fg color in latte ([3c77198](https://github.com/kkpan11/catppuccin-vscode/commit/3c77198b3fac2947d1db4f880d5ede4e5a966080))
* style error/warning/info consistently ([22ee5cf](https://github.com/kkpan11/catppuccin-vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* swapped 2 values for terminal to make cursor visible ([c9d87fa](https://github.com/kkpan11/catppuccin-vscode/commit/c9d87fa37d8e7dfde3edc0b7df2f1657d49195d4))
* **syntax:** add java highlighting ([923a94a](https://github.com/kkpan11/catppuccin-vscode/commit/923a94ab9ab2f390e9c4d9a451e40e07f03c35f7))
* **syntax:** add jsx/tsx semantic highlights for const ([1151998](https://github.com/kkpan11/catppuccin-vscode/commit/11519989c22ba0b4e8aeb6d34d7c264cf86789fe))
* **syntax:** HTML/XML/JSX/TSX constants (`&amp`; etc.) ([2b41f80](https://github.com/kkpan11/catppuccin-vscode/commit/2b41f80789425f7bb6e8252dc304e097d7e85a77))
* **syntax:** PHP `this`, functions & builtin keywords ([#142](https://github.com/kkpan11/catppuccin-vscode/issues/142)) ([8293357](https://github.com/kkpan11/catppuccin-vscode/commit/8293357930510c295d6e83e3a76893e35920aac5)), closes [#141](https://github.com/kkpan11/catppuccin-vscode/issues/141)
* **syntax:** PHP dollar sign highlighting ([#115](https://github.com/kkpan11/catppuccin-vscode/issues/115)) ([373cca4](https://github.com/kkpan11/catppuccin-vscode/commit/373cca4e0eac22f4eabca5a13b8a95422b8db007))
* **syntax:** rust attributes semantic tokens ([e5a1a6c](https://github.com/kkpan11/catppuccin-vscode/commit/e5a1a6cb03292b24026b25cf4476c449ee14d0f8))
* **syntax:** support HL injection for data (json/yaml/toml) ([1f7350c](https://github.com/kkpan11/catppuccin-vscode/commit/1f7350ccaf0af08ee0a56cfc255b890a4934655d))
* **syntax:** TOML table keys ([c83efaf](https://github.com/kkpan11/catppuccin-vscode/commit/c83efafcacbb3daa8f282eba0e6d2699a636ef20))
* **syntax:** yellow TOML table highlights ([9822243](https://github.com/kkpan11/catppuccin-vscode/commit/982224351f0107628ba4c8e3371a933d5fca47e8))
* tab colour bg fixed ([297460c](https://github.com/kkpan11/catppuccin-vscode/commit/297460c6226b03c3556288f3a8ccb6bf202982b1))
* tab colour fix for latte ([9a8bc87](https://github.com/kkpan11/catppuccin-vscode/commit/9a8bc879f3f602740a5b19eb886737a6d31688b7))
* **terminal:** match selection bg with editor ([#76](https://github.com/kkpan11/catppuccin-vscode/issues/76)) ([8c1051a](https://github.com/kkpan11/catppuccin-vscode/commit/8c1051ad907ca5a0e12137bfd9480b08e44d8f3c))
* **terminal:** use style guide colors ([#122](https://github.com/kkpan11/catppuccin-vscode/issues/122)) ([83d8848](https://github.com/kkpan11/catppuccin-vscode/commit/83d884843ec500e1755cfa16a4d8770714513927))
* trigger re-compile after updating the extension ([1fcf30f](https://github.com/kkpan11/catppuccin-vscode/commit/1fcf30fdd48e2410fd82208ba73e18068d8bab54))
* tweak schema so it enforces 6-character hex colorcodes ([2073294](https://github.com/kkpan11/catppuccin-vscode/commit/2073294f49dd8846400622e362c31c93b18cb938))
* typo on rust ([f7b2239](https://github.com/kkpan11/catppuccin-vscode/commit/f7b223983c2a653e39e094ed602ece335b4d6ff8))
* typo on rust ([145cef7](https://github.com/kkpan11/catppuccin-vscode/commit/145cef7aee0562fc553139d3da91916def509783))
* **ui:** inactive selection bg ([#114](https://github.com/kkpan11/catppuccin-vscode/issues/114)) ([1305e25](https://github.com/kkpan11/catppuccin-vscode/commit/1305e258f3ea0888a51bf8b3598121d4a6ccca84))
* **ui:** marketplace pre-release button & separator ([#125](https://github.com/kkpan11/catppuccin-vscode/issues/125)) ([46833aa](https://github.com/kkpan11/catppuccin-vscode/commit/46833aacb92870d6b9ea33d261f45754ce8506f2)), closes [#119](https://github.com/kkpan11/catppuccin-vscode/issues/119)
* **ui:** offline styles & borders for `statusBar` ([eaa1ef8](https://github.com/kkpan11/catppuccin-vscode/commit/eaa1ef883a6ce1d18680707496311c7ba38aea8c))
* **ui:** reduce current search highlight opacity ([#135](https://github.com/kkpan11/catppuccin-vscode/issues/135)) ([4db87ba](https://github.com/kkpan11/catppuccin-vscode/commit/4db87ba9fa2336dd92ce9c468c72a4238a6681f3)), closes [#133](https://github.com/kkpan11/catppuccin-vscode/issues/133)
* **ui:** style banners (e.g. restricted mode) ([326f530](https://github.com/kkpan11/catppuccin-vscode/commit/326f530eeecbd53be87b4beb274f0f85d2380030)), closes [#117](https://github.com/kkpan11/catppuccin-vscode/issues/117)
* **ui:** typos & deprecated color keys ([ef235d5](https://github.com/kkpan11/catppuccin-vscode/commit/ef235d5eb014939eb008a43a5fa850949bb5588d))
* update footer to png ([d111c2b](https://github.com/kkpan11/catppuccin-vscode/commit/d111c2bac8305786a18da9ec1d8adaa385353d05))
* update version support ([23f25be](https://github.com/kkpan11/catppuccin-vscode/commit/23f25be64daab6c1edc6be864f21f3254b7ffc23))
* use "color" for user-facing UI instead of "colour" ([52c76c1](https://github.com/kkpan11/catppuccin-vscode/commit/52c76c19080720b598fb112928bd3dbef2573a16))
* use 50% opacity on wordHighlightStrongBackground ([#45](https://github.com/kkpan11/catppuccin-vscode/issues/45)) ([5cfe3ac](https://github.com/kkpan11/catppuccin-vscode/commit/5cfe3ac12612e9a95530c387480de35c464e8b4c))
* use catppuccin colors for diff editor ([3458879](https://github.com/kkpan11/catppuccin-vscode/commit/34588790baae3e4ffbf5fad14f815f336d7f013a))
* wrong command for pulling ([6149691](https://github.com/kkpan11/catppuccin-vscode/commit/6149691acecf5da91bf8153db70a794d33298bec))

## [3.1.0](https://github.com/catppuccin/vscode/compare/v3.0.1...v3.1.0) (2023-09-04)


### Features

* **syntax:** add AsciiDoc support, loosen Markdown scopes ([c7ec7d5](https://github.com/catppuccin/vscode/commit/c7ec7d51afdc76e58131b7e82aef97a02901dd7b))
* **syntax:** add golang semantic tokens ([abf9b40](https://github.com/catppuccin/vscode/commit/abf9b40b56e246cb1d8958fbd566d6ed5e839d7b))
* **syntax:** add GraphQL syntax highlighting ([eae5a26](https://github.com/catppuccin/vscode/commit/eae5a260b0c63eb174ad3ca999dc6f8f169f73d4))
* **syntax:** add LaTeX support ([5e6251e](https://github.com/catppuccin/vscode/commit/5e6251e6e2b69907ffed1a1bb905c3f9ad5a230e))
* **syntax:** add Typst semantic tokens ([#140](https://github.com/catppuccin/vscode/issues/140)) ([59eee65](https://github.com/catppuccin/vscode/commit/59eee65956336eb6e73814bb06e5b471766dd2de))


### Bug Fixes

* **syntax:** add jsx/tsx semantic highlights for const ([1151998](https://github.com/catppuccin/vscode/commit/11519989c22ba0b4e8aeb6d34d7c264cf86789fe))
* **syntax:** HTML/XML/JSX/TSX constants (`&amp`; etc.) ([2b41f80](https://github.com/catppuccin/vscode/commit/2b41f80789425f7bb6e8252dc304e097d7e85a77))
* **syntax:** PHP `this`, functions & builtin keywords ([#142](https://github.com/catppuccin/vscode/issues/142)) ([8293357](https://github.com/catppuccin/vscode/commit/8293357930510c295d6e83e3a76893e35920aac5)), closes [#141](https://github.com/catppuccin/vscode/issues/141)
* **syntax:** support HL injection for data (json/yaml/toml) ([1f7350c](https://github.com/catppuccin/vscode/commit/1f7350ccaf0af08ee0a56cfc255b890a4934655d))

## [3.0.1](https://github.com/catppuccin/vscode/compare/v3.0.0...v3.0.1) (2023-09-03)


### Bug Fixes

* **syntax:** add java highlighting ([923a94a](https://github.com/catppuccin/vscode/commit/923a94ab9ab2f390e9c4d9a451e40e07f03c35f7))
* **syntax:** rust attributes semantic tokens ([e5a1a6c](https://github.com/catppuccin/vscode/commit/e5a1a6cb03292b24026b25cf4476c449ee14d0f8))
* **syntax:** TOML table keys ([c83efaf](https://github.com/catppuccin/vscode/commit/c83efafcacbb3daa8f282eba0e6d2699a636ef20))
* **syntax:** yellow TOML table highlights ([9822243](https://github.com/catppuccin/vscode/commit/982224351f0107628ba4c8e3371a933d5fca47e8))

## [3.0.0](https://github.com/catppuccin/vscode/compare/v2.9.0...v3.0.0) (2023-09-02)


### ⚠ BREAKING CHANGES

* rework syntax highlighting

### Features

* rework syntax highlighting ([d04578b](https://github.com/catppuccin/vscode/commit/d04578b0201eeaa6834e4e060a7cc22ce6fbbd66))
* **ui:** change input border accents, use accent for enabled options ([#137](https://github.com/catppuccin/vscode/issues/137)) ([d73c6bd](https://github.com/catppuccin/vscode/commit/d73c6bd948b50ac5cd20bb80afeecc2d2598010f))


### Bug Fixes

* **ui:** reduce current search highlight opacity ([#135](https://github.com/catppuccin/vscode/issues/135)) ([4db87ba](https://github.com/catppuccin/vscode/commit/4db87ba9fa2336dd92ce9c468c72a4238a6681f3)), closes [#133](https://github.com/catppuccin/vscode/issues/133)

## [2.9.0](https://github.com/catppuccin/vscode/compare/v2.8.2...v2.9.0) (2023-09-01)


### Features

* **options:** support hex codes in `catppuccin.customUIColors` ([#126](https://github.com/catppuccin/vscode/issues/126)) ([6df739f](https://github.com/catppuccin/vscode/commit/6df739f9c7dce789216f4afd76df21e3fb3abb14)), closes [#109](https://github.com/catppuccin/vscode/issues/109)
* **ui:** consistently use peach for warnings & yellow for modified ([22ee5cf](https://github.com/catppuccin/vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* **ui:** rework minimap colors ([#129](https://github.com/catppuccin/vscode/issues/129)) ([a9c0e0d](https://github.com/catppuccin/vscode/commit/a9c0e0d1fee9925ee904da033a2e228f80e583f1))
* **ui:** use accent color for more focused elements ([#128](https://github.com/catppuccin/vscode/issues/128)) ([2b1a8a7](https://github.com/catppuccin/vscode/commit/2b1a8a7d9a0c687519ec72e4b333ecbe71c43f09)), closes [#91](https://github.com/catppuccin/vscode/issues/91)
* **ui:** use neovim-style search highlighting ([#131](https://github.com/catppuccin/vscode/issues/131)) ([ef9b76c](https://github.com/catppuccin/vscode/commit/ef9b76cd700682c74d1e9488ce9701564204dcb8)), closes [#103](https://github.com/catppuccin/vscode/issues/103)


### Bug Fixes

* style error/warning/info consistently ([22ee5cf](https://github.com/catppuccin/vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* **syntax:** PHP dollar sign highlighting ([#115](https://github.com/catppuccin/vscode/issues/115)) ([373cca4](https://github.com/catppuccin/vscode/commit/373cca4e0eac22f4eabca5a13b8a95422b8db007))

## [2.8.2](https://github.com/catppuccin/vscode/compare/v2.8.1...v2.8.2) (2023-08-29)


### Bug Fixes

* **terminal:** use style guide colors ([#122](https://github.com/catppuccin/vscode/issues/122)) ([83d8848](https://github.com/catppuccin/vscode/commit/83d884843ec500e1755cfa16a4d8770714513927))
* **ui:** marketplace pre-release button & separator ([#125](https://github.com/catppuccin/vscode/issues/125)) ([46833aa](https://github.com/catppuccin/vscode/commit/46833aacb92870d6b9ea33d261f45754ce8506f2)), closes [#119](https://github.com/catppuccin/vscode/issues/119)
* **ui:** typos & deprecated color keys ([ef235d5](https://github.com/catppuccin/vscode/commit/ef235d5eb014939eb008a43a5fa850949bb5588d))

## [2.8.1](https://github.com/catppuccin/vscode/compare/v2.8.0...v2.8.1) (2023-08-28)


### Bug Fixes

* **ui:** offline styles & borders for `statusBar` ([eaa1ef8](https://github.com/catppuccin/vscode/commit/eaa1ef883a6ce1d18680707496311c7ba38aea8c))
* **ui:** style banners (e.g. restricted mode) ([326f530](https://github.com/catppuccin/vscode/commit/326f530eeecbd53be87b4beb274f0f85d2380030)), closes [#117](https://github.com/catppuccin/vscode/issues/117)
