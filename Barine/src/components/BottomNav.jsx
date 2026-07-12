import './BottomNav.css';
import { ClipboardIcon, BoxIcon, AddSquareIcon, ChatIcon } from './Icons';

const iconMap = {
  clipboard: ClipboardIcon,
  box: BoxIcon,
  add: AddSquareIcon,
  chat: ChatIcon,
};

// نوار ناوبری پایین
export default function BottomNav({ items, activeId = 'registered' }) {
  return (
    <nav className="bottom-nav">
      <span className="bottom-nav__indicator" />
      <ul className="bottom-nav__list">
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <button className={`bottom-nav__item ${isActive ? 'is-active' : ''}`}>
                <Icon size={24} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <span className="bottom-nav__home" />
    </nav>
  );
}
