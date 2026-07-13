import './RoutesCard.css';
import { RouteIcon, PlusIcon, SearchIcon, TrashIcon, RouteArrow, ChevronLeft } from './Icons';
import routeBlue from '../assets/route-blue-icon.png';
import routeGreen from '../assets/route-green-icon.png';
import routePurple from '../assets/route-purple-icon.png';

// چرخه رنگ ردیف‌ها بر اساس ایندکس (آبی، سبز، بنفش)
const ROW_THEMES = ['blue', 'green', 'purple'];

// نگاشت رنگ تم ردیف به آیکون PNG رنگی متناظر
const ROUTE_ICONS = { blue: routeBlue, green: routeGreen, purple: routePurple };

// یک ردیف مسیر
function RouteRow({ route, index, onDelete, onSelect }) {
  const color = route.color || ROW_THEMES[index % ROW_THEMES.length];

  return (
    <div className={`route-row route-row--${color}`}>
      <div className={`route-row__icon route-row__icon--${color}`}>
        <img src={ROUTE_ICONS[color] || ROUTE_ICONS.blue} alt="" className="route-row__icon-img" />
      </div>

      <div className="route-row__content">
        <div className="route-row__cities">
          <span className="route-row__city">{route.from}</span>
          <RouteArrow size={16} />
          <span className="route-row__city">{route.to}</span>
        </div>
        <button
          type="button"
          className="route-row__action"
          onClick={() => onSelect?.(route)}
        >
          <SearchIcon size={13} />
          {route.action}
        </button>
      </div>

      <button
        type="button"
        className="route-row__delete"
        aria-label="حذف مسیر"
        onClick={() => onDelete?.(route)}
      >
        <TrashIcon size={17} />
      </button>

      <button
        type="button"
        className="route-row__chevron"
        aria-label="مشاهده"
        onClick={() => onSelect?.(route)}
      >
        <ChevronLeft size={16} />
      </button>
    </div>
  );
}

// کارت مسیرهای درخواستی
export default function RoutesCard({ routes, meta, onAdd, onDelete, onSelect }) {
  return (
    <section className="routes-card">
      <div className="routes-card__header">
        <button type="button" className="routes-card__add" onClick={onAdd}>
          <PlusIcon size={16} />
          افزودن مسیر
        </button>

        <div className="routes-card__title-wrap">
          <div className="routes-card__titles">
            <h3 className="routes-card__title">{meta.title}</h3>
            <span className="routes-card__subtitle">{meta.subtitle}</span>
          </div>
          <div className="routes-card__title-icon">
            <RouteIcon size={22} />
          </div>
        </div>
      </div>

      <p className="routes-card__desc">{meta.description}</p>

      <div className="routes-card__progress">
        <span className="routes-card__progress-fill" style={{ width: `${meta.progress}%` }} />
      </div>

      <div className="routes-card__list">
        {routes.map((route, index) => (
          <RouteRow
            key={route.id}
            route={route}
            index={index}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
