import { Div, Group, SimpleCell, Subhead, Switch, Text } from "@vkontakte/vkui";
import { Icon28LightbulbOutline } from "@vkontakte/icons";
import "./Flashlight.css";

import bridge from "@vkontakte/vk-bridge";
import { useEffect } from "react";
import { useState } from "react";

const Flashlight = () => {
  const [isSupportFlashlight, setIsSupportFlashlight] = useState(true);
  const [activeFlashlight, setActiveFlashlight] = useState(false);
  useEffect(() => {
    async function getFlashlightInfo() {
      let flashlight = await bridge.send("VKWebAppFlashGetInfo");
      setIsSupportFlashlight(flashlight.is_available);
    }
    getFlashlightInfo()
  }, []);

  async function setLevelFlashlight(){
    await bridge.send("VKWebAppFlashSetLevel", {
      level: activeFlashlight ? 0 : 1
    }).catch((err) => console.warn(err))
    setActiveFlashlight(prev => !prev);
  } 

  return (
    <>
      <Group className="flashlight">
        <SimpleCell
          Component="label"
          after={<Switch disabled={!isSupportFlashlight} onClick={setLevelFlashlight}  />}
          before={<Icon28LightbulbOutline />}
        >
          <Div>
            <Subhead className="flashlight-subtitle">Больше света!</Subhead>
            <Text className="flashlight-text">
              На телефоне включится фонарик
            </Text>
          </Div>
        </SimpleCell>
      </Group>
    </>
  );
};

export default Flashlight;
