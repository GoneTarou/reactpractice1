export const ChildArea = (props) => {
  const { open } = props;
  return (
    <div>
        {open ? (
        <div>
          <p>surti</p>
        </div>
        ) : null}
    </div>
  );
};