import useFetch from ".";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {data &&
        data.products &&
        data.products.length &&
        data.products.map((product) => (
          <p key={product.key}>{product.title}</p>
        ))}
    </div>
  );
};

export default UseFetchHookTest;
