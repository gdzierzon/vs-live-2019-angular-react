import React from "react";

const CategorySelectList =  props => {
    let items = [];
    props.categories.forEach( category => {
        items.push(<option key={category.categoryId} value={category.categoryId}>{category.title}</option>);
    });

    return (
        <select onChange={props.onSelectionChange}  class="form-control" id="categoryId" name="categoryId">
            {items}
        </select>
    );
}

export default CategorySelectList;
