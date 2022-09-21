import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import style from './friendList.module.css'

export default function FriendList(props) {
  const friendElement = props.friends.map(item => {
    return (
      <FriendListItem 
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    )
  })

  return (
    <ul className={style.friend_list}>
      {friendElement}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
  }))
};