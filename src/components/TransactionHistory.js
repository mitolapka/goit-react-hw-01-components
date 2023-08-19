import {Table, Td, Th} from './TransactionHistory.styled.js'
export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Td className="table-cell">{item.type}</Td>
            <Td className="table-cell">{item.amount}</Td>
            <Td className="table-cell">{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};