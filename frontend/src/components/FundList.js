import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFunds } from '../services/api';

function FundList() {
  // declare
  const [funds, setFunds] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getFunds()
      // return response if no error
      .then((response) => setFunds(response.data))
      // bonus: error handling
      .catch((err) => {
        console.error("Failed to fetch funds:", err);
        setError("Failed to load funds. Please try again later.");
      });
  }, []);  

  // if got error, set error font to be red and prompt.
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  // loading if data length not return & no error been found.
  if (!funds.length && !error) return <p>Loading funds...</p>;

  return (
    <div>
      <h2>Type of Funds</h2>
      {funds.length === 0 && !error && <p>No funds found.</p>}
      <ul>
        {funds.map((fund) => (
          <li
            key={fund.id}
            style={{
              marginBottom: "10px",
              paddingBottom: "5px",
              borderBottom: "1px dotted #eee",
            }}
          >
            {fund.name}
            <br />
            {/* Show description if have, else show hyphen represent null */}
            {fund.description ? (
              <small style={{ marginLeft: "0px", color: "gray" }}>
                {fund.description}
              </small>
            ) : (
              <small style={{ marginLeft: "0px", color: "lightgray" }}>
                -
              </small>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundList;