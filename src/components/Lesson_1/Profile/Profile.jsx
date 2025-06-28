import React from 'react';
import {
  Avatar,
  Description,
  NameText,
  ProfileContainer,
  ProfileList,
  TagText,
} from './Profile.styled';

function UserStats({ stats }) {
  return (
    <ProfileList>
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <span>{key.replace(key.charAt(0), key.charAt(0).toUpperCase())}</span>
          <span>{value}</span>
        </li>
      ))}
    </ProfileList>
  );
}

function Profile({ user: { username, tag, location, avatar, stats } }) {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <NameText>{username}</NameText>
        <TagText>@{tag}</TagText>
        <TagText>{location}</TagText>
      </Description>
      <UserStats stats={stats} />
    </ProfileContainer>
  );
}

export default Profile;
