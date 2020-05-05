import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #57574c;

    &:hover {
      color: #999999;
      transition: color 0.2s;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #c2c2b2;
      }

      p {
        font-size: 18px;
        color: #8c8c7f;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #8c8c7f;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #93937f;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #000;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;

    div {
      margin: 0 16px;
      flex: 1;
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
      margin-left: auto;
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
