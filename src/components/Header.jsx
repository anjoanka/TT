import React from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import '../css/Header.css'
import { useEffect, useState } from "react";

const mockHeaderData = [
  {
    id: 1,
    icon: <NewReleasesIcon fontSize="large" className="icon"/>,
    title: "Новинка",
    subtitle: "2025 року",
  },
  {
    id: 2,
    icon: <PaymentIcon fontSize="large" className="icon"/>,
    title: "Оплата",
    subtitle: "після перевірки",
  },
  {
    id: 3,
    icon: <LocalShippingIcon fontSize="large" className="icon"/>,
    title: "Швидка",
    subtitle: "доставка",
  },
]

function Header() {
  const [headerItems, setHeaderItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setHeaderItems(mockHeaderData); 
    }, 1000);
  }, []);

  return (
    <div className="header">
      {headerItems.map((item) => (
        <div key={item.id} className="header-item">
          {item.icon}
          <div className="text">
            <span className="bold">{item.title}</span>
            <span>{item.subtitle}</span>
          </div>
        </div> 
      ))}
    </div>
  );
  
}

export default Header;
