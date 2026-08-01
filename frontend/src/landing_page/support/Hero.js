function Hero() {
    return ( 
        <div className="container-fluid p-5" style={{ backgroundColor: "#387ed1", color: "white" }}>
  <div className="container">
    
    <h3 className="mb-3">Support Portal</h3>
    <p className="mb-4">Search for an answer or browse help topics</p>

    {/* Search Box */}
    <div style={{ position: "relative", maxWidth: "500px" }}>
      
      {/* Search Icon */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)",
          color: "gray"
        }}
      >
        🔍
      </span>

      {/* Input */}
      <input
        type="text"
        placeholder="Search for articles..."
        style={{
          width: "100%",
          padding: "10px 10px 10px 40px",
          borderRadius: "5px",
          border: "none",
          outline: "none"
        }}
      />
    </div>

  </div>
</div>
     );
}

export default Hero;