import './ProfileCard.css';
import { StarIcon, UserIcon } from './Icons';

// کارت پروفایل با پس‌زمینه گرادیانت
export default function ProfileCard({ user }) {
  return (
    <section className="profile-card">
      <div className="profile-card__info">
        <h2 className="profile-card__name">{user.name}</h2>
        <p className="profile-card__role">{user.role}</p>

        <div className="profile-card__badges">
          <span className="profile-card__badge">{user.shipments}</span>
          <span className="profile-card__badge profile-card__badge--rating">
            {user.rating}
            <StarIcon size={13} />
          </span>
        </div>
      </div>

      <div className="profile-card__avatar">
        <UserIcon size={34} />
      </div>
    </section>
  );
}
