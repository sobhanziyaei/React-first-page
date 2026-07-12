import './StatusBar.css';

// نوار وضعیت آیفون: ساعت، ناچ، آنتن/وای‌فای/باتری
export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__notch" />
      <div className="status-bar__right">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="#0f172a" />
          <rect x="4.5" y="6" width="3" height="6" rx="1" fill="#0f172a" />
          <rect x="9" y="3.5" width="3" height="8.5" rx="1" fill="#0f172a" />
          <rect x="13.5" y="1" width="3" height="11" rx="1" fill="#0f172a" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M8.5 3.2c2.2 0 4.2.85 5.7 2.25l1.4-1.45C13.7 2.2 11.2 1.2 8.5 1.2S3.3 2.2 1.4 4l1.4 1.45C4.3 4.05 6.3 3.2 8.5 3.2z" fill="#0f172a" />
          <path d="M8.5 6.4c1.25 0 2.4.5 3.25 1.3l1.4-1.45A6.85 6.85 0 008.5 4.4c-1.75 0-3.35.65-4.65 1.85l1.4 1.45A4.7 4.7 0 018.5 6.4z" fill="#0f172a" />
          <path d="M8.5 9.4l1.85-1.9a2.6 2.6 0 00-3.7 0L8.5 9.4z" fill="#0f172a" />
        </svg>
        <div className="status-bar__battery">
          <span className="status-bar__battery-body">
            <span className="status-bar__battery-fill" />
          </span>
          <span className="status-bar__battery-cap" />
        </div>
      </div>
    </div>
  );
}
