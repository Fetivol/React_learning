import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import Profile from './Profile';
import { user, friends, transactions, data } from 'data';
import Statistics from './Statistics';
import FriendList from './FriendList';
import Transactions from './Transactions';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
      React homework template
      <GlobalStyle />
    </Layout>
  );
};
