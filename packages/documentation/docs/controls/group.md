import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-group/props.md';
import Events from './../auto-generated/ix-group/events.md';

import ItemProps from './../auto-generated/ix-group-item/props.md';
import ItemEvents from './../auto-generated/ix-group-item/events.md';

import DropdownItemProps from './../auto-generated/ix-group-dropdown-item/props.md';
import DropdownItemEvents from './../auto-generated/ix-group-dropdown-item/events.md';

import SourceGroup from './../auto-generated/previews/web-component/group.md'
import SourceGroupSuppressed from './../auto-generated/previews/web-component/group-header-suppressed.md'
import SourceGroupCustomEntry from './../auto-generated/previews/web-component/group-custom-entry.md'
import SourceGroupContext from './../auto-generated/previews/web-component/group-context-menu.md'

import SourceReactGroup from './../auto-generated/previews/react/group.md'
import SourceReactGroupSuppressed from './../auto-generated/previews/react/group-header-suppressed.md'
import SourceReactGroupCustomEntry from './../auto-generated/previews/react/group-custom-entry.md'
import SourceReactGroupContext from './../auto-generated/previews/react/group-context-menu.md'

import SourceAngularGroup from './../auto-generated/previews/angular/group.md'
import SourceAngularGroupSuppressed from './../auto-generated/previews/angular/group-header-suppressed.md'
import SourceAngularGroupCustomEntry from './../auto-generated/previews/angular/group-custom-entry.md'
import SourceAngularGroupContext from './../auto-generated/previews/angular/group-context-menu.md'

# Group

## Usage

<Playground
name="group" height="16rem"
frameworks={{
  react: SourceReactGroup,
  angular: SourceAngularGroup,
  javascript: SourceGroup
}}></Playground>

### Suppress header selection

<Playground
name="group-header-suppressed" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactGroupSuppressed,
  angular: SourceAngularGroupSuppressed,
  javascript: SourceGroupSuppressed
}}></Playground>

### Custom group entry

<Playground
name="group-custom-entry" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactGroupCustomEntry,
  angular: SourceAngularGroupCustomEntry,
  javascript: SourceGroupCustomEntry
}}></Playground>

### Group with context menu

:::note

Please note that there is an issue with the slot rendering that can only be fixed with the next major version of Siemens iX.
Luckily there exists a workaround for rendering context menus inside the group component.

:::

To show a context menu place an `ix-dropdown` with `slot="dropdown"` combined with `ix-dropdown-item`'s inside the `ix-group-tag` tag.

<Playground
name="group-context-menu" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactGroupContext,
  angular: SourceAngularGroupContext,
  javascript: SourceGroupContext
}}></Playground>

## Properties (ix-group)

### Props

<Props />

### Events

<Events />

## Properties (ix-group-item)

### Props

<ItemProps />

### Events

<ItemEvents />

## Properties (ix-group-dropdown-item)

### Props

<DropdownItemProps />

### Events

<DropdownItemEvents />
