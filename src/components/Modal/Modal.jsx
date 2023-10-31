import {
  ModalCard,
  Button,
  ModalRoot,
  Group,
  SimpleCell,
  Div,
  Text,
} from "@vkontakte/vkui";
import {
  Icon28TagOutline,
  Icon28BillSeparatedOutline,
  Icon20IncognitoOutline,
} from "@vkontakte/icons";
import modalImg from "./../../img/modal.svg";
const Modal = ({ setActiveModal }) => (
  <ModalRoot activeModal="MODAL_CARD">
    <ModalCard
      id="MODAL_CARD"
      onClose={() => setActiveModal(false)}
      icon={<img src={modalImg} alt="Звёздочки" />}
      header="Это модальное окно"
      subheader="Короткое описание, а может и не короткое"
      actions={
        <Group style={{maxWidth:"359px"}}>
          <SimpleCell before={<Icon28TagOutline />}>
            <Div>
              <Text weight={2}>Number one</Text>
              <Text>Короткое описание</Text>
            </Div>
          </SimpleCell>
          <SimpleCell before={<Icon28BillSeparatedOutline />}>
            <Div>
              <Text weight={2}>Number two</Text>
              <Text>Короткое описание</Text>
            </Div>
          </SimpleCell>
          <SimpleCell
            before={<Icon20IncognitoOutline width={28} height={28} />}
          >
            <Div>
              <Text weight={2}>Number three</Text>
              <Text>Короткое описание</Text>
            </Div>
          </SimpleCell>
          <Button
            size="l"
            mode="primary"
            onClick={() => setActiveModal(false)}
            align="center"
            style={{ width: "327px"}}
          >
            Попробовать
          </Button>
        </Group>
      }
    ></ModalCard>
  </ModalRoot>
);

export default Modal;
