import React, { useState, useEffect } from "react";
import { Table, Rate, Card, Image } from "antd";
import { useParams } from "react-router-dom";

const API = "https://dummyjson.com/products/";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setProduct(null);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate allowHalf defaultValue={rating} />,
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      render: (discountPercentage) => <b>{discountPercentage}</b>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description) => <b>{description}</b>,
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (images) => (
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ccc",
                }}
              >
                <Image width={80} src={image} />
              </div>
            ))}
          </div>
        </Card>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <b>{price}</b>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (brand) => <b>{brand}</b>,
    },
  ];
function handleclick()
{
  alert('thank u')
}
  return (
    <div>
      <Table
        columns={columns}
        dataSource={[product]}
        pagination={false}
        bordered
        rowKey="id"
        style={{ border: "1px solid #ccc", display:"flex",flexDirection:"column" }} // Add border to the table
      />
      <button onClick={handleclick} style={{padding:10,backgroundColor:"blue",borderRadius:10,color:"white",fontWeight:"bolder" ,width:250}}>Buy Now</button>
      <button onClick={()=>alert('very yhank you')} style={{padding:10,backgroundColor:"yellow",borderRadius:10,color:"Black",fontWeight:"bolder" ,width:250}}>Add to Card</button>
    </div>
  );
};

export default ProductDetails;


// ProductDetails.js

// import React, { useEffect, useState } from "react";
// import { Card, Image, Rate } from "antd";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// const ProductDetails = ({products}) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   const fetchProduct = async () => {
//     try {
//       const response = await fetch(`https://dummyjson.com/products/${productId}`);
//       const data = await response.json();
//       setProduct(data); // Assuming data is a single product object
//     } catch (error) {
//       console.error("Error fetching product:", error);
//     }
//   };

//   return (
//     <div>
//     <div className="link-container">
//       <Link to="/" className="Link">
//         <button>Home</button>
//       </Link>
//       <Link to="/card" className="Link">
//         <button>Card</button>
//       </Link>
//       <Link to="/productdetails" className="Link">
//         <button>ProductDatails</button>
//       </Link>
//       <h1 className="">Welcome to pavan Store</h1>
//     </div>
//       <Card>
//         <Image
//           src={product.thumbnail}
//           alt={product.title}
//           style={{ objectFit: "cover", height: 250, width: 200 }}
//         />
//         <h4 style={{ fontSize: 20 }}>{product.title}</h4>
//         <p>
//           <b style={{ fontSize: 20 }}>
//             &#8377;{" "}
//             {parseFloat(
//               product.price - (product.price * product.discountPercentage) / 100
//             ).toFixed(2)}
//           </b>
//           <del>
//             <small> &#8377;{product.price}</small>
//           </del>
//           <strong style={{ color: "blue" }}>
//             {" "}
//             {product.discountPercentage}% <b>Off</b>
//           </strong>
//           <p style={{ color: "green", fontWeight: "bold" }}>
//             FREE Delivery{" "}
//             <del style={{ color: "black", fontWeight: "lighter" }}>
//               {" "}
//               &#8377;70
//             </del>
//           </p>
//         </p>
//         <p> {product.description}</p>
//         <Rate allowHalf defaultValue={product.rating} />
//       </Card>
//     </div>
//   );
// };

// export default ProductDetails;
