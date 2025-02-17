import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-drawer/props.md';
import Events from './../auto-generated/ix-drawer/events.md';

import SourceDrawer from './../auto-generated/previews/web-component/drawer.md'
import SourceDrawerFullHeight from './../auto-generated/previews/web-component/drawer-full-height.md'

import SourceReactDrawer from './../auto-generated/previews/react/drawer.md'
import SourceReactDrawerFullHeight from './../auto-generated/previews/react/drawer-full-height.md'

import SourceAngularDrawer from './../auto-generated/previews/angular/drawer.md'
import SourceAngularDrawerFullHeight from './../auto-generated/previews/angular/drawer-full-height.md'

# Drawer

## Usage

<Playground
name="drawer-full-height" height="24rem"
frameworks={{
  react: SourceReactDrawer,
  angular: SourceAngularDrawer,
  javascript: SourceDrawer
}}></Playground>

### Auto height

<Playground
name="drawer" height="24rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDrawerFullHeight,
  angular: SourceAngularDrawerFullHeight,
  javascript: SourceDrawerFullHeight
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
