import "./App.css";
import block1 from "./img/Block1.png";
import block2 from "./img/Block2.png";
import block3 from "./img/Block3.png";
import block4 from "./img/Block4.png";
import block5 from "./img/Block5.png";
import block6 from "./img/Block6.png";

function App() {
  return (
    <div>
      <header className="Slider_block">
        <div className="Header_main_block">
          <div className="Header_block">
            <div className="Header_span">HOME</div>
            <div className="Header_span">SHOP</div>
            <div className="Header_span">LOGIN</div>
          </div>
          <div className="Header_block">
            <div className="Title_span">SerjixVintage</div>
          </div>
          <div className="Header_block">
            <div className="Header_span">SEARCH</div>
            <div className="Header_span">ACCOUNT</div>
            <div className="Header_span">YOUR CART</div>
          </div>
        </div>
        <div className="Btn_shop">SHOP NOW</div>
      </header>

      <h2 className="Arr_block_title">NEW ARRIVALS</h2>

      <section className="Section_Blocks_Sale">
        <div className="Block_Sale">
          <div className="Block_Img">
            <img src={block1} alt="photo 1" className="Block_Sale_Img" />
          </div>
          <span>Vintage 90s Adidas Planet Big Logo Track Jacket</span>
          <span className="Price_Sale">$43.00</span>
        </div>
        <div className="Block_Sale">
          <div className="Block_Img">
            <img src={block2} alt="photo 1" className="Block_Sale_Img" />
          </div>
          <span>Vintage White Aquascutum House Check T-Shirt</span>
          <span className="Price_Sale">$37.00</span>
        </div>
        {/* <div className="Block_Sale">
          <div className="Block_Img">
            <img src={block3} alt="photo 1" className="Block_Sale_Img" />
          </div>
          <span>Baby Blue Ralph Lauren Hoody</span>
          <span className="Price_Sale">$33.00</span>
        </div> */}
        <div className="Block_Sale">
          <div className="Block_Img">
            <img src={block4} alt="photo 1" className="Block_Sale_Img" />
          </div>
          <span>Vintage 1998 World Cup England Bully T-Shirt</span>
          <span className="Price_Sale">$43.00</span>
        </div>
        <div className="Block_Sale">
          <div className="Block_Img">
            <img src={block5} alt="photo 1" className="Block_Sale_Img" />
          </div>
          <span>Vintage 90s Grey Hard Rock Cafe Bangkok T-Shirt</span>
          <span className="Price_Sale">$31.00</span>
        </div>
      </section>

      <div className="Btn_shop_View">VIEW ALL</div>
      <div className="Slider_Block_Second"></div>

      <section>
        <div className="Categories_Blocks">
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block3} alt="photo 1" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Sweatshirts</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block6} alt="photo 1" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Fleeces</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block2} alt="photo 1" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">T-shirts</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block1} alt="photo 1" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Jackets</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
