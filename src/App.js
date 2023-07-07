import { Image, Table } from "antd";
import { useRef } from "react";
import { Input } from "antd";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Images from "./components/Images";

function App() {
  const [columns, setColumns] = useState([
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record) => (
        <Link to={`/product/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (value, record) => (
        <Link to={`/product/${record.id}`}>
          <Image
            src={value}
            alt={`Image ${record.id}`}
            style={{ maxWidth: "150px" }}
          />
        </Link>
      ),
    },
  ]);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result.products);
      });
  }, []);

  // Function to handle the main search functionality
  const handleMainSearch = () => {
    // Filter the data based on the main search text
    const filteredData = dataSource.filter((record) => {
      const allColumns = columns.map((col) =>
        record[col.dataIndex].toString().toLowerCase()
      );
      return allColumns.some((colValue) =>
        colValue.includes(searchText.toLowerCase())
      );
    });

    return filteredData;
  };

  return (
    <div>
    <h1 style={{backgroundColor:"blue",color:"white",textAlign:"center",borderRadius:10,margin:0,padding:10,position:"sticky"}}>Pavan Store</h1>
      {/* Main search bar */}
      <Input.Search
        placeholder="Search anything..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onPressEnter={handleMainSearch}
        // style={{width:400,margin:20,marginLeft:500}}
        bordered={true}
        // placeholder="Search anything..."
        // value={searchText}
        // onChange={(e) => setSearchText(e.target.value)}
        // onPressEnter={handleMainSearch}
        // style={{ width: "500px", margin: "20px", border: "2px solid black" ,marginLeft:500,fontSize:900 }}
      />
      <Router>
        <Routes>
          {/* Use the filtered data for the Table */}
          <Route
            path="/"
            element={<Table columns={columns} dataSource={handleMainSearch()} bordered={true} />}
          />
          <Route path="/" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id/:id" element={<Images />} />
        </Routes>
      </Router>
    </div>
  );
}

export function Search() {
  fetch("https://dummyjson.com/products/search?q=phone")
    .then((res) => res.json())
    .then(console.log);
  return (
    <input type="text" />
  );
}
export default App;
