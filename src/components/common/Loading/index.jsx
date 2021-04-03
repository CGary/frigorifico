import * as React from "react";
import Telon from "./Telon"
import loadingReducer from "./reducer";
import event, {loadingEvent} from "../../../tools/event";

export default function Loading () {
  console.log({ Loading: "render" });

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const listener = event.addListener(loadingEvent, (show) => {
      setOpen(show);
    });
    return () => {
      listener.remove();
    };
  }, []);

  const propsTelon ={open}

  return (
    <Telon {...propsTelon}/>
  );
};
export { loadingReducer };
