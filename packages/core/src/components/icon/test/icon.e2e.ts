// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('icon', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`icon/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
