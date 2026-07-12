import './RoutesCard.css';
import { RouteIcon, PlusIcon, SearchIcon, TrashIcon, RouteArrow, ChevronLeft } from './Icons';

// یک ردیف مسیر
function RouteRow({ route }) {
  return (
    <div className={`route-row route-row--${route.color}`}>
      <div className={`route-row__icon route-row__icon--${route.color}`}>
        <RouteIcon size={22} />
      </div>

      <div className="route-row__content">
        <div className="route-row__cities">
          <span className="route-row__city">{route.from}</span>
          <RouteArrow size={16} />
          <span className="route-row__city">{route.to}</span>
        </div>
        <div className="route-row__action">
          <SearchIcon size={13} />
          {route.action}
        </div>
      </div>

      <button className="route-row__delete" aria-label="حذف مسیر">
        <TrashIcon size={17} />
      </button>

      <button className="route-row__chevron" aria-label="مشاهده">
        <ChevronLeft size={16} />
      </button>
    </div>
  );
}

// کارت مسیرهای درخواستی
export default function RoutesCard({ routes, meta }) {
  return (
    <section className="routes-card">
      <div className="routes-card__header">
        <button className="routes-card__add">
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
        {routes.map((route) => (
          <RouteRow key={route.id} route={route} />
        ))}
      </div>
    </section>
  );
}
