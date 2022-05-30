import { Item } from "../../types/Item";
import * as C from "./styles";
import { useEffect } from "react";
import { TableItem } from "./../TableItem/index";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  useEffect(() => {
    //console.log(list);
  }, []);
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={85}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={100}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={80}>Valor</C.TableHeadColumn>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
