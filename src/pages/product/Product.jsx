import './product.css'
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart.";
import {ProductData} from "../../dummyData";
import {Publish} from "@material-ui/icons";

function Product() {
    return (
        <div className={'product'}>

            <div className="productTitleContainer">
                <div className="productTitle">
                    Product
                </div>
                <Link to={'/newProduct'}>
                    <button className="productAddButton">
                        Create
                    </button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ProductData} dataKey={'Sales'} title={'Sales Performance'}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className={'productInfoImg'}/>
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoButton">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>


                    </div>
                </div>

            </div>
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
                            <img
                                src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                                alt="" className="productUploadImg"/>
                            <label for={'file'}>
                                <Publish/>
                            </label>
                            <input type="file" id={'file'} style={{display: 'none'}}/>
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

export default Product;