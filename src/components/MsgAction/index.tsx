import * as C from "./styles";
import { Close } from "@mui/icons-material";

type Props = {
  error: boolean;
  msg: string;
  isMsg: boolean;
  close: () => void;
};

export const MsgAction = ({ error, msg, isMsg, close }: Props) => {
  return (
    <C.Container error={error} msg={isMsg}>
      <C.Body>
        <div className="message">{msg}</div>
        <div className="iconClose" onClick={() => close()}>
          <Close />
        </div>
      </C.Body>
    </C.Container>
  );
};
