import React from "react";
import ReactDOM from "react-dom/client";
import image from "../SelfLearning/download.png";
import userImage from "../SelfLearning/user.png";
// const HeadingComponent = () => {
//   return (
//     <div>
//       <h1 className="heading1">hello</h1>
//       <h2 className="heading2">hello2</h2>
//       <h3 className="heading3">hello3</h3>
//     </div>
//   );
// };
// const ReactFunction = () => {
//   return (
//     <div className="container">
//       <HeadingComponent />
//     </div>
//   );
// };

const Logo = () => {
  return (
    <div className="logo">
      <img src={image} />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" />
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="user-icon">
      <img src={userImage} />
    </div>
  );
};

const ReactFunction = () => {
  return (
    <div className="container">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactFunction />);
