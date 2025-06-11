import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import Profile from './Profile';
import { user, friends, transactions, data } from 'data';
import Statistics from './Statistics';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics data={data} />
      React homework template
      <GlobalStyle />
    </Layout>
  );
};
