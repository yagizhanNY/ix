// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxSplitButton, IxSplitButtonItem } from '@siemens/ix-react';
import React from 'react';

export const SplitbuttonIcons: React.FC = () => {
  return (
    <IxSplitButton label="Action text">
      <IxSplitButtonItem label="Item 1" icon="cut"></IxSplitButtonItem>
      <IxSplitButtonItem label="Item 2" icon="bulb"></IxSplitButtonItem>
    </IxSplitButton>
  );
};
