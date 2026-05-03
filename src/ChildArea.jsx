import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {

  const data = [...Array(2000).keys()];
  data.forEach(() => {})
  const { open,onClickClose } = props;
  return (
    <div>
        {open && (
        <div style={style}>
          <p>surti</p>
          <button onClick={onClickClose}>suuti</button>
        </div>
        )}
    </div>
  );
});