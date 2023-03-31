import React from "react";
import { RecoilRoot } from "recoil";
import DropDown from "./components/DropDown/DropDown";

const App: React.FC = (): JSX.Element => {
  return (
    // Wrap the App inside RecoilRoot component where states are shared globally
    <RecoilRoot>
      <div className="App">
        <DropDown />
      </div>
    </RecoilRoot>
  );
};

export default App;
