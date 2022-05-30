import styled, { css } from "styled-components";

export const Container = styled.div<{ msg: boolean; error: boolean }>`
  display: flex;
  position: fixed;
  bottom: -50px;
  opacity: 0;
  visibility: hidden;
  left: 0;
  width: 100%;
  justify-content: center;
  transition: all ease 0.5s;

  ${({ msg }) =>
    msg
      ? css`
          opacity: 1;
          visibility: visible;
          bottom: 50px;
        `
      : css``}

  & > div {
    background: ${({ error }) => (error ? "red" : "green")};
  }
`;

export const Body = styled.div`
  color: #fff;

  display: flex;
  text-transform: initial;
  min-width: 300px;
  width: 25%;
  padding: 20px 20px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;

  & .iconClose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 2px;
    transition: background ease 0.3s;
    :hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 500px) {
    min-width: 100px;

    width: 80%;
    font-size: 14px;
    padding: 15px 15px;
  }
  @media (max-width: 400px) {
    width: 90%;
    font-size: 14px;
  }
`;
