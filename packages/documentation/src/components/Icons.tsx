// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import ICON_LIST from '@siemens/ix-icons/dist/sample.json';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './Icons.module.css';
import { useCopyToClipboard } from './utils/copy-clipboard';

export default function Icons() {
  const refs = useRef<{ [k: string]: any }>({});

  const [searchIcon, setSearchIcon] = useState<string>();
  const [icons] = useState<string[]>(ICON_LIST.icons);

  const copyToClipboard = useCopyToClipboard({
    angular: (data: any) => `<i class="glyph glyph-${data}"></i>`,
    webcomponent: (data: any) => `<ix-icon name="${data}"></ix-icon>`,
  });
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className={clsx(styles.search)}>
        <span className={clsx(styles.searchLabel)}>Search: </span>
        <input
          placeholder="Search Icon"
          className="form-control"
          onInput={(e) => setSearchIcon((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className={clsx(styles.icons)}>
        {icons
          .filter((icon) => !searchIcon || icon.includes(searchIcon))
          .map((icon) => (
            <div
              key={icon}
              className={clsx(styles.iconTile)}
              onClick={() => copyToClipboard(refs.current[icon])}
            >
              <div>
                <ix-icon name={icon}></ix-icon>
              </div>
              <input
                ref={(r) => {
                  refs.current[icon] = r;
                }}
                className={clsx('form-control', styles.hideInput)}
                type="text"
                readOnly
                value={icon}
                onChange={() => {}}
              ></input>
            </div>
          ))}
      </div>
    </>
  );
}
