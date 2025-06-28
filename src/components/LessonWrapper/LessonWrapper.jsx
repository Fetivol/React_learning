import React from 'react';
import { Wrapper } from './LessonWrapper.styled';

function LessonWrapper({ title, children }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
}

export default LessonWrapper;
