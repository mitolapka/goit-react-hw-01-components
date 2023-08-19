import {Item, Status, Avatar, Name} from './FriendListItem.styled.js'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <Status className="status" $isOnline={isOnline} />
      <Avatar className="avatar" src={avatar} alt="User avatar" />
      <Name className="name">{name}</Name>
    </Item>
  );
};
export default FriendListItem;