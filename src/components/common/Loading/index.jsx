import * as React from "react";
import LoadingView from "./LoadingView";
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

  const propsLoadingView = { open };

  return <LoadingView {...propsLoadingView} />;
}
