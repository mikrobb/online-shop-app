import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import HomePage from "./CardsJs/HomePage";
import Shop from "./CardsJs/Shop";
import Unit from "./CardsJs/Unit";
import Login from "./CardsJs/Login";
import Registration from "./CardsJs/Registration";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartFavArr } from "./Store/reposReducer";

export let stafArr = [
  {
    id: 1,
    categoria: ["Accessories", "All"],
    another: "All",
    name: "Vintage Louis Vuitton Monogram Fold Purse",
    actual: "In Stock",
    price: 85,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1493_1800x1800.jpg?v=1668189386",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1494_500x.jpg?v=1668189386",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1495_500x.jpg?v=1668189386",
    info: "Vintage Louis Vuitton Monogram fold purse, 100% authentic, very minimal use.",
  },
  {
    id: 2,
    categoria: ["Bags", "All"],
    another: "All",
    name: "Vintage 90s Tommy Hilfiger Big Flag Backpack",
    actual: "In Stock",
    price: 31,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_7886_1800x1800.png?v=1643997999",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_7887_500x.png?v=1643997999",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_7888_500x.png?v=1643997998",
    info: "Vintage 90s Tommy Hilfiger big flag backpack, mark to front should wash off.",
  },
  {
    id: 3,
    categoria: ["Bottoms", "All"],
    another: "All",
    name: "Dark Denim End X Levi's 505 Regular Selvedge Jeans ",
    actual: "In Stock",
    price: 121,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1349_1800x1800.jpg?v=1667674709",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1350_500x.jpg?v=1667674709",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1352_500x.jpg?v=1667674710",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1353_500x.jpg?v=1667674709",
    img5: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1351_1800x1800.jpg?v=1667674709",
    info: "Dark Denim End x Levi's 505 Regular Selvedge jeans, straight leg fit. Brand new with tags. RRP £195.",
    parametrs: '32" Waist - 32" Inside Leg',
  },
  {
    id: 4,
    categoria: ["Dresses", "All"],
    another: "All",
    name: "Vintage 1990s Versace Jeans Couture Velour Long Sleeve Dress",
    actual: "In Stock",
    price: 302,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_8337_1800x1800.png?v=1645871180",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_8338_1800x1800.png?v=1645871181",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_8341_500x.png?v=1645871182",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_8342_500x.png?v=1645871181",
    img5: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_8343_500x.png?v=1645871181",
    info: "Vintage 1990s Versace Jeans Couture Velour Long sleeve dress with all over gold/yellow/black print, incredible item in person, big zipper to back, would be great if altered to fit to a perfect size.",
    parametrs: '18" Pit to pit - 15" Waist - 34" Length - 18" Armpit to cuff',
  },
  {
    id: 5,
    categoria: ["Fleeces", "All"],
    another: "All",
    name: "Vintage Womens Blue Reebok Fitness Fleece Jacket",
    actual: "In Stock",
    price: 31,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1362_1800x1800.jpg?v=1667754841",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1363_1800x1800.jpg?v=1667754840",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1364_500x.jpg?v=1667754841",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1365_500x.jpg?v=1667754841",
    info: "Vintage Womens Blue Reebok fitness fleece jacket.",
    parametrs: '19" Pit to pit - 24" Collar to hem',
  },
  {
    id: 6,
    categoria: ["Gilets", "All"],
    another: "All",
    name: "Vintage Dark Grey Kangol Puffer Gilet",
    actual: "In Stock",
    price: 43,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1285_1800x1800.jpg?v=1667505715",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1288_500x.jpg?v=1667505716",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1286_500x.jpg?v=1667505715",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1287_1800x1800.jpg?v=1667505715",
    info: "Vintage Dark Grey Kangol Puffer Gilet with spell out to collar.",
    parametrs: '22" Pit to pit - 26" Collar to hem',
  },
  {
    id: 7,
    categoria: ["Hats", "All"],
    another: "All",
    name: "Vintage 90s Navy Polo Sport Youth Bucket Hat",
    actual: "In Stock",
    price: 19,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0650_1800x1800.jpg?v=1657737631",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0651_500x.jpg?v=1657737632",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0652_500x.jpg?v=1657737631",
    info: "Vintage 90s Navy Polo Sport Youth bucket hat.",
    parametrs: 'Fits Small (6.75" Diameter)',
  },
  {
    id: 8,
    categoria: ["Jackets", "All"],
    another: "All",
    name: "Vintage 90s Adidas Planet Big Logo Track Jacket",
    actual: "In Stock",
    price: 43,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1507_1800x1800.jpg?v=1668454621",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1512_500x.jpg?v=1668454621",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1509_500x.jpg?v=1668454622",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1510_500x.jpg?v=1668454622",
    img5: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1511_500x.jpg?v=1668454622",
    info: "Vintage 90s Adidas Planet big logo colour block track jacket with big back logo.",
    parametrs: '26" Pit to pit - 29" Collar to hem',
  },
  {
    id: 9,
    categoria: ["Polo", "All"],
    another: "All",
    name: "Vintage 90s Nike Jordan Abstract Print L/S Polo Shirt",
    actual: "In Stock",
    price: 181,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_9950_1800x1800.jpg?v=1650554780",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_9951_1800x1800.jpg?v=1650554780",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_9952_500x.jpg?v=1650554780",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_9953_1800x1800.jpg?v=1650554779",
    info: "Vintage 90s Nike Air Jordan abstract all over print long sleeve polo shirt, Jordan embroidery to cuff finished with metal buttons to collar.",
    parametrs: '22" Pit to pit - 25" Collar to hem',
  },
  {
    id: 10,
    categoria: ["Zips", "All"],
    another: "All",
    name: "Vintage 90s Orange Polo Sport Hooded Poncho",
    actual: "In Stock",
    price: 49,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1295_1800x1800.jpg?v=1667505505",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1298_500x.jpg?v=1667505504",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1296_500x.jpg?v=1667505504",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1297_500x.jpg?v=1667505504",
    info: "Vintage 90s Orange Polo Sport Hooded lightweight Poncho, big back logo.",
    parametrs: '25" Pit to pit - 26" Collar to hem',
  },
  {
    id: 11,
    categoria: ["Scarfs", "All"],
    another: "All",
    name: "Vintage Tweed Burberry Nova Check Cashmere Scarf",
    actual: "In Stock",
    price: 55,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_7958_1800x1800.png?v=1644341023",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_7959_500x.png?v=1644341023",
    info: "Vintage Tweed Burberry Nova Check Cashmere Scarf.",
  },
  {
    id: 12,
    categoria: ["Shirts", "All"],
    another: "All",
    name: "Vintage Tan Burberry Nova Check L/S Shirt",
    actual: "In Stock",
    price: 103,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0475_1800x1800.jpg?v=1656779916",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0476_500x.jpg?v=1656779917",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_0477_88272131-f970-40f6-abe4-40183e935e59_500x.jpg?v=1656779917",
    info: "Vintage Tan Burberry Nova Check long sleeve button down shirt.",
    parametrs: '24.5" Pit to pit - 28" Collar to hem',
  },
  {
    id: 13,
    categoria: ["Shoes", "All"],
    another: "All",
    name: "2013 Nike Zoom Hyperfuse Trainers UK8",
    actual: "In Stock",
    price: 44,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_6716_1800x1800.png?v=1640360193",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_6717_500x.png?v=1640360193",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_6718_500x.png?v=1640360194",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_6719_500x.png?v=1640360194",
    img5: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_6721_500x.png?v=1640360194",
    info: "2013 White Nike Zoom Hyperfuse trainers, great condition with two small flaws to ankle as shown.",
    parametrs: "Uk 8",
  },
  {
    id: 14,
    categoria: ["Sweatshirts", "All"],
    another: "All",
    name: "Baby Blue Ralph Lauren Hoody",
    actual: "In Stock",
    price: 33,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1516_1800x1800.jpg?v=1668454113",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1517_500x.jpg?v=1668454113",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1518_500x.jpg?v=1668454113",
    info: "Baby Blue Ralph Lauren basics hoody.",
    parametrs: '24" Pit to pit - 27" Collar to hem',
  },
  {
    id: 15,
    categoria: ["T-Shirts", "All"],
    another: "All",
    name: "Vintage 1998 World Cup England Bully T-Shirt",
    actual: "In Stock",
    price: 43,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1519_1800x1800.jpg?v=1668453928",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1520_500x.jpg?v=1668453928",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1521_500x.jpg?v=1668453928",
    info: "Vintage 1998 World Cup England Beware of the Bulldog t-shirt.",
    parametrs: '22" Pit to pit - 28" Collar to hem',
  },
  {
    id: 16,
    categoria: ["T-Shirts", "All"],
    another: "All",
    name: "Vintage White Aquascutum House Check T-Shirt",
    actual: "In Stock",
    price: 38,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1513_1800x1800.jpg?v=1668454462",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1514_500x.jpg?v=1668454461",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1515_500x.jpg?v=1668454462",
    info: "Vintage White Aquascutum House Check T-shirt.",
    parametrs: '20" Pit to pit - 27" Collar to hem',
  },
  {
    id: 17,
    categoria: ["T-Shirts", "All"],
    another: "All",
    name: "Vintage 90s Grey Hard Rock Cafe Bangkok T-Shirt",
    actual: "In Stock",
    price: 31,
    img1: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1525_1800x1800.jpg?v=1668453541",
    img2: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1522_500x.jpg?v=1668453541",
    img3: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1524_500x.jpg?v=1668453541",
    img4: "https://cdn.shopify.com/s/files/1/1817/7775/products/IMG_1526_500x.jpg?v=1668453548",
    info: "Vintage 1998 World Cup England Beware of the Bulldog t-shirt.",
    parametrs: '22" Pit to pit - 28" Collar to hem',
  },
];

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function App() {
  const cartFavArr = useSelector((state) => state.repos.cartFavArr);
  const dispatch = useDispatch();

  if (!getFromLocalStorage("cartArr")) {
    setToLocalStorage("cartArr", []);
  }

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop stafArr={stafArr} />} />
        <Route
          path="/shop/:id"
          element={
            <Unit
              setToLocalStorage={setToLocalStorage}
              getFromLocalStorage={getFromLocalStorage}
              stafArr={stafArr}
              cartFavArr={cartFavArr}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
