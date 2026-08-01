
function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="images/logo.svg" alt="stonsky Logo" style={{ width: "50%" }} />
          <p>
            &copy; 2010 - 2026, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="col">
          <p>Company</p>
          <a href="/" style={{ textDecoration: "none" }}>About</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Philosophy</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Press & media</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Careers</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Zerodha Cares (CSR)</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Zerodha.tech</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Open source</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Referral program</a>
        </div>

        <div className="col">
          <p>Support</p>
          <a href="/" style={{ textDecoration: "none" }}>Contact us</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Support portal</a><br />
          <a href="/" style={{ textDecoration: "none" }}>How to file a complaint?</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Status of your complaints</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Bulletin</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Circular</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Z-Connect blog</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Downloads</a>
        </div>

        <div className="col">
          <p>About</p>
          <a href="/" style={{ textDecoration: "none" }}>Open demat account</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Minor demat account</a><br />
          <a href="/" style={{ textDecoration: "none" }}>NRI demat account</a><br />
          <a href="/" style={{ textDecoration: "none" }}>HUF demat account</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Commodity</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Dematerialisation</a><br />
          <a href="/" style={{ textDecoration: "none" }}>Fund transfer</a><br />
          <a href="/" style={{ textDecoration: "none" }}>MTF</a><br />
        </div>
      </div>

      <div className="mt-5 text-small text-muted" style={{ fontSize: "14px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.:
          INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
          SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
          #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
          4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to complaints@zerodha.com,
          for DP related to dp@zerodha.com.
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
          Mandatory details for filing complaints on SCORES: Name, PAN, Address,
          Mobile Number, E-mail ID.
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>
          Fixed deposit products offered on this platform are third-party products
          (TPP) and are not Exchange traded products.
        </p>
      </div>
    </div>
  );
}

export default Footer;