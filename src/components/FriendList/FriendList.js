import React from "react";
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