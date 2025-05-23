import type { ThemeContext, WorkbenchColors } from "@/types";
import { mix, opacity, shade, transparent } from "./utils";
import extensions from "./extensions";
import uiCustomizations from "./ui";

export const getUiColors = (
  context: ThemeContext,
): Partial<Record<keyof WorkbenchColors, string>> => {
  const { palette, paletteAnsi, options, isLatte } = context;

  const accent = palette[options.accent];
  const dropBackground = opacity(accent, 0.2);
  const border = options.extraBordersEnabled
    ? opacity(palette.overlay1, 0.15)
    : transparent;

  // find the definitions here:
  // https://code.visualstudio.com/api/references/theme-color
  return {
    // Base colors
    focusBorder: accent,
    foreground: palette.text,
    disabledForeground: palette.subtext0,
    "widget.shadow": opacity(palette.mantle, 0.5),
    "selection.background": opacity(accent, 0.4),
    descriptionForeground: palette.text,
    errorForeground: palette.red,
    "icon.foreground": accent,
    "sash.hoverBorder": accent,

    // Window border
    "window.activeBorder": transparent,
    "window.inactiveBorder": transparent,

    // Text colors
    "textBlockQuote.background": palette.mantle,
    "textBlockQuote.border": palette.crust,
    "textCodeBlock.background": palette.mantle,
    "textLink.activeForeground": palette.sky,
    "textLink.foreground": palette.blue,
    "textPreformat.foreground": palette.text,
    "textSeparator.foreground": accent,

    // Activity Bar
    "activityBar.background": palette.crust,
    "activityBar.foreground": accent,
    "activityBar.dropBorder": dropBackground,
    "activityBar.inactiveForeground": palette.overlay0,
    "activityBar.border": border,
    "activityBarBadge.background": accent,
    "activityBarBadge.foreground": palette.crust,
    "activityBar.activeBorder": transparent,
    "activityBar.activeBackground": transparent,
    "activityBar.activeFocusBorder": transparent,
    "activityBarTop.foreground": accent,
    "activityBarTop.activeBorder": transparent,
    "activityBarTop.inactiveForeground": palette.overlay0,
    "activityBarTop.dropBorder": dropBackground,

    "badge.background": palette.surface1,
    "badge.foreground": palette.text,

    "breadcrumb.activeSelectionForeground": accent,
    "breadcrumb.background": palette.base,
    "breadcrumb.focusForeground": accent,
    "breadcrumb.foreground": opacity(palette.text, 0.8),
    "breadcrumbPicker.background": palette.mantle,

    // buttons & checkboxes
    "button.background": accent,
    "button.foreground": palette.crust,
    "button.border": transparent,
    "button.separator": transparent,
    "button.hoverBackground": shade(accent, 0.07),
    "button.secondaryForeground": palette.text,
    "button.secondaryBackground": palette.surface2,
    "button.secondaryHoverBackground": shade(palette.surface2, 0.07),
    "checkbox.background": palette.surface1,
    "checkbox.border": border,
    "checkbox.foreground": accent,

    // dropdown controls
    "dropdown.background": palette.mantle,
    "dropdown.listBackground": palette.surface2,
    "dropdown.border": accent,
    "dropdown.foreground": palette.text,

    // debug
    "debugToolBar.background": palette.crust,
    "debugToolBar.border": transparent,
    "debugExceptionWidget.background": palette.crust,
    "debugExceptionWidget.border": accent,
    "debugTokenExpression.number": palette.peach,
    "debugTokenExpression.boolean": palette.mauve,
    "debugTokenExpression.string": palette.green,
    "debugTokenExpression.error": palette.red,

    // debug icons
    "debugIcon.breakpointForeground": palette.red,
    "debugIcon.breakpointDisabledForeground": opacity(palette.red, 0.6),
    "debugIcon.breakpointUnverifiedForeground": mix(
      palette.red,
      palette.surface2,
      0.5,
    ),
    "debugIcon.breakpointCurrentStackframeForeground": palette.surface2,
    "debugIcon.breakpointStackframeForeground": palette.surface2,
    "debugIcon.startForeground": palette.green,
    "debugIcon.pauseForeground": palette.blue,
    "debugIcon.stopForeground": palette.red,
    "debugIcon.disconnectForeground": palette.surface2,
    "debugIcon.restartForeground": palette.teal,
    "debugIcon.stepOverForeground": palette.mauve,
    "debugIcon.stepIntoForeground": palette.text,
    "debugIcon.stepOutForeground": palette.text,
    "debugIcon.continueForeground": palette.green,
    "debugIcon.stepBackForeground": palette.surface2,
    "debugConsole.infoForeground": palette.blue,
    "debugConsole.warningForeground": palette.peach,
    "debugConsole.errorForeground": palette.red,
    "debugConsole.sourceForeground": palette.rosewater,
    "debugConsoleInputIcon.foreground": palette.text,

    // testing
    "testing.runAction": accent,
    "testing.iconErrored": palette.red,
    "testing.iconFailed": palette.red,
    "testing.iconPassed": palette.green,
    "testing.iconQueued": palette.blue,
    "testing.iconUnset": palette.text,
    "testing.iconSkipped": palette.subtext0,
    "testing.iconErrored.retired": palette.red,
    "testing.iconFailed.retired": palette.red,
    "testing.iconPassed.retired": palette.green,
    "testing.iconQueued.retired": palette.blue,
    "testing.iconUnset.retired": palette.text,
    "testing.iconSkipped.retired": palette.subtext0,
    "testing.peekBorder": accent,
    "testing.peekHeaderBackground": palette.surface2,
    "testing.message.error.lineBackground": opacity(palette.red, 0.15),
    "testing.message.info.decorationForeground": opacity(palette.green, 0.8),
    "testing.message.info.lineBackground": opacity(palette.green, 0.15),
    "testing.messagePeekBorder": accent,
    "testing.messagePeekHeaderBackground": palette.surface2,
    "testing.coveredBackground": opacity(palette.green, 0.3),
    "testing.coveredBorder": transparent,
    "testing.coveredGutterBackground": opacity(palette.green, 0.3),
    "testing.uncoveredBranchBackground": opacity(palette.red, 0.2),
    "testing.uncoveredBackground": opacity(palette.red, 0.2),
    "testing.uncoveredBorder": transparent,
    "testing.uncoveredGutterBackground": opacity(palette.red, 0.25),
    "testing.coverCountBadgeBackground": transparent,
    "testing.coverCountBadgeForeground": accent,

    "diffEditor.border": palette.surface2,
    "diffEditor.insertedTextBackground": opacity(palette.green, 0.2),
    "diffEditor.removedTextBackground": opacity(palette.red, 0.2),
    "diffEditor.insertedLineBackground": opacity(palette.green, 0.15),
    "diffEditor.removedLineBackground": opacity(palette.red, 0.15),
    "diffEditor.diagonalFill": opacity(palette.surface2, 0.6),
    "diffEditorOverview.insertedForeground": opacity(palette.green, 0.8),
    "diffEditorOverview.removedForeground": opacity(palette.red, 0.8),

    "editor.background": palette.base,
    "editor.findMatchBackground": mix(palette.base, palette.red, 0.3),
    "editor.findMatchBorder": opacity(palette.red, 0.2),
    "editor.findMatchHighlightBackground": mix(palette.base, palette.sky, 0.3),
    "editor.findMatchHighlightBorder": opacity(palette.sky, 0.2),
    "editor.findRangeHighlightBackground": mix(palette.base, palette.sky, 0.3),
    "editor.findRangeHighlightBorder": opacity(palette.sky, 0.2),
    "editor.foldBackground": opacity(palette.sky, 0.25),
    "editor.foreground": palette.text,
    "editor.hoverHighlightBackground": opacity(palette.sky, 0.25),
    "editor.lineHighlightBackground": opacity(palette.text, 0.07),
    "editor.lineHighlightBorder": transparent,
    "editor.rangeHighlightBackground": opacity(palette.sky, 0.25),
    "editor.rangeHighlightBorder": transparent,

    "editor.selectionBackground": opacity(
      palette.overlay2,
      isLatte ? 0.3 : 0.25,
    ),
    "editor.selectionHighlightBackground": opacity(palette.overlay2, 0.2),
    "editor.selectionHighlightBorder": opacity(palette.overlay2, 0.2),
    "editor.wordHighlightBackground": opacity(palette.overlay2, 0.2),
    "editor.wordHighlightStrongBackground": opacity(
      palette.blue,
      isLatte ? 0.15 : 0.2,
    ),

    "editorBracketMatch.background": opacity(palette.overlay2, 0.1),
    "editorBracketMatch.border": palette.overlay2,
    "editorCodeLens.foreground": palette.overlay1,
    "editorCursor.background": palette.base,
    "editorCursor.foreground": palette.rosewater,
    "editorGroup.border": palette.surface2,
    "editorGroup.dropBackground": dropBackground,
    "editorGroup.emptyBackground": palette.base,
    "editorGroupHeader.tabsBackground": palette.crust,
    "editorGutter.addedBackground": palette.green,
    "editorGutter.background": palette.base,
    "editorGutter.commentRangeForeground": palette.surface0,
    "editorGutter.commentGlyphForeground": accent,
    "editorGutter.deletedBackground": palette.red,
    "editorGutter.foldingControlForeground": palette.overlay2,
    "editorGutter.modifiedBackground": palette.yellow,
    "editorHoverWidget.background": palette.mantle,
    "editorHoverWidget.border": palette.surface2,
    "editorHoverWidget.foreground": palette.text,
    "editorIndentGuide.activeBackground": palette.surface2,
    "editorIndentGuide.background": palette.surface1,
    "editorInlayHint.foreground": palette.surface2,
    "editorInlayHint.background": opacity(palette.mantle, 0.75),
    "editorInlayHint.typeForeground": palette.subtext1,
    "editorInlayHint.typeBackground": opacity(palette.mantle, 0.75),
    "editorInlayHint.parameterForeground": palette.subtext0,
    "editorInlayHint.parameterBackground": opacity(palette.mantle, 0.75),
    "editorLineNumber.activeForeground": accent,
    "editorLineNumber.foreground": palette.overlay1,
    "editorLink.activeForeground": accent,
    "editorMarkerNavigation.background": palette.mantle,
    "editorMarkerNavigationError.background": palette.red,
    "editorMarkerNavigationInfo.background": palette.blue,
    "editorMarkerNavigationWarning.background": palette.peach,
    "editorOverviewRuler.background": palette.mantle,
    "editorOverviewRuler.border": opacity(palette.text, 0.07),
    "editorOverviewRuler.modifiedForeground": palette.yellow,
    "editorRuler.foreground": palette.surface2,
    // breakpoints
    "editor.stackFrameHighlightBackground": opacity(palette.yellow, 0.15),
    "editor.focusedStackFrameHighlightBackground": opacity(palette.green, 0.15),
    "editorStickyScrollHover.background": palette.surface0,
    "editorSuggestWidget.background": palette.mantle,
    "editorSuggestWidget.border": palette.surface2,
    "editorSuggestWidget.foreground": palette.text,
    "editorSuggestWidget.highlightForeground": accent,
    "editorSuggestWidget.selectedBackground": palette.surface0,
    "editorWhitespace.foreground": opacity(palette.overlay2, 0.4),
    "editorWidget.background": palette.mantle,
    "editorWidget.foreground": palette.text,
    "editorWidget.resizeBorder": palette.surface2,
    "editorLightBulb.foreground": palette.yellow,

    // errors & warnings
    "editorError.foreground": palette.red,
    "editorError.border": transparent,
    "editorError.background": transparent,
    "editorWarning.foreground": palette.peach,
    "editorWarning.border": transparent,
    "editorWarning.background": transparent,
    "editorInfo.foreground": palette.blue,
    "editorInfo.border": transparent,
    "editorInfo.background": transparent,
    "problemsErrorIcon.foreground": palette.red,
    "problemsInfoIcon.foreground": palette.blue,
    "problemsWarningIcon.foreground": palette.peach,

    // extensions marketplace
    "extensionButton.prominentForeground": palette.crust,
    "extensionButton.prominentBackground": accent,
    "extensionButton.separator": palette.base,
    "extensionButton.prominentHoverBackground": shade(accent, 0.07),
    "extensionBadge.remoteBackground": palette.blue,
    "extensionBadge.remoteForeground": palette.crust,
    "extensionIcon.starForeground": palette.yellow,
    "extensionIcon.verifiedForeground": palette.green,
    "extensionIcon.preReleaseForeground": palette.surface2,
    "extensionIcon.sponsorForeground": palette.pink,

    // git colors
    "gitDecoration.addedResourceForeground": palette.green,
    "gitDecoration.conflictingResourceForeground": palette.mauve,
    "gitDecoration.deletedResourceForeground": palette.red,
    "gitDecoration.ignoredResourceForeground": palette.overlay0,
    "gitDecoration.modifiedResourceForeground": palette.yellow,
    "gitDecoration.stageDeletedResourceForeground": palette.red,
    "gitDecoration.stageModifiedResourceForeground": palette.yellow,
    "gitDecoration.submoduleResourceForeground": palette.blue,
    "gitDecoration.untrackedResourceForeground": palette.green,

    "input.background": palette.surface0,
    "input.border": transparent,
    "input.foreground": palette.text,
    "input.placeholderForeground": opacity(palette.text, 0.45),
    "inputOption.activeBackground": palette.surface2,
    "inputOption.activeBorder": accent,
    "inputOption.activeForeground": palette.text,
    "inputValidation.errorBackground": palette.red,
    "inputValidation.errorBorder": opacity(palette.crust, 0.2),
    "inputValidation.errorForeground": palette.crust,
    "inputValidation.infoBackground": palette.blue,
    "inputValidation.infoBorder": opacity(palette.crust, 0.2),
    "inputValidation.infoForeground": palette.crust,
    "inputValidation.warningBackground": palette.peach,
    "inputValidation.warningBorder": opacity(palette.crust, 0.2),
    "inputValidation.warningForeground": palette.crust,

    // Lists and trees
    "list.activeSelectionBackground": palette.surface0, // currently selected in file tree
    "list.activeSelectionForeground": palette.text,
    "list.dropBackground": dropBackground,
    "list.focusBackground": palette.surface0, // when using keyboard to move around files
    "list.focusForeground": palette.text,
    "list.focusOutline": transparent,
    "list.highlightForeground": accent,
    "list.hoverBackground": opacity(palette.surface0, 0.5), // when hovering over the file tree
    "list.hoverForeground": palette.text,
    "list.inactiveSelectionBackground": palette.surface0, // currently selected focused in editor
    "list.inactiveSelectionForeground": palette.text,
    "list.warningForeground": palette.peach,
    "listFilterWidget.background": palette.surface1,
    "listFilterWidget.noMatchesOutline": palette.red,
    "listFilterWidget.outline": transparent,
    "tree.indentGuidesStroke": palette.overlay2,
    "tree.inactiveIndentGuidesStroke": palette.surface1,

    "menu.background": palette.base,
    "menu.border": options.extraBordersEnabled
      ? palette.surface2
      : opacity(palette.base, 0.5),
    "menu.foreground": palette.text,
    "menu.selectionBackground": palette.surface2,
    "menu.selectionBorder": transparent,
    "menu.selectionForeground": palette.text,
    "menu.separatorBackground": palette.surface2,
    "menubar.selectionBackground": palette.surface1,
    "menubar.selectionForeground": palette.text,

    "merge.commonContentBackground": palette.surface1,
    "merge.commonHeaderBackground": palette.surface2,
    "merge.currentContentBackground": opacity(palette.green, 0.2),
    "merge.currentHeaderBackground": opacity(palette.green, 0.4),
    "merge.incomingContentBackground": opacity(palette.blue, 0.2),
    "merge.incomingHeaderBackground": opacity(palette.blue, 0.4),

    "minimap.background": opacity(palette.mantle, 0.5),
    "minimap.findMatchHighlight": opacity(palette.sky, 0.3),
    "minimap.selectionHighlight": opacity(palette.surface2, 0.75),
    "minimap.selectionOccurrenceHighlight": opacity(palette.surface2, 0.75),
    "minimap.warningHighlight": opacity(palette.peach, 0.75),
    "minimap.errorHighlight": opacity(palette.red, 0.75),
    "minimapSlider.background": opacity(accent, 0.2),
    "minimapSlider.hoverBackground": opacity(accent, 0.4),
    "minimapSlider.activeBackground": opacity(accent, 0.6),
    "minimapGutter.addedBackground": opacity(palette.green, 0.75),
    "minimapGutter.deletedBackground": opacity(palette.red, 0.75),
    "minimapGutter.modifiedBackground": opacity(palette.yellow, 0.75),

    "notificationCenter.border": accent,
    "notificationCenterHeader.foreground": palette.text,
    "notificationCenterHeader.background": palette.mantle,
    "notificationToast.border": accent,
    "notifications.foreground": palette.text,
    "notifications.background": palette.mantle,
    "notifications.border": accent,
    "notificationLink.foreground": palette.blue,
    "notificationsErrorIcon.foreground": palette.red,
    "notificationsWarningIcon.foreground": palette.peach,
    "notificationsInfoIcon.foreground": palette.blue,

    "panel.background": palette.base,
    "panel.border": palette.surface2,
    "panelSection.border": palette.surface2,
    "panelSection.dropBackground": dropBackground,
    "panelTitle.activeBorder": accent,
    "panelTitle.activeForeground": palette.text,
    "panelTitle.inactiveForeground": palette.subtext0,

    // peek view colors
    "peekView.border": accent,
    "peekViewEditor.background": palette.mantle,
    "peekViewEditorGutter.background": palette.mantle,
    "peekViewEditor.matchHighlightBackground": opacity(palette.sky, 0.3),
    "peekViewEditor.matchHighlightBorder": transparent,
    "peekViewResult.background": palette.mantle,
    "peekViewResult.fileForeground": palette.text,
    "peekViewResult.lineForeground": palette.text,
    "peekViewResult.matchHighlightBackground": opacity(palette.sky, 0.3),
    "peekViewResult.selectionBackground": palette.surface0,
    "peekViewResult.selectionForeground": palette.text,
    "peekViewTitle.background": palette.base,
    "peekViewTitleDescription.foreground": opacity(palette.subtext1, 0.7),
    "peekViewTitleLabel.foreground": palette.text,

    "pickerGroup.border": accent,
    "pickerGroup.foreground": accent,

    "progressBar.background": accent,

    "scrollbar.shadow": palette.crust,
    "scrollbarSlider.activeBackground": opacity(palette.surface0, 0.4),
    "scrollbarSlider.background": opacity(palette.surface2, 0.5),
    "scrollbarSlider.hoverBackground": palette.overlay0,

    "settings.focusedRowBackground": opacity(palette.surface2, 0.2),
    "settings.headerForeground": palette.text,
    "settings.modifiedItemIndicator": accent,
    "settings.dropdownBackground": palette.surface1,
    "settings.dropdownListBorder": transparent,
    "settings.textInputBackground": palette.surface1,
    "settings.textInputBorder": transparent,
    "settings.numberInputBackground": palette.surface1,
    "settings.numberInputBorder": transparent,

    "sideBar.background": palette.mantle,
    "sideBar.dropBackground": dropBackground,
    "sideBar.foreground": palette.text,
    "sideBar.border": border,
    "sideBarSectionHeader.background": palette.mantle,
    "sideBarSectionHeader.foreground": palette.text,
    "sideBarTitle.foreground": accent,

    // banners, such as Restricted Mode
    "banner.background": palette.surface1,
    "banner.foreground": palette.text,
    "banner.iconForeground": palette.text,

    // Status Bar
    "statusBar.background": palette.crust,
    "statusBar.foreground": palette.text,
    "statusBar.border": border,
    // having no folder open shouldn't change the bar
    "statusBar.noFolderBackground": palette.crust,
    "statusBar.noFolderForeground": palette.text,
    "statusBar.noFolderBorder": border,
    // debugging is peach
    "statusBar.debuggingBackground": palette.peach,
    "statusBar.debuggingForeground": palette.crust,
    "statusBar.debuggingBorder": border,
    // remote is blue
    "statusBarItem.remoteBackground": palette.blue,
    "statusBarItem.remoteForeground": palette.crust,
    // different states
    "statusBarItem.activeBackground": opacity(palette.surface2, 0.4),
    "statusBarItem.hoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.prominentForeground": accent,
    "statusBarItem.prominentBackground": transparent,
    "statusBarItem.prominentHoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.errorForeground": palette.red,
    "statusBarItem.errorBackground": transparent,
    "statusBarItem.warningForeground": palette.peach,
    "statusBarItem.warningBackground": transparent,

    // command center
    "commandCenter.foreground": palette.subtext1,
    "commandCenter.inactiveForeground": palette.subtext1,
    "commandCenter.activeForeground": accent,
    "commandCenter.background": palette.mantle,
    "commandCenter.activeBackground": opacity(palette.surface2, 0.2),
    "commandCenter.border": border,
    "commandCenter.inactiveBorder": border,
    "commandCenter.activeBorder": accent,

    // Tab Bar
    "tab.activeBackground": palette.base,
    "tab.activeBorder": transparent,
    "tab.activeBorderTop": accent,
    "tab.activeForeground": accent,
    "tab.activeModifiedBorder": palette.yellow,
    "tab.border": palette.mantle,
    "tab.hoverBackground": shade(palette.base, 0.05),
    "tab.hoverBorder": transparent,
    "tab.hoverForeground": accent,
    "tab.inactiveBackground": palette.mantle,
    "tab.inactiveForeground": palette.overlay0,
    "tab.inactiveModifiedBorder": opacity(palette.yellow, 0.3),
    "tab.lastPinnedBorder": accent,
    "tab.unfocusedActiveBackground": palette.mantle,
    "tab.unfocusedActiveBorder": transparent,
    "tab.unfocusedActiveBorderTop": opacity(accent, 0.3),
    "tab.unfocusedInactiveBackground": shade(palette.mantle, -0.05),

    // Terminal
    "terminal.foreground": palette.text,
    "terminal.ansiBlack": paletteAnsi.normal.black, // color0
    "terminal.ansiRed": paletteAnsi.normal.red, // color1
    "terminal.ansiGreen": paletteAnsi.normal.green, // color2
    "terminal.ansiYellow": paletteAnsi.normal.yellow, // color3
    "terminal.ansiBlue": paletteAnsi.normal.blue, // color4
    "terminal.ansiMagenta": paletteAnsi.normal.magenta, // color5
    "terminal.ansiCyan": paletteAnsi.normal.cyan, // color6
    "terminal.ansiWhite": paletteAnsi.normal.white, // color7
    "terminal.ansiBrightBlack": paletteAnsi.bright.black, // color8
    "terminal.ansiBrightRed": paletteAnsi.bright.red, // color9
    "terminal.ansiBrightGreen": paletteAnsi.bright.green, // color10
    "terminal.ansiBrightYellow": paletteAnsi.bright.yellow, // color11
    "terminal.ansiBrightBlue": paletteAnsi.bright.blue, // color12
    "terminal.ansiBrightMagenta": paletteAnsi.bright.magenta, // color13
    "terminal.ansiBrightCyan": paletteAnsi.bright.cyan, // color14
    "terminal.ansiBrightWhite": paletteAnsi.bright.white, // color15
    "terminal.selectionBackground": palette.surface2,
    "terminal.inactiveSelectionBackground": opacity(palette.surface2, 0.5),
    "terminalCursor.background": palette.base,
    "terminalCursor.foreground": palette.rosewater,
    "terminal.border": palette.surface2,
    "terminal.dropBackground": dropBackground,
    "terminal.tab.activeBorder": accent,
    "terminalCommandDecoration.defaultBackground": palette.surface2,
    "terminalCommandDecoration.successBackground": palette.green,
    "terminalCommandDecoration.errorBackground": palette.red,

    // title bar
    "titleBar.activeBackground": palette.crust,
    "titleBar.activeForeground": palette.text,
    "titleBar.inactiveBackground": palette.crust,
    "titleBar.inactiveForeground": opacity(palette.text, 0.5),
    "titleBar.border": border,

    // welcome page
    "welcomePage.tileBackground": palette.mantle,
    "welcomePage.progress.background": palette.crust,
    "welcomePage.progress.foreground": accent,
    "walkThrough.embeddedEditorBackground": opacity(palette.base, 0.3),

    // symbols in outline, autocomplete, etc.
    "symbolIcon.textForeground": palette.text,
    "symbolIcon.arrayForeground": palette.peach,
    "symbolIcon.booleanForeground": palette.mauve,
    "symbolIcon.classForeground": palette.yellow,
    "symbolIcon.colorForeground": palette.pink,
    "symbolIcon.constantForeground": palette.peach,
    "symbolIcon.constructorForeground": palette.lavender,
    "symbolIcon.enumeratorForeground": palette.yellow,
    "symbolIcon.enumeratorMemberForeground": palette.yellow,
    "symbolIcon.eventForeground": palette.pink,
    "symbolIcon.fieldForeground": palette.text,
    "symbolIcon.fileForeground": accent,
    "symbolIcon.folderForeground": accent,
    "symbolIcon.functionForeground": palette.blue,
    "symbolIcon.interfaceForeground": palette.yellow,
    "symbolIcon.keyForeground": palette.teal,
    "symbolIcon.keywordForeground": palette.mauve,
    "symbolIcon.methodForeground": palette.blue,
    "symbolIcon.moduleForeground": palette.text,
    "symbolIcon.namespaceForeground": palette.yellow,
    "symbolIcon.nullForeground": palette.maroon,
    "symbolIcon.numberForeground": palette.peach,
    "symbolIcon.objectForeground": palette.yellow,
    "symbolIcon.operatorForeground": palette.teal,
    "symbolIcon.packageForeground": palette.flamingo,
    "symbolIcon.propertyForeground": palette.maroon,
    "symbolIcon.referenceForeground": palette.yellow,
    "symbolIcon.snippetForeground": palette.flamingo,
    "symbolIcon.stringForeground": palette.green,
    "symbolIcon.structForeground": palette.teal,
    "symbolIcon.typeParameterForeground": palette.maroon,
    "symbolIcon.unitForeground": palette.text,
    "symbolIcon.variableForeground": palette.text,

    // chart colors
    "charts.foreground": palette.text,
    "charts.lines": palette.subtext1,
    "charts.red": palette.red,
    "charts.blue": palette.blue,
    "charts.yellow": palette.yellow,
    "charts.orange": palette.peach,
    "charts.green": palette.green,
    "charts.purple": palette.mauve,

    ...extensions(context),
    ...uiCustomizations(context),
  };
};
