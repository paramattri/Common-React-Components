import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/ModalTest";
import TabTest from "./components/custom-tabs/TabTest";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/ScrollToSection";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/UseFetchHookTest";
import UseOnClickOutsideTest from "./components/use-outside-click/UseOnClickOutsideTest";
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}
      {/* <TicTacToe /> */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
