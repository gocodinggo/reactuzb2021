import PropTypes from "prop-types";

const ListGroup = ({
  items,
  onSelectItem,
  selectedItem,
  valueKey = "_id",
  textKey = "name",
}) => {
  return (
    <ul className='list-group'>
      {items.map((item) => {
        const current = selectedItem[valueKey] === item[valueKey];
        return (
          <li
            key={Math.random()}
            className={`list-group-item ${current && "active"}`}
            onClick={() => onSelectItem(item)}>
            {item[textKey]}
            {current && <span>👍🏻</span>}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.propTypes = {
  textKey: PropTypes.string,
  valueKey: PropTypes.string,
  items: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
};

export default ListGroup;
