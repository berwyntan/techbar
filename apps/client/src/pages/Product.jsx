import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios"; // axios for api call
import { useParams, useNavigate } from "react-router-dom"; // to redirect between pages
import { useAppContext } from "../context/UseAppContext"; // getting app context to add product into cart
import ImageGallery from "react-image-gallery"; // getting image gallery for product images

const Product = ({ user }) => {
  let { productid } = useParams(); // getting product id from url
  const { addToCart } = useAppContext(); // add to cart function
  const navigate = useNavigate(); // navigate method for redirecting to other pages

  const [product, setProduct] = useState({}); // product state
  const [productimages, setProductImages] = useState(); // setting product images

  const [quantity, setQunatity] = useState(1); // default quantity is 1

  const [loading, setLoading] = useState(true); // default loading true

  // ! get product data
  const getData = async (id) => {
    try {
      //! GET PRODUCT FROM BACKEND API CALL
      const { data } = await axios.get(`/api/product/${id}`);
      // console.log(data);

      if (data.status === true) {
        // set product into state
        setProduct(data.products);
        let arr = [];

        //! add images in product images
        data.products.images.forEach((ele) => {
          let obj = {
            original: ele/*.url*/,
            thumbnail: ele/*.url*/,
          };

          arr.push(obj);
        });

        setProductImages(arr);
        setLoading(false); // loading false
      } else {
        //! if product data not found go to -> products
        navigate("/products");
      }
    } catch (e) {
      console.log(e);
      navigate("/products");
    }
  };

  useEffect(() => {
    // this function runs when page first load and when product id gets changed
    getData(productid);
  }, [productid]);

  // increment product quantity
  const addquantity = () => {
    setQunatity(quantity + 1);
  };

  // decrement product quantity
  const subtractquantity = () => {
    if (quantity > 1) {
      setQunatity(quantity - 1);
    }
  };

  //! add to cart funcion
  const add = async () => {
    await addToCart(product._id, quantity);
  };

  // ! rendering our ui
  if (loading) {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <>
        <Header user={user} />
        <br />
        <br />
        <br />
        {/* Main item container */}
        <main className="productitem">
          <section className="img">
            <ImageGallery items={productimages} showPlayButton={false} />
          </section>

          <section className="productprice">
            <h2 className="price-sub__heading">{product.category.category}</h2>
            <h1 className="price-main__heading">{product.name}</h1>
            <p
              className="price-txt"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
            <div className="price-box">
              <div className="price-box__main">
                <span className="price-box__main-new">${product.price}</span>
              </div>
            </div>
            <div className="price-btnbox">
              <div
                className="quantity quantitycol"
                style={{ width: "25%", marginTop: "0px" }}
              >
                <div className="input-group quantity-container">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      onClick={subtractquantity}
                      className="quantity-left-minus btn btn-number"
                      data-type="minus"
                      data-field=""
                    >
                      <span className="glyphicon glyphicon-minus">-</span>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    value={quantity}
                    min="1"
                    max="100"
                    readOnly
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      onClick={addquantity}
                      className="quantity-right-plus btn btn-number"
                      data-type="plus"
                      data-field=""
                    >
                      <span className="glyphicon glyphicon-plus">+</span>
                    </button>
                  </span>
                </div>{" "}
              </div>
              <button
                onClick={add}
                className="btn price-cart__btn btn--orange"
                style={{
                  height: "40px",
                  background: "#7635f0",
                  color: "white",
                }}
              >
                Add to cart
              </button>
            </div>
          </section>
        </main>
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }
};

export default Product;
