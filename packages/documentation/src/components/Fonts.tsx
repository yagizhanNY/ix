// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import clsx from 'clsx';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './Fonts.module.css';
import { useCopyToClipboard } from './utils/copy-clipboard';

export default function Fonts() {
  const copyToClipboard = useCopyToClipboard((data) => `text-${data}`);
  const fonts: {
    name: string;
    className: string;
  }[] = [
    {
      name: 'xsmall',
      className: 'text-xs',
    },
    {
      name: 'small',
      className: 'text-s',
    },
    {
      name: 'caption',
      className: 'text-caption',
    },
    {
      name: 'caption-single',
      className: 'text-caption-single',
    },
    {
      name: 'default',
      className: 'text-default',
    },
    {
      name: 'default-single',
      className: 'text-default-single',
    },
    {
      name: 'large',
      className: 'text-l',
    },
    {
      name: 'large-single',
      className: 'text-l-single',
    },
    {
      name: 'h2',
      className: 'text-h2',
    },
    {
      name: 'display-large',
      className: 'text-xl',
    },
  ];
  return (
    <>
      <ToastContainer />
      <table className={clsx(styles.Table)}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {fonts.map((v) => (
            <tr key={v.name}>
              <td>{v.name}</td>
              <td>
                <input
                  className="form-control"
                  defaultValue={v.className}
                  onFocus={(e) => {
                    copyToClipboard(e.target as HTMLInputElement);
                  }}
                />
              </td>
              <td>
                <div className={v.className}>{v.name}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
