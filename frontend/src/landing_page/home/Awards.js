function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/images/largestBroker.svg" alt="largestbroker"/>

                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className="mb-5">2+ millions clients contribute to over 15% of all retail orders volumes in India daily by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>Commodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                        </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Stocks and IPO's</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt</p>
                        </li>
                    </ul>
                        </div>

                    </div>
                    <img src="/images/pressLogos.png" alt="hihi" style={{width:"90%"}}/>
                </div>

            </div>

        </div>
    );
}

export default Awards;