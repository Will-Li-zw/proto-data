import React from 'react';
import { useRecoilState } from 'recoil';
import { createUseStyles } from 'react-jss';
import templateState from '../States/template.state';

export default () => {
  const [templateData, _] = useRecoilState(templateState);
  if (!templateData) return null;
  const jsonTemplate = JSON.parse(templateData);

  const { widgets } = jsonTemplate;

  const data = [
    ['李晓明', '180', '66'],
    ['王晓明', '160', '76'],
    ['黄晓明', '190', '86'],
  ];

  console.log(widgets);

  return <div></div>;
};
