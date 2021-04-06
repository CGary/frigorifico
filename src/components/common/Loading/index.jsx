import * as React from "react";
import Telon from "./Telon";
import { eventEmitter, loadEvent } from "../../../tools";

export default function Loading() {
  const [open, setOpen] = React.useState(false);
  console.log({ Loading: "render", open });

  React.useEffect(() => {
    const listener = eventEmitter.addListener(loadEvent, (show) => {
      setOpen(show);
    });
    return () => {
      listener.remove();
    };
  }, []);

  const propsTelon = { open };

  return <Telon {...propsTelon} />;
}
