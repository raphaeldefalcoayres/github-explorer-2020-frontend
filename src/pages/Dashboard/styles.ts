import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #c5c5c5;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #000;
    color: #c5c5c5;

    &::placeholder {
      color: #57574c;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${shade(0.2, '#04d361')};
    border-radius: 0px 5px 5px 0px;
    border: none;
    color: #000;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.4, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #000;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #c2c2b2;
      }

      p {
        font-size: 18px;
        color: #57574c;
        margin-top: 4px;
      }
    }

    svg {
      color: #343429;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }
`;