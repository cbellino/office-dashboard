import React from 'react';
import WithContext from 'react-with-context';

const InsertCssContext = (getStory) => {
  const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss()); // eslint-disable-line no-underscore-dangle, max-len
    return () => {
      removeCss.forEach(f => f());
    };
  };

  return (
    <WithContext context={{ insertCss }}>
      {getStory()}
    </WithContext>
  );
};

export default InsertCssContext;
