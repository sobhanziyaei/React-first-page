import './App.css';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import ProfileCard from './components/ProfileCard';
import StatsGrid from './components/StatsGrid';
import RoutesCard from './components/RoutesCard';
import ActivityChart from './components/ActivityChart';
import RecentActivity from './components/RecentActivity';
import BottomNav from './components/BottomNav';

import {
  user,
  stats,
  routes,
  routesMeta,
  chartData,
  activities,
  navItems,
} from './data/mockData';

export default function App() {
  return (
    <div className="app">
      {/* نوار وضعیت آیفون فقط در حالت موبایل نمایش داده می‌شود */}
      <StatusBar />

      <div className="app__body">
        <Header items={navItems} activeId="registered" />

        <main className="app__main">
          <div className="app__container">
            <PageTitle title="داشبورد" />

            <div className="dashboard-grid">
              {/* بخش بالا: پروفایل و آمار */}
              <div className="dashboard-grid__top">
                <ProfileCard user={user} />
                <StatsGrid stats={stats} />
              </div>

              {/* بخش میانی: مسیرها + نمودار */}
              <div className="dashboard-grid__mid">
                <RoutesCard routes={routes} meta={routesMeta} />
                <ActivityChart data={chartData} />
              </div>

              {/* بخش پایین: فعالیت اخیر */}
              <div className="dashboard-grid__bottom">
                <RecentActivity activities={activities} />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ناوبری پایین فقط در حالت موبایل نمایش داده می‌شود */}
      <BottomNav items={navItems} activeId="registered" />
    </div>
  );
}
