import React from 'react';
import WithContext from 'react-with-context';

const InsertCssContext = (s, getStory) => {
  s._insertCss(); // eslint-disable-line no-underscore-dangle

  return (
    <WithContext context={{ insertCss: () => {} }}>
      {getStory()}
    </WithContext>
  );
};

export default InsertCssContext;
