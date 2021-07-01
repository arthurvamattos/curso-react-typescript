import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 6rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.pink};
  max-width: 80%;
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  border: 0;
  max-width: 80%;
  width: 20rem;
  height: 2.5rem;
  background: ${({ disabled, theme }) =>
    disabled ? "#bbb" : theme.colors.pink};
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;

  :hover {
    transform: scale(1.01);
  }

  :active {
    transform: scale(0.99);
  }
`;
