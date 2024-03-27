import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordion from "../accordion";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  const checkEnabledFlags = (currentKey) => {
    return enabledFlags[currentKey];
  };

  if (loading) return <h1>Loading Data.. Please Wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((component) =>
        checkEnabledFlags(component.key) ? component.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
