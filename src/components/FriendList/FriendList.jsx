import React from 'react';
import { FriendListContainer, FriendListItem } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <img src={friend.avatar} alt={friend.name} width={48} />
          <p>{friend.name}</p>
          <span style={{ color: friend.isOnline ? 'green' : 'red' }}>
            {friend.isOnline ? 'Online' : 'Offline'}
          </span>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
}

export default FriendList;
