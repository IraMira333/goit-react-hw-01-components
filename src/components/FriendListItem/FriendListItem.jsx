import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
