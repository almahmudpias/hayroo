
import Home from "./home";
import WishList from "./wishlist";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import CartProtectedRoute from "./auth/CartProtectedRoute";
import { LayoutContext } from "./layout";
import { layoutState, layoutReducer } from "./layout/layoutContext";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import PageNotFound from "./layout/PageNotFound";
import ProductDetails from "./productDetails";
import ProductByCategory from "./home/ProductByCategory";
import CheckoutPage from "./order/CheckoutPage";
import Shipping_policy from "./dashboardUser/Shipping_policy";
import Blog from "./dashboardUser/Blog";
import Contact_us from "./dashboardUser/Contact_us";
import terms_condition from "./dashboardUser/terms_condition";
import Refund_policy from "./dashboardUser/Refund_policy";
import Privacy_policy from  "./dashboardUser/Privacy_policy";
import SingleBlog  from "./home/SingleBlog";
export {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  LayoutContext,
  layoutState,
  layoutReducer,
  isAdmin,
  isAuthenticate,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  Shipping_policy,
  Blog,Contact_us,
  Refund_policy,
  terms_condition,
  Privacy_policy,
  SingleBlog
};
