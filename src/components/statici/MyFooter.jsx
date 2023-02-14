const MyFooter = () => (
  <footer className="d-flex justify-content-center py-4">
    <p className="m-0">
      {" "}
      {"\u00A9"} EpiBooks {new Date().toLocaleDateString()}
    </p>
  </footer>
);

export default MyFooter;
