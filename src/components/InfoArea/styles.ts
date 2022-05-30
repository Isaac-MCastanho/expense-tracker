import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const MonthArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  font-size: 25px;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  transition: background ease 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
