import React, {Component} from 'react';
import CurrencyFormat from "react-currency-format";
import Moment from "react-moment";
import CategoryService from "../../services/categories-service";

const service = new CategoryService();

class Categories extends Component {

    constructor(props){
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        service.getCategories()
            .then(results => {
                return results.data;
            }).then(data => {
            let categories = data.map((category) => {
                return(
                    <tr>
                        <td>{category.categoryId}</td>
                        <td>{category.title}</td>
                        <td>{category.description}</td>
                    </tr>
                )
            });
            this.setState({categories:categories});
        })
    }

    render() {
        return(
            <div>
                <h2>Categories</h2>

                <table className="table table-hover table-margin" >
                    <thead>
                    <tr className="table-dark">
                        <th>Id</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.categories}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Categories;
