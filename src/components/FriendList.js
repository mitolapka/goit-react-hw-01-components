
import FriendListItem from './FriendListItem';
import {List} from './FriendList.styled'
export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};







