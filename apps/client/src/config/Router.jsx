import { BrowserRouter, Routes, Route } from "react-router-dom"; // setting app redirection router
import { useAppContext } from "../context/UseAppContext"; // importing app ontect to get user and loading state

// importing all pages
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import CategoryProducts from "../pages/CategoryProducts";
import MyOrders from "../pages/MyOrders";
import OrderDetail from "../pages/OrderDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

function AppRouter() {
  const { user, loading } = useAppContext(); // getting user and loading state from app state

  // if loading render loading
  if (loading) {
    return (
      <>
        <div className="loadingscreen">
          <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
            Loading...
          </h2>
        </div>
      </>
    );
  } else if (!user || !user._id) {
    // if there is no user, provide all pages except <myorder>, <orderdetail>  and <checkout page>
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route
            exact
            path="/categoryproducts/:category"
            element={<CategoryProducts />}
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productid" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound loading={loading} />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (user._id) {
    // if user provide all pages except signin and signup page
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route
            exact
            path="/categories"
            element={<Categories user={user} />}
          />
          <Route
            exact
            path="/categoryproducts/:category"
            element={<CategoryProducts user={user} />}
          />
          <Route exact path="/products" element={<Products user={user} />} />
          <Route
            exact
            path="/product/:productid"
            element={<Product user={user} />}
          />
          <Route exact path="/cart" element={<Cart user={user} />} />
          <Route exact path="/checkout" element={<Checkout user={user} />} />
          <Route exact path="/myorders" element={<MyOrders user={user} />} />
          <Route
            exact
            path="/orderdetails/:orderid"
            element={<OrderDetail user={user} />}
          />
          <Route path="*" element={<NotFound loading={loading} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
