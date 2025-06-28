import React from 'react';
import { ListElement, Section } from './Statistics.styled';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Statistics({ data }) {
  return (
    <Section>
      <h2>Upload stats</h2>

      <ul>
        {data.map(el => (
          <ListElement key={el.id} bgcolor={getRandomColor()}>
            <span>{el.label}</span>
            <span>{el.percentage}%</span>
          </ListElement>
        ))}
      </ul>
    </Section>
  );
}

export default Statistics;
