import React, { useEffect, useState } from "react";

function EmiCalculator() {
  const [principal, setPrincipal] = useState(""); // loan amount
  const [rate, setRate] = useState(""); // annual interest rate
  const [tenure, setTenure] = useState(""); // months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, tenure]);

  const calculateEMI = () => {
    const P = principal;
    const R = rate / 12 / 100; // monthly interest rate
    const N = tenure;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="calculator-content">
      <div className="cost-item">
        <span className="cost-label">Loan Amount (₹):</span>
        <span className="cost-value">
          <input
            type="number"
            className="form-control"
            value={principal}
            placeholder="Enter Amount"
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
        </span>
      </div>
      <div className="cost-item">
        <span className="cost-label">Annual Interest Rate (%):</span>
        <span className="cost-value">
          <input
            type="number"
            value={rate}
            className="form-control"
            placeholder="Enter Interest Rate"
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </span>
      </div>
      <div className="cost-item">
        <span className="cost-label">Tenure (Months):</span>
        <span className="cost-value">
          {" "}
          <input
            type="number"
            className="form-control"
            value={tenure}
            placeholder="Enter Months"
            onChange={(e) => setTenure(Number(e.target.value))}
          />
        </span>
      </div>
      <div className="total-cost">
        <span className="total-label">Total Monthly EMI</span>
        <span className="total-value">
          {emi == "Infinity" || emi == "NaN" ? "₹0" : `₹ ${emi}`}
        </span>
      </div>
    </div>
  );
}

export default EmiCalculator;
