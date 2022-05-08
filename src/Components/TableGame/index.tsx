import React from 'react';
import { Table, Td } from './styled';

interface TableGameProps {
  fields: number | any;
  alerts: (alert: string) => void;
  clearListAlert: () => void;
}
const TableGame: React.FC<TableGameProps> = ({
  fields,
  alerts,
  clearListAlert,
}: TableGameProps) => {
  const arr = Array.from({ length: fields });
  return (
    <Table>
      <tbody onMouseLeave={e => clearListAlert()}>
        {arr.map((x, iR) => (
          <th
            key={iR}
            style={{
              height: `calc(500px / ${fields})`,
            }}
          >
            {arr.map((x, iC) => (
              <Td
                style={{
                  width: `calc(500px / ${fields})`,
                  height: `calc(500px / ${fields})`,
                }}
                key={iC}
                onMouseOver={e => {
                  let color = 'blue';
                  let target = e.currentTarget;
                  target.classList.toggle(color);
                  alerts(`Row ${iR + 1} Col ${iC + 1}`);
                }}
              ></Td>
            ))}
          </th>
        ))}
      </tbody>
    </Table>
  );
};

export default TableGame;
