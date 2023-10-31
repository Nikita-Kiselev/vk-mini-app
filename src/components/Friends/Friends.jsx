import { useEffect, useState } from "react";
import Friend from "./Friend/Friend";
import { CellButton, Group, Header } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";
import { ROUTES } from "../../App";

const Friends = ({ go, amountFriends = 4, title, button }) => {
  const [getFriends, setGetFriends] = useState([]);
  useEffect(() => {
    async function fetchFriends() {
      await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${amountFriends}`)
        .then((response) => response.json())
        .then((data) => setGetFriends(data));
    }
    fetchFriends();
  }, []);
  return (
    <>
      <Group
        header={
          title ? (
            <Header mode="primary">Друзья {getFriends.length}</Header>
          ) : null
        }
      >
        {getFriends &&
          getFriends.map((item) => {
            let id = item.id;
            let name = item.name;
            let email = item.email;
            let phone = item.phone;
            return <Friend key={id} name={name} email={email} phone={phone} />;
          })}
        {button ? (
          <CellButton
            centered={true}
            before={<Icon24Add />}
            onClick={() => {
              go(ROUTES.FRIENDS);
            }}
          >
            Показать всех друзей
          </CellButton>
        ) : null}
      </Group>
    </>
  );
};

export default Friends;
