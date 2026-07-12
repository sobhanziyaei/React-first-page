import './PageTitle.css';
import { ArrowBack } from './Icons';

// عنوان صفحه: «داشبورد» با دکمه بازگشت
export default function PageTitle({ title = 'داشبورد' }) {
  return (
    <div className="page-title">
      <h1 className="page-title__text">{title}</h1>
      <button className="page-title__back" aria-label="بازگشت">
        <ArrowBack />
      </button>
    </div>
  );
}
