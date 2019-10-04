import React, {Component} from 'react';

class CategoryInsert extends Component {

    render() {
        return(
            <div>
                <h2>Add category</h2>

                <fieldset>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className=" form-control" value="" />
                        </div>
                    </div>
                    <div className=" form-group row">
                        <label className=" col-sm-2 col-form-label">Description</label>
                        <div className=" col-sm-10">
                            <input type=" text" className=" form-control" value="" />
                        </div>
                    </div>
                    <button className=" btn btn-success" >Submit</button>
                </fieldset>
            </div>
        );
    }
}

export default CategoryInsert;
