import React, { useState } from "react";
import "./Premium.css";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

function Premium() {
  const [product, setproduct] = useState({
    name: "diet plan",
    price: 10,
    productBy: "healthy diet plan ",
  });
  const makePayment = (token) => {
    const body = { token, product };
    const headers = {
      "Content-Type": "application/json; ",
    };
    // return fetch(`http://localhost:3001/payment`, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => {
    //     console.log("RESPONCE", response);
    //     const { status } = response;
    //     console.log("STATUS", status);
    //   })
    //   .catch((error) => console.log("error"));
  };
  return (
    <div className="abc1">
      <h1 className="head2">
        Try Premium free for 15 days
        <br />
      </h1>

      <div className="row-sm-6">
        <Box color="red" p={1} className="san1">
          <h1 className="qwe1">
            $0<span className="qwe2">/mo</span>
          </h1>
          <br />
          <br />
          âœ“ Generate daily meal plans
          <br />
          âœ“ Track what you eat
          <br />
          âœ“ Create custom foods and recipes
          <br />
          âœ“ Schedule recurring foods
          <br />
          <div className="zzz">
            âœ“ Plan a week of meals at a time
            <br />
            âœ“ Automatic grocery lists
            <br />
            âœ“ Automatic leftovers
            <br />
            âœ“ Customize every day of the week
            <br />
            âœ“ Print and email your plans
            <br />
            âœ“ Grocery delivery
            <br />
          </div>
        </Box>
      </div>
      <Link to="/main">
        <button className="arp1">Get Started</button>
      </Link>
      <StripeCheckout
        stripeKey="pk_test_51JbTKCSFhbD0CPrvyT7yLYjx4mSJeCasQsfj1P8Um3CnW0kYYyB6UUkxu9xTdwpL1oCDwg8tXONsTzfeMipiQBNj00160FkYJP"
        token={makePayment}
        name="BUY Diet Plan"
        amount={product.price * 100}
      >
        <div className="box2">
          <Box color="rgb(190, 51, 148)" p={1} className="san2">
            <h1 className="qwe1">
              $4.99<span className="qwe2">/mo</span>
            </h1>
            <br />
            <br />
            <div className="www">
              âœ“ Generate daily meal plans
              <br />
              âœ“ Track what you eat
              <br />
              âœ“ Create custom foods and recipes
              <br />
              âœ“ Personalize the generator
              <br />
              âœ“ Schedule recurring foods
              <br />
              âœ“ Plan a week of meals at a time
              <br />
              âœ“ Automatic grocery lists
              <br />
              âœ“ Automatic leftovers
              <br />
              âœ“ Customize every day of the week
              <br />
              âœ“ Print and email your plans
              <br />
              âœ“ Grocery delivery
              <br />
            </div>
          </Box>
        </div>
        <Link to="/main">
          <button className="arp2">Buy this product</button>
        </Link>
      </StripeCheckout>
    </div>
  );
}

export default Premium;