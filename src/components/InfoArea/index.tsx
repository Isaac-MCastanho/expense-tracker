import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  expense: number;
  income: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  expense,
  income,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <ArrowBackIosNewIcon />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>

        <C.MonthArrow onClick={handleNextMonth}>
          <ArrowForwardIosIcon />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          color={income - expense < 0 ? "red" : "green"}
          title="Balanço"
          value={income - expense}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
