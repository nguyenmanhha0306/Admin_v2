import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import { productData } from "../../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://i.pinimg.com/236x/b5/c2/63/b5c26348f0cdd8e9712e5a249dc582e2.jpg"
              className="productImg"
              alt=""
            />
            <span className="productName">MacBook Pro Study</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">112</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sale:</span>
              <span className="productInfoValue">232</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in Stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productButton">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="MacBook Pro" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://i.pinimg.com/564x/bd/1c/72/bd1c724e9efd6b7d1a19f5bfbad12587.jpg"
                className="productUploadImg"
                alt=""
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
