import { FC } from 'react';
import Header from '../Header';
import { Inner, SPage } from './PageLayout.styled';

const PageLayout: FC = ({ children }) => {
  return (
    <SPage>
      {/* Header Here */}
      <Header />
      <Inner>{children}</Inner>
    </SPage>
  );
};

export default PageLayout;
