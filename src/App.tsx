import React from "react";
import { RecoilRoot } from "recoil";
import DropDown from "./components/DropDown/DropDown";
import { AppStyle } from "./styles/AppStyle";

const App: React.FC = (): JSX.Element => {
  // Get the app style from AppStyle
  const { app } = AppStyle();

  return (
    // Wrap the App inside RecoilRoot component where states are shared globally
    <RecoilRoot>
      <div className={app}>
        <DropDown />
      </div>
    </RecoilRoot>
  );
};

export default App;
