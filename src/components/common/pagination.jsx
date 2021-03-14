import _ from "lodash"; // underscore

const Pagination = ({ countItems, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(countItems / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <ul className='pagination'>
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${currentPage === page && " active"}`}>
          <a
            className='page-link '
            href='#1'
            onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
