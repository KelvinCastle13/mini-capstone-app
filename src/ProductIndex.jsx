export function ProductIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.products.length} products</h1>
      {props.products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <img src={product.image} alt="" />
          <p>product.body</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}
