import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 id="heading"> Hii, Durgesh Shekhawat</h1>;
};


//Component Compositions
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <NameD />
    <h1>Welcome!! to the React World</h1>
  </div>
);

const NameD = () => <h1>Hii, Saumya</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
