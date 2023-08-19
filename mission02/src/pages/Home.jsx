import Category from "@/layout/Category";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="wrap">
      <Category />
      <div className="border-b border-black">
        <a href="/shop">
          <img src="./src/assets/visual.gif" alt=""/>
        </a>
      </div>
      <ProductList />
    </div>
  );
}

export default Home;