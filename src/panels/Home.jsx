import React from "react";
import PropTypes from "prop-types";
import "./../index.css";
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  Link,
  SimpleCell,
} from "@vkontakte/vkui";

import { Icon12Home } from "@vkontakte/icons";
import { Icon28MoonOutline } from "@vkontakte/icons";
import { Icon20UserOutline } from "@vkontakte/icons";
import Flashlight from "../components/Flashlight/Flashlight";
import Friends from "../components/Friends/Friends";
import Buttons from "../components/Buttons/Buttons";

const Home = ({ id, go, fetchedUser, activePanel }) => (
  <Panel id={id}>
    <PanelHeader separator={false}>
      <Icon28MoonOutline
        fill="#3F8AE0"
        width={26}
        height={22}
        className="iconMoon"
      />
    </PanelHeader>
    {fetchedUser && (
      <Group>
        <Cell className="cell">
          {fetchedUser.photo_200 ? (
            <Avatar className="avatar" src={fetchedUser.photo_200} size={88} />
          ) : null}
          <Div>
            <Div className="name">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Div>
            <Div className="infoBlock">
              <SimpleCell
                className="city"
                before={<Icon12Home fill="#99A2AD" width={16} height={16} />}
              >
                {fetchedUser.city && fetchedUser.city.title
                  ? fetchedUser.city.title
                  : "Москва"}
              </SimpleCell>

              <SimpleCell
                className="openLink"
                before={<Icon20UserOutline width={16} height={16} />}
              >
                <Link href={`https://vk.com/id${fetchedUser.id}`}>
                  Открыть страницу
                </Link>
              </SimpleCell>
            </Div>
          </Div>
        </Cell>
      </Group>
    )}
    <Flashlight />
    <Friends go={go} title={true} button={true}/>
    <Buttons activePanel={activePanel} go={go}/>
    {/* <Group header={<Header mode="secondary">Navigation Example</Header>}>
      <Div>
        <Button
          stretched
          size="l"
          mode="secondary"
          onClick={() => go('persik')}
          data-to="persik"
        >
          Show me the Persik, please
        </Button>
      </Div>
    </Group> */}
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
