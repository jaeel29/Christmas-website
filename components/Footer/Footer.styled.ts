import styled from 'styled-components';
import { BorderBlue, BorderOrange, Container } from 'styles/blocks';

export const SFooter = styled.footer`
  padding: 72px 0;
  border-top: 2px solid ${p => p.theme.colors.primaryLight3};
`;

export const FooterContainer = styled.div`
  ${Container}
`;

export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  column-gap: 48px;

  .logo {
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    h1 {
      display: inline-block;
      flex: 0 0 calc((100% / 3) - 32px);
      font-size: 1.5rem;
      color: ${p => p.theme.colors.primaryDark2};
      cursor: pointer;

      &:hover {
        color: ${p => p.theme.colors.primary};
      }
    }
  }
`;
