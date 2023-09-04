import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;

  padding: 4px 16px;

  &:first-letter {
    text-transform: uppercase;
  }
`;
