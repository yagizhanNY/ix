// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { LogicalFilterOperator } from './logical-filter-operator';
export class FilterState {
  public tokens: string[];
  public categories: { id: string; value: string; operator: LogicalFilterOperator }[];
}
