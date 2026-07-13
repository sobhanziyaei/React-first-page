// همه داده‌های ماک داشبورد بارینه دقیقاً مطابق طراحی

export const user = {
  name: 'احمد کریمی',
  role: 'فرستنده بار',
  shipments: '۱۲ بار حمل',
  rating: '۴.۸',
};

export const stats = [
  {
    id: 'total',
    value: '۱۲',
    label: 'کل بارها',
    sub: 'این ماه',
    badge: '+۳',
    badgeType: 'blue',
    icon: 'box',
    iconColor: 'blue',
  },
  {
    id: 'income',
    value: '۱۸.۵M',
    label: 'درآمد کل',
    sub: 'تومان',
    badge: '+۱۲٪',
    badgeType: 'green',
    icon: 'trend',
    iconColor: 'green',
  },
  {
    id: 'rating',
    value: '۴.۸',
    label: 'امتیاز',
    sub: 'از ۵.۰',
    badge: 'star',
    badgeType: 'amber',
    icon: 'medal',
    iconColor: 'amber',
  },
  {
    id: 'active',
    value: '۳',
    label: 'در حال حمل',
    sub: 'بار فعال',
    badge: null,
    badgeType: null,
    icon: 'truck',
    iconColor: 'purple',
  },
];

export const routes = [
  {
    id: 1,
    from: 'تهران',
    to: 'اصفهان',
    action: 'نمایش بارهای مرتبط',
    color: 'blue',
  },
  {
    id: 2,
    from: 'شیراز',
    to: 'مشهد',
    action: 'نمایش بارهای مرتبط',
    color: 'green',
  },
  {
    id: 3,
    from: 'شیراز',
    to: 'کرج',
    action: 'نمایش بارهای مرتبط',
    color: 'purple',
  },
];

export const routesMeta = {
  title: 'مسیرهای درخواستی',
  subtitle: '۳ از ۵ مسیر',
  description: 'مسیرهای پرتکرار خود را ذخیره کنید و سریع‌تر به بارهای مرتبط دسترسی داشته باشید',
  progress: 60,
};

// نقاط نمودار فعالیت (تعداد بار حمل شده در ۸ ماه)
export const chartData = {
  title: 'نمودار فعالیت',
  subtitle: 'تعداد بار حمل شده',
  filter: '۸ ماه',
  months: ['آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'اردیبهشت'],
  labels: ['آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'اردیبهشت'],
  // مقادیر نرمال شده (۰ تا ۱۰۰)
  points: [22, 38, 30, 48, 40, 55, 52, 82],
};

export const activities = [
  {
    id: 1,
    title: 'بار تهران ← اصفهان تکمیل شد',
    time: '۲ ساعت پیش',
    icon: 'check',
    color: 'green',
  },
  {
    id: 2,
    title: 'پیام جدید از علی رضایی',
    time: '۳ ساعت پیش',
    icon: 'chat',
    color: 'gray',
  },
  {
    id: 3,
    title: 'راننده برای مسیر شیراز تایید شد',
    time: 'دیروز',
    icon: 'truck',
    color: 'blue',
  },
  {
    id: 4,
    title: 'بار جدید ثبت شد',
    time: '۲ روز پیش',
    icon: 'package',
    color: 'amber',
  },
];

export const navItems = [
  { id: 'messages', label: 'پیام‌ها', icon: 'chat' },
  { id: 'register', label: 'ثبت بار', icon: 'add' },
  { id: 'announced', label: 'بار اعلامی', icon: 'box' },
  { id: 'registered', label: 'بار ثبت شده', icon: 'clipboard' },
];
