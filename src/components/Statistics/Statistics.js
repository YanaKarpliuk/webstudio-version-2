import React from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css';

export default function Statistics(props) {
  const statsComponent = props.stats.map(item => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const styles = {
      backgroundColor: '#' + randomColor
    }

    return (
      <li className={style.item} key={item.id} style={styles}>
        <span className={style.label}>{item.label}</span>
        <span className={style.percentage}>{item.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={style.statistics}>
      {props.title ? <h2 className={style.title}>{props.title}</h2> : ''}
      <ul className={style.stat_list}>{statsComponent}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }))
};
