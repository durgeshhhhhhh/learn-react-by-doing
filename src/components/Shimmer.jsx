const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Create multiple shimmer cards */}
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-content">
              <div className="shimmer-title"></div>
              <div className="shimmer-tags"></div>
              <div className="shimmer-details"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
