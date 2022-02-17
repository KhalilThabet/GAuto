import { React } from "react";
import { useHistory } from "react-router";
import Charge from "./AnimationLoading";

//This function makes sure the databases are refreshed

export default function Reload({Path}) {
  const history = useHistory();
  setTimeout(() => {
    history.push(Path);
  }, 2000);

  return (
    <div>
      <Charge />
    </div>
  );
}
