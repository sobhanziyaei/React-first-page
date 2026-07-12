import './RecentActivity.css';
import { CheckIcon, ChatIcon, TruckIcon, PackageIcon, ChevronLeft } from './Icons';

const iconMap = {
  check: CheckIcon,
  chat: ChatIcon,
  truck: TruckIcon,
  package: PackageIcon,
};

function ActivityRow({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <li className="activity-row">
      <span className={`activity-row__icon activity-row__icon--${item.color}`}>
        <Icon size={20} />
      </span>

      <div className="activity-row__content">
        <p className="activity-row__title">{item.title}</p>
        <span className="activity-row__time">{item.time}</span>
      </div>

      <button className="activity-row__chevron" aria-label="جزئیات">
        <ChevronLeft size={16} />
      </button>
    </li>
  );
}

// لیست فعالیت‌های اخیر
export default function RecentActivity({ activities }) {
  return (
    <section className="activity">
      <div className="activity__header">
        <button className="activity__seeall">مشاهده همه</button>
        <h3 className="activity__title">فعالیت اخیر</h3>
      </div>

      <ul className="activity__list">
        {activities.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
