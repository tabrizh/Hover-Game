import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AlertsContainer,
  Button,
  ContainerApp,
  ListAlert,
  Selector,
  WrapGame,
  WrapSelector,
  WrapTable,
} from './styled';
import { GlobalCSS } from '../themes/GlobalCSS';
import TableGame from '../Components/TableGame';

interface DataFromFetch {
  field: number;
  name: string;
}

export const App: React.FC = () => {
  const timeToClear = 3000;

  const selectRef = useRef<HTMLSelectElement>(null);

  const [fieldsValue, setFieldsValue] = useState<number>();
  const [arrayAlerts, setArrayAlerts] = useState<string[]>([]);
  const [gameModeArr, setgameModeArr] = useState<DataFromFetch[]>([]);

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then(data => {
        data.json().then(x => {
          let initialOption = x[0].field;
          setFieldsValue(initialOption);
          setgameModeArr(x);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  function clearListAlert() {
    setTimeout(() => setArrayAlerts([]), timeToClear);
  }

  return (
    <>
      <ContainerApp>
        <WrapGame>
          <WrapTable>
            <WrapSelector>
              <Selector ref={selectRef} onClick={e => e.preventDefault()}>
                {gameModeArr.map((x, i) => (
                  <option key={x.name} value={x.field}>
                    {x.name}
                  </option>
                ))}
              </Selector>
              <Button
                onClick={() => {
                  let value: number = Number(selectRef.current?.value);
                  setFieldsValue(value);
                }}
              >
                Start
              </Button>
            </WrapSelector>
            <TableGame
              alerts={e => setArrayAlerts([...arrayAlerts, e])}
              fields={fieldsValue}
              clearListAlert={clearListAlert}
            />
          </WrapTable>
          <AlertsContainer>
            <h1 className="title">Squares</h1>
            <ListAlert>
              {arrayAlerts.map((x, i) => (
                <Alert key={i}>
                  <p key={i}>{x}</p>
                </Alert>
              ))}
            </ListAlert>
          </AlertsContainer>
        </WrapGame>
      </ContainerApp>

      {GlobalCSS()}
    </>
  );
};
