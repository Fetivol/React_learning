import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import Profile from './Profile/Profile';
import { user, friends, transactions, data } from 'data';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      React homework template
      <GlobalStyle />
    </Layout>
  );
};
