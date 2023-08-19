import styled from 'styled-components';


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
`;

export const Th = styled.th`
  background-color: #f3f3f3;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;


Td:last-child 
  border-right: none;
}`;
