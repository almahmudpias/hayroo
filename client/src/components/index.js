import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  Shipping_policy,
  Blog,
  Contact_us,
  Privacy_policy,
  Refund_policy,
  terms_condition,
  SingleBlog
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact_us}/>
        <Route path="/privacy-policy" component={Privacy_policy}/>
        <Route path="/refund-policy" component={Refund_policy}/>
        <Route path="/shipping-policy" component={Shipping_policy}/>
        <Route path="/term-conditions" component={terms_condition}/>
        <Route path="/singleblog" component={SingleBlog}/>
        
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      
      </Switch>
    </Router>
  );
};

export default Routes;
