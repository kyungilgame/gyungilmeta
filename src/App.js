import { useMediaQuery } from "react-responsive";

import DesktopContainer from "./Screen/DesktopContainer";
import MobileContainer from "./Screen/MobileContainer";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function App() {
  return (
    <div>
      <Desktop>
        <DesktopContainer></DesktopContainer>
      </Desktop>
      <Mobile>
        <MobileContainer></MobileContainer>
      </Mobile>
    </div>
  );
}

export default App;
