function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col p-5 mt-5">
          <h2>{productName}</h2>
          <p className="mt-4">{productDescription}</p>

          <div>
            {tryDemo && (
              <a href={tryDemo}>Try Demo</a>
            )}

            {learnMore && (
              <a href={learnMore} style={{ marginLeft: "120px" }}>
                Learn More
              </a>
            )}
          </div>

          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img src="/images/googlePlayBadge.svg" alt="Google Play" />
              </a>
            )}

            {appleStore && (
              <a href={appleStore} style={{ marginLeft: "50px" }}>
                <img src="/images/appstoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;