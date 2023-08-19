import { List,DivProfile, Img, DivDescription, PName, Li } from './Profile.styled.js'
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<DivProfile className="profile">
        <DivDescription className="description">
            <Img src={avatar} alt="User avatar"
      className="avatar" />
            <p className="name">{username}</p>
            <PName className="tag">@{tag}</PName>
            <PName className="location">{location}</PName>
        </DivDescription>

        <List className="stats">
        <Li>
            <span className="label">Followers </span>
            <span className="quantity">{stats.followers}</span>
        </Li>
        <Li>
            <span className="label">Views </span>
            <span className="quantity">{stats.views}</span>
        </Li>
        <Li>
            <span className="label">Likes </span>
            <span className="quantity">{stats.likes}</span>
        </Li>
        </List>
    </DivProfile>
    )

}