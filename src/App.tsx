import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { useEffect, useState } from "react";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { CreateArea } from "./components/CreateArea/index";
import { MsgAction } from "./components/MsgAction";

export type Message = {
  error: boolean;
  msg: string;
  isMsg: boolean;
};

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [message, setMessage] = useState<Message>({
    error: false,
    msg: "",
    isMsg: false,
  });

  const handleNewItem = (newItem: Item) => {
    let newList = [...list];
    newList.push(newItem);
    setList(newList);
    setMessage({
      error: false,
      msg: "Informação cadastrada!",
      isMsg: true,
    });
  };

  const handleError = (err: Message) => {
    setMessage(err);
  };

  useEffect(() => {
    if (message.isMsg) {
      setTimeout(() => {
        setMessage({
          error: message.error,
          msg: "",
          isMsg: false,
        });
      }, 10000);
    }
  }, [message]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const closeMsg = () => {
    setMessage({
      error: message.error,
      msg: "",
      isMsg: false,
    });
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <CreateArea addNewItem={handleNewItem} handleError={handleError} />
        <TableArea list={filteredList} />
      </C.Body>
      <MsgAction
        close={closeMsg}
        isMsg={message.isMsg}
        error={message.error}
        msg={message.msg}
      />
    </C.Container>
  );
};

export default App;
