import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';
import TextWidget from './TextWidget';
import TemplateController from './TemplateContoller';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  template: {
    width: (props: any) => props.width,
    height: (props: any) => props.height,
    backgroundColor: '#dddddd',
    position: 'relative',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
});

export default () => {
  const [templateWidth, setWidth] = useState(300);
  const [templateHeight, setHeight] = useState(500);
  const [templateBg, setBg] = useState('');
  const [widgets, setWidgets] = useState([] as any[]);

  const templateProps: any = { width: templateWidth, height: templateHeight };

  const classes = useStyles(templateProps);

  const handleWidthChange: React.ChangeEventHandler<HTMLInputElement> = (evt) =>
    setWidth(Number(evt.target.value));

  const handleHeightChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => setHeight(Number(evt.target.value));

  const handleBgChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => setBg(reader.result as string),
      false
    );
    if (evt.target.files) {
      reader.readAsDataURL(evt.target.files[0]);
    }
  };

  const handleWidgetAdd = () => {
    const styles = {
      top: '0px',
      left: '0px',
      fontSize: '16px',
      color: '#333333',
      fontWeight: '500',
    };
    const defaultProps = {
      id: '123456',
      title: '',
      styles,
    };
    setWidgets([...widgets, defaultProps]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.template} data-testid="template">
        {templateBg ? (
          <img
            className={classes.bgImg}
            src={templateBg}
            alt="template-bg-img"
          />
        ) : null}
        {widgets.map((widget) => {
          const { title, id } = widget;
          return <TextWidget title={title} key={id} />;
        })}
      </div>

      <TemplateController
        templateWidth={templateWidth}
        templateHeight={templateHeight}
        handleWidthChange={handleWidthChange}
        handleHeightChange={handleHeightChange}
        handleBgChange={handleBgChange}
      />
      <Button
        data-testid="textWidgetAdd"
        onClick={handleWidgetAdd}
        variant="contained"
        color="primary"
        component="span"
      >
        添加文字组件
      </Button>
    </div>
  );
};
