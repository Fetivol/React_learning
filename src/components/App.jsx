import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import LessonWrapper from './LessonWrapper';
import { user, friends, transactions, data } from 'data';
import { Profile, Statistics, FriendList, Transactions } from './Lesson_1';
import { Feedback, Phonebook } from './Lesson_2';

export const App = () => {
  return (
    <Layout>
      <LessonWrapper title="Adding interactivity">
        <Feedback />
        <Phonebook />
      </LessonWrapper>

      <LessonWrapper title="Components and props">
        <Profile user={user} />
        <Statistics data={data} />
        <FriendList friends={friends} />
        <Transactions transactions={transactions} />
      </LessonWrapper>

      <GlobalStyle />
    </Layout>
  );
};
