import React from 'react';
import {
  Button,
  List,
  ListItem,
  StatsList,
  StatsListItem,
  Wrapper,
} from './Feedback.styled';

function Stats({ statistics: { good, neutral, bad } }) {
  return (
    <StatsList>
      <StatsListItem>Good: {good}</StatsListItem>
      <StatsListItem>Neutral: {neutral}</StatsListItem>
      <StatsListItem>Bad: {bad}</StatsListItem>
    </StatsList>
  );
}

function Feedback() {
  const [state, setState] = React.useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleFeedback(key) {
    setState(prev => ({ ...prev, [key]: prev[key] + 1 }));
  }

  return (
    <Wrapper>
      <h3>Feedback</h3>
      <List>
        {Object.keys(state).map(key => (
          <ListItem key={key}>
            <Button onClick={() => handleFeedback(key)}>{key}</Button>
          </ListItem>
        ))}
      </List>

      <h3>Statistics:</h3>
      <Stats statistics={state} />
    </Wrapper>
  );
}

export default Feedback;
