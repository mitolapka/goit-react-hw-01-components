import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
   background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const  Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const  Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;