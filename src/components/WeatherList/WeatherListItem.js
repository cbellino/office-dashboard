import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { WeatherItemPropType } from './PropTypes';
import InstanceStatusChip from '../InstancesList/InstanceStatusChip';
import s from './WeatherListItem.css';

const WeatherListItem = ({ weatherItem, className }) => {
  const rootClass = classNames(className, s.root);

  return (
    <div className={rootClass}>
      <InstanceStatusChip className={s.manager}>
        <span>{weatherItem.get('temperature')}</span>
      </InstanceStatusChip>
      <div className={s.content}>
        {weatherItem.get('message')}
      </div>
      <div className={s.number}>
        {weatherItem.get('city')}
      </div>
    </div>
  );
};

WeatherListItem.propTypes = {
  weatherItem: WeatherItemPropType.isRequired,
  className: PropTypes.string,
};


export default withStyles(s)(WeatherListItem);
