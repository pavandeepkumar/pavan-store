// import React from "react";
// import { useState, useEffect } from "react";
// import { Carousel,QRCode } from "antd";
// import { Image } from "antd";
// import { Rate } from "antd";
// import { Card } from "antd";


// import { useParams } from "react-router-dom";

// const Images = () => {
//   const { id } = useParams();
//   console.log("my id is pavandeep kumar", id);
//   const [product, setProduct] = useState(null);
//   const API = "https://dummyjson.com/products/1";
//   const contentStyle = {
//     height: "160px",
//     color: "#fff",
//     lineHeight: "160px",
//     textAlign: "center",
//     background: "#364d79",
//   };

//   useEffect(() => {
//     fetch(`${API}${id}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setProduct(result); // Assuming the API returns the product details as an object
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//         setProduct(null); // Set product to null in case of an error
//       });
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>; // Display a loading message until the product data is fetched
//   }
//   const image = product.images;
//   console.log(image);

//   return (
//     <div>
//     <QRCode value="https://github.com/pavandeepkumar" status="active" icon="https://m.media-amazon.com/images/I/71ehTJs9bFL._SL1182_.jpg"></QRCode>
//     <QRCode value="https://www.linkedin.com/in/pavandeep-kumar-0b0366231/" status="active" icon="https://media.licdn.com/dms/image/D4D03AQHrd86zBw948Q/profile-displayphoto-shrink_800_800/0/1683811280261?e=1694044800&v=beta&t=2P7QzDThd6F3mx-iuUSKmsoTC3SfJHk-qEhUN-vx6Ko" iconSize={30}></QRCode>
//       <h1>My name is pavandeep kkumar</h1>
//       <Carousel autoplay style={{ height: 200, width: 200 }}>
//         <div>
//           <h3 style={contentStyle}>
//             <Image width={200} height={200} src={product.images[0]} />
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             <Image width={200} height={200} src={product.images[1]} />
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             <Image width={200} height={200} src={product.images[2]} />
//           </h3>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Images;
