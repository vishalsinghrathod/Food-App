import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import Payment from "../../components/Payment/Payment";
import "./Success.css"



const Success = () => {
  const [loading, setLoading] = useState(true);

const location = useLocation();
  const amount = location.state?.amount || 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="success">
      <div className="outer">
        {loading ? (
          <div className="inner">
            <PropagateLoader color="#36d7b7" />
          </div>
        ) : (
          <div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
                textAlign: "center"
              }}
            >
              😋 One Click Away from Delicious Food!
            </h2>

            <p>
              <Payment amount={amount} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;