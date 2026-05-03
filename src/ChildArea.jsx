const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

export const ChildArea = (props) => {

  const data = [...Array(2000).keys()];
  data.forEach(() => {})
  const { open } = props;
  return (
    <div>
        {open && (
        <div style={style}>
          <p>surti</p>
        </div>
        )}
    </div>
  );
};