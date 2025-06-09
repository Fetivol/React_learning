import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Container, Main } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
export default Layout;
