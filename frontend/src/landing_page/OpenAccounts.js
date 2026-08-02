import { Link } from "react-router-dom";


function OpenAccounts() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className="mt-5">Open a Stonksy account</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link
  to="/signup"
  className="btn btn-primary p-2 mb-5"
  style={{ width: "20%", margin: "0 auto", display: "block" }}
>
  Signup now
</Link>
            </div>
        </div>
     );
}

export default OpenAccounts;