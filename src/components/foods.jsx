import { Component } from "react";
import { getFoods } from "../services/fakeFoods";
import Like from "./common/like";
class Foods extends Component {
  state = {
    foods: getFoods(),
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

  render() {
    const { foods } = this.state;
    const count = foods.length;

    return (
      <>
        <p>
          {count === 0
            ? "Bizda ma`lumotlar mavjud emas !"
            : "Bizda " + count + " ta mahsulot bor.😊"}
        </p>

        {count !== 0 && (
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
              {foods.map((food) => (
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
        )}
      </>
    );
  }
}

export default Foods;
