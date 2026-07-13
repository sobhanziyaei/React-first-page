import './Header.css';
import { MenuIcon, UserIcon, ClipboardIcon, BoxIcon, AddSquareIcon, ChatIcon } from './Icons';
import deliveryIcon from '../assets/delivery.png';

const navIconMap = {
  clipboard: ClipboardIcon,
  box: BoxIcon,
  add: AddSquareIcon,
  chat: ChatIcon,
};

// هدر بالای صفحه: دکمه منو و پروفایل، لوگوی بارینه و ناوبری دسکتاپ
export default function Header({ items = [], activeId = 'registered' }) {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={deliveryIcon} alt="بارینه" className="header__brand-logo" />
        <span className="header__brand-name">بارینه</span>
      </div>

      {/* ناوبری افقی که فقط در دسکتاپ نمایش داده می‌شود */}
      <nav className="header__nav">
        {items.map((item) => {
          const Icon = navIconMap[item.icon];
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              className={`header__nav-item ${isActive ? 'is-active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="header__actions">
        <button className="header__btn header__btn--profile" aria-label="پروفایل">
          <UserIcon />
        </button>
        <button className="header__btn" aria-label="منو">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
