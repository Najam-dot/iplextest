import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/home.module.css";
const Home = () => {
  // const [user, setUser] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setItem(data));
    console.log("data", item);
  }, []);
  const handleSearch = (e) => {
    let search = e.target.value;
  };
  return (
    <div>
      <h1>Home</h1>
      <input placeholder="Search" onChange={handleSearch}></input>
      <table className={styles.table}>
        {item.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                <Link to={{ pathname: "/contact", item }}>Show More</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Home;
