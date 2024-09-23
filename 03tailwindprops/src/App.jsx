import "./App.css";
import Card from "./components/Card";

function App() {
  const multiProducts = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <button>All Products</button>
      <div className="p-1 flex flex-wrap items-center justify-center">
        {multiProducts.map((products, Index) => {
          return <Card key={Index} multiProducts={products} />;
        })}
      </div>
    </>
  );
}

export default App;
