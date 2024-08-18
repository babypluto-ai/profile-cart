function Loader() {
  return (
    <div className="loader absolute inset-0 flex items-center justify-center bg-rose-200/20 backdrop-blur-sm">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default Loader;
