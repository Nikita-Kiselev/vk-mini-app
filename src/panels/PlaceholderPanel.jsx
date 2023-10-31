import {
  Button,
  Div,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
} from "@vkontakte/vkui";
import Buttons from "../components/Buttons/Buttons";
import { Icon44LogoVk } from "@vkontakte/icons";
import placeholderImg from "./../img/placeholder.svg";
import "./../index.css";

const PlaceholderPanel = ({
  id,
  go,
  activePanel,
  activeModal,
  setActiveModal,
}) => {
  return (
    <Panel id={id}>
      <PanelHeader>
        <Icon44LogoVk className="logo" />
      </PanelHeader>
      <Group>
        <Placeholder
          icon={<img src={placeholderImg} alt="placeholder" />}
          header="Немного лирики"
          className="placeholderContent"
        >
          <Div>
            Прежде чем описание станет хорошим, его необходимо написать. Не
            правда ли?
          </Div>
          <Button onClick={() => setActiveModal(true)} size="l">Нажмите на меня</Button>
        </Placeholder>
      </Group>
      <Buttons go={go} activePanel={activePanel} />
    </Panel>
  );
};

export default PlaceholderPanel;
{
  /* <ModalCard
        id={MODAL_CARD_MONEY_SEND}
        onClose={() => changeActiveModal(null)}
        icon={<Icon56MoneyTransferOutline />}
        header="Отправляйте деньги друзьям, используя банковскую карту"
        subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
        actions={
          <Button
            size="l"
            mode="primary"
            stretched
            onClick={() => changeActiveModal(MODAL_CARD_APP_TO_MENU)}
          >
            Попробовать
          </Button>
        }
      ></ModalCard> */
}
