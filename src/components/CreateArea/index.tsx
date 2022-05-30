import * as C from "./styles";
import { categories } from "./../../data/categories";
import { useState } from "react";
import * as yup from "yup";
import { Message } from "./../../App";
import { newDateAdjusted } from "./../../helpers/dateFilter";
import { Item } from "./../../types/Item";

type Props = {
  handleError: (err: Message) => void;
  addNewItem: (newItem: Item) => void;
};

export const CreateArea = ({ handleError, addNewItem }: Props) => {
  const [user, setUser] = useState({
    dateField: "",
    categoryField: "",
    titleField: "",
    valueField: 0,
  });

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = async () => {
    if (!(await validate())) return;

    let newItem = {
      date: newDateAdjusted(user.dateField),
      category: user.categoryField,
      title: user.titleField,
      value: user.valueField,
    };
    addNewItem(newItem);
    setUser({
      dateField: "",
      categoryField: "",
      titleField: "",
      valueField: 0,
    });
  };

  const validate = async () => {
    let schema = yup.object().shape({
      titleField: yup.string().required("Erro: Preencha o título!"),
      categoryField: yup.string().required("Erro: Selecione uma categoria!"),
      dateField: yup.string().required("Erro: Selecione uma data!"),
      valueField: yup
        .number()
        .min(1, "Erro:Valor menor que R$ 1")
        .required("Erro: Preencha o campo valor!"),
    });

    try {
      await schema.validate(user);
      return true;
    } catch (err: any) {
      handleError({
        error: true,
        msg: err.errors[0],
        isMsg: true,
      });
      return false;
    }
  };

  return (
    <C.Container>
      <div className="sectionResponsive">
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input
            type="date"
            value={user.dateField}
            onChange={(e) => setUser({ ...user, dateField: e.target.value })}
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select
            value={user.categoryField}
            onChange={(e) =>
              setUser({ ...user, categoryField: e.target.value })
            }
          >
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
      </div>
      <div className="sectionResponsive">
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input
            type="text"
            value={user.titleField}
            onChange={(e) => setUser({ ...user, titleField: e.target.value })}
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input
            type="number"
            value={user.valueField}
            onChange={(e) =>
              setUser({ ...user, valueField: parseFloat(e.target.value) })
            }
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </div>
    </C.Container>
  );
};
