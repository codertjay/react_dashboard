import React from 'react';
import './newProduct.css'
import {Publish} from "@material-ui/icons";

function NewProduct() {
    return (
        <div className={'newProduct'}>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>
                            Product Name
                        </label>
                        <input type="text" placeholder={'Apple AirPod'}/>
                        <label>
                            In Stock
                        </label>
                        <select name="inStock" id="isStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active
                        </label>
                        <select name="active" id="isActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">

                            <label htmlFor={'file'}>
                                <Publish/>
                            </label>
                            <input type="file" id={'file'}/>
                        </div>
                        <button className="productButton">
                            Update
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default NewProduct;