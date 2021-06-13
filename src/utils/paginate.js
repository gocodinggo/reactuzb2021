import _ from "lodash";
export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

/*
items = [1,2,3,4,5,6,7,8,9]
pageSize = 3;
currentPage  = 2;
*/
