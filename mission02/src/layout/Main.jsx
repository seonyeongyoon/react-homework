//import ProductList from "@/Pages/ProductList";
import Category from "./Category";

function Main() {
  return (
    <div className="pt-16">
      <Category />
      <div>
        <a href="/shop">
          <img src="./src/assets/visual.gif" alt=""/>
        </a>
      </div>
      <ProductList />
    </div>
  );
}

export default Main;