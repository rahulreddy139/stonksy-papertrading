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
          <img src={imageURL} />
        </div>
        <div className="col p-5 mt-5">
          <h2>{productName}</h2>
          <p className="mt-4">{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"120px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appleStore} style={{marginLeft:"50px"}}>
              <img src="/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
