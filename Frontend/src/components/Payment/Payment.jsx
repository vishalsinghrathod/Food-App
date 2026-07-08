import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Payment = ({amount}) => {
  const { setCartItems } = useContext(StoreContext);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet.");
      return;
    }

    const options = {
      // Replace with your own Razorpay Test Key ID from Dashboard (e.g., "rzp_test_xxxx")
      // The current key is a public overused tutorial key, which might have restricted payment methods.
      key: "rzp_test_TAaGI9lNVpLgxr", 
      amount: amount * 83 * 100, // Converting USD to INR because Razorpay UPI/QR/PhonePe only work with INR currency
      currency: "INR",
      name: "V-Kitchen",
      description: "Secure Payment Gateway",
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
        setCartItems({});
        window.location.href = "/";
      },
      prefill: {
        name: "Vishal Singh",
        email: "vishal@example.com",
        contact: "8250999999",
      },
      theme: {
        color: "#F37254",
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2 style={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
        🔐 Secure Payment
      </h2>
      <button
        onClick={displayRazorpay}
        style={{
          backgroundColor: "#F37254",
          color: "#fff",
          padding: "12px 30px",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e35a40")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#F37254")}
      >
         Pay ${amount} (₹{amount * 83})
      </button>
    </div>
  );
};

export default Payment;