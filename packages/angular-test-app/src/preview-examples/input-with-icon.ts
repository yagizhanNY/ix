// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  template: `
    <form class="needs-validation m-2">
      <ix-input-group>
        <span slot="input-start">Price</span>
        <input type="number" class="form-control" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </ix-input-group>
    </form>
  `,
})
export class InputWithIcon {}
