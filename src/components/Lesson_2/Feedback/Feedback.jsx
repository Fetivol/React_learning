import React from 'react';
import {
  Button,
  List,
  ListItem,
  StatsList,
  StatsListItem,
  Title,
  Wrapper,
} from './Feedback.styled';

function Stats({
  statistics: { good, neutral, bad },
  total,
  positivePercentage,
}) {
  return (
    <StatsList>
      <StatsListItem>Good: {good}</StatsListItem>
      <StatsListItem>Neutral: {neutral}</StatsListItem>
      <StatsListItem>Bad: {bad}</StatsListItem>
      <StatsListItem>Total: {total}</StatsListItem>
      <StatsListItem>Positive feedback: {positivePercentage}%</StatsListItem>
    </StatsList>
  );
}

function ResetFeedback({ setState }) {
  return (
    <Button
      onClick={() => {
        setState({ good: 0, neutral: 0, bad: 0 });
      }}
    >
      Reset stats
    </Button>
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

  function countTotal() {
    return Object.values(state).reduce((sum, value) => (sum += value), 0);
  }

  function positivePercentage() {
    if (countTotal() === 0) return 0;
    return Math.round((state.good / countTotal()) * 100);
  }

  return (
    <Wrapper>
      <Title>Feedback</Title>
      <List>
        {Object.keys(state).map(key => (
          <ListItem key={key}>
            <Button onClick={() => handleFeedback(key)}>{key}</Button>
          </ListItem>
        ))}
      </List>

      <Title>Statistics:</Title>
      {countTotal() !== 0 ? (
        <>
          <Stats
            statistics={state}
            total={countTotal()}
            positivePercentage={positivePercentage()}
          />
          <ResetFeedback setState={setState} />
        </>
      ) : (
        <p>There is no feedback</p>
      )}
    </Wrapper>
  );
}

export default Feedback;
