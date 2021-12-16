import styled from 'styled-components';
import { BorderOrange } from '../../styles/blocks/BorderDebugging';
import { Button } from '../../styles/blocks/Button';
import { Container } from '../../styles/blocks/Container';

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  height: 8rem;
  background-color: ${p => p.theme.colors.primaryLight};
  border-bottom: 2px solid ${p => p.theme.colors.primaryLight2};
`;

export const SHeaderContainer = styled.div`
  ${Container}
  /* max-width: 1440px; */
  display: flex;
  align-items: center;
  padding: 0 80px;
  font-size: 1.5rem;
`;

export const LogoContainer = styled.div`
  margin-right: ${p => p.theme.spacing.s48};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Navigation = styled.nav`
  margin-right: ${p => p.theme.spacing.s24};

  display: flex;
  align-items: center;
`;

export const Navlink = styled.li`
  padding: 10px 8px;
  font-weight: 600;
  color: ${p => p.theme.colors.primaryDark2};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.primaryDark};
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavIcon = styled.div`
  color: ${p => p.theme.colors.primaryDark2};
  cursor: pointer;
  transition: all 0.2s ease-out;
  width: 24px;
  height: 24px;
  /* outline: 2px solid red; */

  &:hover {
    color: ${p => p.theme.colors.primaryDark};
  }

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const FTButton = styled.button`
  ${Button}
  border-radius: 50px;
  background-color: transparent;
  box-shadow: inset 0 0 0 2.5px ${p => p.theme.colors.primaryDark2};
  color: ${p => p.theme.colors.primaryDark2};
  height: 45px;
  padding: 1.5rem 1.5rem;
  font-size: 1.5rem;

  &:hover {
    color: ${p => p.theme.colors.primaryLight};
    background-color: ${p => p.theme.colors.primaryDark2};
  }
`;
