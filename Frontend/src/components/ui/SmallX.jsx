import classes from "./Ui.module.css";
export const SmallX = ({ onClick }) => (
  <div className={classes["small-x"]}>
    <span className={classes["the-x"]} onClick={onClick}>
      x
    </span>
  </div>
);
