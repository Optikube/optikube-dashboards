import Link from 'next/link';
import { GridBackgroundDemo } from '../components/GridBackground';
import { InfiniteMovingCards } from '../components/Infinite-Moving-Cards';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const userDashboardItems = [
  {
    quote: 'Not that expensive.',
    name: 'Cluster Cost',
    title: 'Daily Overview',
  },
  {
    quote: 'But this week was relatively expensive.',
    name: 'Cluster Cost',
    title: 'Weekly Overview',
  },
  {
    quote: 'Still within budget for the month though!',
    name: 'Cluster Cost',
    title: 'Monthly Overview',
  },
];

const UserDashboard = () => {
  return (
    <div className='relative h-[50rem]'>
      <NavBar />
      <GridBackgroundDemo />
      <div className='absolute top-[100px] inset-0 flex items-center justify-center'>
        <InfiniteMovingCards items={userDashboardItems} />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
