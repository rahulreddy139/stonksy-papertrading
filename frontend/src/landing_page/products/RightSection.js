function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 mt-5">
          <h2>{productName}</h2>
          <p className="mt-4">{productDescription}</p>
          <div>
            <a href={learnMore} >
              Learn More
            </a>
          </div>
        </div>
        <div className="col p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
