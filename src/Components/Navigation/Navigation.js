import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end">
        <p onClick={() => onRouteChange("signin")} className="f3 dim link underline-hover black pr3 pointer">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div className="flex justify-between">
        <nav>
          <p onClick={() => onRouteChange("signin")} className="f3 dim link underline-hover black pr3 pointer">
            Sign in
          </p>
        </nav>
        <nav>
          <p onClick={() => onRouteChange("register")} className="f3 dim link underline-hover black pr3 pointer">
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
