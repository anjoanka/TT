import '../css/Product.css'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useEffect, useState } from "react";

const mockProduct = {
  name: "Мереживна накидка",
  image: "https://etnodim.ua/storage/product/3688/e6ACPcsqViIdDXXtcbL6SLIJJ6JHa0lWxRss3zmM.jpg",
  features: [
    "Якісний гіпоалергенний матеріал",
    "Вирівнювання, приховування недоліків",
    "Акція: -50 грн на другу покупку",
  ],
};

function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProduct(mockProduct);
    }, 1000);
  }, []);

  if (!product) {
    return <p>Завантаження товару...</p>;
  }

  return (
    <div className="product-info">
      <h1 className="product-name">{product.name}</h1>
      <img className='product-img' src={product.image} alt={product.name} />
      {product.features.map((feature, index) => (
        <div key={index} className="product-description">
          <CheckCircleOutlineRoundedIcon sx={{ fontSize: 45 }} className="icon" />
          <p>{feature}</p>
        </div>
      ))}
    </div>
  );

}

export default Product