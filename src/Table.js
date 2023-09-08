import logo from "./logo.svg";
import "./style.css";
import { useState, useEffect } from "react";

function Table() {
  var [pageNo, setpageNo] = useState(1);
  var [list, setlist] = useState([]);
  useEffect(() => {
    search(); //to fetch data from server on page change
  }, [pageNo]);
  function search() {
    var m = document.getElementsByName("month");
    var s = document.getElementsByName("search");
    console.log(s[0].value);
    let v = s[0].value;
    let month = m[0].value;
    if (s[0].value.length == 0) {
      v = " ";//assinging a value,since it would throw error while fetching data if it remains empty
    }
    fetch("http://localhost:2100/search/" + v + "/" + pageNo + "/" + month)
      .then((res) => res.json())
      .then((data) => {
        setlist(data);
      })
      .catch((err) => console.log(err));
  }
  function page(x) {
    //making sure pageNo doesn't becomes zero
    if (x == -1 || page > 1) {
      setpageNo(pageNo - 1);
    } else if (x == 1) {
      setpageNo(pageNo + 1);
    } else {
      alert("already on first page");
    }
  }
  return (
    <div className="table">
      <h2>Product table by Month</h2>
      <input type="text" name="search"></input>
      <button onClick={search}>Search</button>
      <select name="month">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3" selected="selected">
          March
        </option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <div>
        <button
          onClick={() => {
            page(-1);
          }}
        >
          Previous
        </button>{" "}
        {pageNo}{" "}
        <button
          onClick={() => {
            page(1);
          }}
        >
          Next
        </button>
      </div>
      <table>{/*Creating table with predefined headings */}
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Sold</th>
          <th>Image</th>
        </tr>
        {console.log(list)}
        {list.length != 0 ? (
          list.map((a) => {//using map to generate rows for fetched data
            return (
              <tr>
                <td className="smallCol">{a.id}</td>
                <td>{a.title}</td>
                <td id="description">{a.description}</td>
                <td>{a.category}</td>
                <td className="smallCol">{a.price}</td>
                <td className="smallCol">{a.sold ? "Yes" : "No"}</td>
                <td>
                  <img src={a.image} alt="productImage" />
                </td>
              </tr>
            );
          })
        ) : (
          <h3>{/*Error message display*/}
            Either nothing matched your search or there isn't anything on next
            page
          </h3>
        )}
      </table>
    </div>
  );
}

export default Table;
