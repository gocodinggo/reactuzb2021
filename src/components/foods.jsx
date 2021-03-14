import { Component } from "react";
import { getFoods } from "../services/fakeFoods";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getCategories } from "../services/fakeCategories";
import ListGroup from "./common/list-group";
class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
    selectedCategory: {},
  };

  handleDelete = (food) => {
    const { _id } = food;
    const foods = this.state.foods.filter((food) => food._id !== _id);
    this.setState({ foods });
  };

  handleToggleLike = (selectedFood) => {
    const { foods } = this.state;
    const index = foods.indexOf(selectedFood);
    foods[index] = {
      ...selectedFood,
      liked: !foods[index].liked,
    };
    this.setState({ foods });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectItem = (selectedItem) => {
    this.setState({ selectedCategory: selectedItem });
  };

  componentDidMount() {
    const foods = getFoods();
    const categories = getCategories();
    this.setState({ foods, categories: [{ name: "Barchasi" }, ...categories] });
  }

  render() {
    const {
      foods,
      pageSize,
      currentPage,
      categories,
      selectedCategory,
    } = this.state;
    const count = foods.length;

    const paginated = paginate(foods, currentPage, pageSize);

    if (count === 0) return <p>Bizda ma`lumotlar mavjud emas !</p>;

    return (
      <div className='row'>
        <div className='col-2'>
          <ListGroup
            items={categories}
            onSelectItem={this.handleSelectItem}
            selectedItem={selectedCategory}
          />
        </div>
        <div className='col'>
          <p>Bizda {count} ta mahsulot bor.😊</p>
          <table className='table table-bordered text-center'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((food) => (
                <tr key={food._id}>
                  <td>{food.title}</td>
                  <td>{food.category.name}</td>
                  <td>{food.price}</td>
                  <td>{food.amount}</td>
                  <td>{food.unit}</td>
                  <td>
                    <Like
                      liked={food.liked}
                      onToggleLike={() => this.handleToggleLike(food)}
                    />
                    <button
                      onClick={() => this.handleDelete(food)}
                      className='btn btn-danger btn-sm'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            countItems={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Foods;
