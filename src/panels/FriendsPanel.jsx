import { Group, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { ROUTES } from "../App";
import Friends from "../components/Friends/Friends";
import Buttons from "../components/Buttons/Buttons";

const FriendsPanel = ({ id, go, activePanel }) => {
  console.log(activePanel);
  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => go(ROUTES.HOME)} />}
        className="header"
      >
        Друзья
      </PanelHeader>
        <Friends go={go} amountFriends={20}/>
        <Buttons activePanel={activePanel} go={go}/>
    </Panel>
  );
};

export default FriendsPanel;
