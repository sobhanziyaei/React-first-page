import './StatsGrid.css';
import { TrendIcon, BoxIcon, MedalIcon, TruckIcon, StarIcon } from './Icons';

const iconMap = {
  trend: TrendIcon,
  box: BoxIcon,
  medal: MedalIcon,
  truck: TruckIcon,
};

// یک کارت آماری
function StatCard({ stat }) {
  const Icon = iconMap[stat.icon];

  return (
    <article className="stat-card">
      <div className="stat-card__top">
        <div className={`stat-card__icon stat-card__icon--${stat.iconColor}`}>
          <Icon size={24} />
        </div>

        {stat.badge && (
          <span className={`stat-card__badge stat-card__badge--${stat.badgeType}`}>
            {stat.badge === 'star' ? <StarIcon size={14} /> : stat.badge}
          </span>
        )}
      </div>

      <div className="stat-card__value">{stat.value}</div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__sub">{stat.sub}</div>
    </article>
  );
}

// شبکه ۲x۲ کارت‌های آماری
export default function StatsGrid({ stats }) {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
}
