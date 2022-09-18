import React from 'react';
import friendStyle from './friendList.module.css'

export default function FriendListItem(props) {
  const styles = {
    backgroundColor: props.isOnline ? 'green' : 'red'
  }
  return (
    <li className={friendStyle.item}>
      <span className={friendStyle.status} style={styles}></span>
      <img className={friendStyle.avatar} src={props.avatar} alt="User avatar" width="48" />
      <p className={friendStyle.name}>{props.name}</p>
    </li>
  );
}
