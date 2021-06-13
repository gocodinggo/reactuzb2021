const Prefix = ({ count, data }) => {
  return (
    <p>
      Bizda {count} ta <b>{(data._id && data.name) || "Mahsulot"}</b> bor.
    </p>
  );
};

export default Prefix;
