import React from "react";
import { Button, Icon } from "react-materialize";
import { mainSyle } from "../style/mainStyle";

const ReloadStatusButton = ({ changeUpdate, update }) => {
  const style = mainSyle();
  return (
    <Button
      className={`${style.colors.btn} ${style.alighn.folatRight}`}
      floating
      icon={<Icon>update</Icon>}
      large
      node="button"
      waves="light"
      onClick={() => changeUpdate(!update)}
    />
  );
};

export default ReloadStatusButton;
