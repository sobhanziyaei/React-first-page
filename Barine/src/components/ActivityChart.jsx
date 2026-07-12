import './ActivityChart.css';
import { ChartMiniIcon } from './Icons';

// تولید مسیر منحنی نرم (Catmull-Rom → Bezier) از نقاط
function buildSmoothPath(coords) {
  if (coords.length < 2) return '';
  let d = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const p0 = coords[i - 1] || coords[i];
    const p1 = coords[i];
    const p2 = coords[i + 1];
    const p3 = coords[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function ActivityChart({ data }) {
  const W = 320;
  const H = 150;
  const padX = 14;
  const padY = 20;

  const max = Math.max(...data.points);
  const min = Math.min(...data.points);
  const range = max - min || 1;

  // چون RTL است، نقاط را از راست به چپ می‌چینیم
  const coords = data.points.map((p, i) => {
    const ratio = data.points.length > 1 ? i / (data.points.length - 1) : 0;
    const x = W - padX - ratio * (W - padX * 2);
    const y = padY + (1 - (p - min) / range) * (H - padY * 2);
    return { x, y };
  });

  const linePath = buildSmoothPath(coords);
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${H} L ${coords[0].x} ${H} Z`;

  return (
    <section className="chart-card">
      <div className="chart-card__header">
        <span className="chart-card__filter">
          <ChartMiniIcon size={15} />
          {data.filter}
        </span>
        <div className="chart-card__titles">
          <h3 className="chart-card__title">{data.title}</h3>
          <span className="chart-card__subtitle">{data.subtitle}</span>
        </div>
      </div>

      <div className="chart-card__plot">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="chart-card__svg">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          <path d={areaPath} fill="url(#areaGrad)" />
          <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />

          {coords.map((c, i) => (
            <circle key={i} cx={c.x} cy={c.y} r="4" fill="#fff" stroke="#2563eb" strokeWidth="2.5" />
          ))}
        </svg>
      </div>

      <div className="chart-card__labels">
        {data.labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </section>
  );
}
