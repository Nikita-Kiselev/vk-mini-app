import { ButtonGroup, CellButton, Group } from "@vkontakte/vkui";
import { Icon28NewsfeedLinesOutline } from "@vkontakte/icons";
import { Icon28AddViewfinderOutline } from "@vkontakte/icons";
import "./Buttons.css";

import { ROUTES } from "./../../App.js";

const Buttons = ({ activePanel, go }) => {
  return (
    <>
      <Group>
        <ButtonGroup className="buttons">
          <CellButton
            className={
              ROUTES.PLACEHOLDER === activePanel ? "activeButton" : "button"
            }
            centered={true}
            size="m"
            before={
              <Icon28NewsfeedLinesOutline
                width={22}
                height={22}
                fill={ROUTES.PLACEHOLDER === activePanel ? null : "#99A2AD"}
              />
            }
            onClick={() => go(ROUTES.PLACEHOLDER)}
          >
            Placeholder
          </CellButton>
          <CellButton
            className={
              ROUTES.HOME || ROUTES.FRIENDS === activePanel
                ? "activeButton"
                : "button"
            }
            centered={true}
            size="m"
            before={
              <Icon28AddViewfinderOutline
                width={24}
                height={24}
                fill={
                  ROUTES.HOME || ROUTES.FRIENDS === activePanel
                    ? null
                    : "#99A2AD"
                }
              />
            }
            onClick={() => go(ROUTES.HOME)}
          >
            Профиль
          </CellButton>
        </ButtonGroup>
      </Group>
    </>
  );
};

export default Buttons;
