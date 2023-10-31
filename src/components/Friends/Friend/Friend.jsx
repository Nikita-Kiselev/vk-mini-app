import { Avatar, Div, SimpleCell, Text } from "@vkontakte/vkui";
import './Friend.css';

const Friend = ({ name, email, phone }) => {
  const initials = name.split(" ");
  const colors = [1, 2, 3, 4, 5, 6];
  function getRandomColor() {
    return colors[Math.round(Math.random() * colors.length)];
  }
  return (
    <>
      <SimpleCell
        before={
          <Avatar
            size={56}
            initials={initials[0][0] + initials[1][0]}
            gradientColor={getRandomColor()}
          />
        }
      >
        <Div>
          <Text weight={2}>{name}</Text>
          <Text className="email">{email}</Text>
          <Text className="phone">{phone}</Text>
        </Div>
      </SimpleCell>
    </>
  );
};

export default Friend;
