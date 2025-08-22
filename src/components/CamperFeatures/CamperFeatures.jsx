import React from 'react';
import { useOutletContext } from 'react-router-dom';
import s from './CamperFeatures.module.css';
import { camperOptions } from '../../constants/camperOptions';
import Icon from '../Icon/Icon';

const CamperFeatures = () => {
  const { currentCamper } = useOutletContext();

  if (!currentCamper) return null;

  return (
    <div className={s.wrapper}>
      <ul className={s.featuresList}>
        {camperOptions.map(opt =>
          currentCamper[opt.key] ? (
            <li key={opt.key} className={s.featureItem}>
              <Icon name={opt.icon} size={20} color="#101828" />
              <span>{opt.label}</span>
            </li>
          ) : null
        )}
      </ul>

      <h2 className={s.title}>Vehicle details</h2>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span>Form</span> {currentCamper.form}
        </li>
        <li className={s.detailsItem}>
          <span>Length</span> {currentCamper.length}
        </li>
        <li className={s.detailsItem}>
          <span>Width</span> {currentCamper.width}
        </li>
        <li className={s.detailsItem}>
          <span>Height</span> {currentCamper.height}
        </li>
        <li className={s.detailsItem}>
          <span>Tank</span> {currentCamper.tank}
        </li>
        <li className={s.detailsItem}>
          <span>Consumption</span> {currentCamper.consumption}
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
