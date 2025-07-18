import { fetchStats } from '@/utils/actions';
import StatsCard from './StatsCard';

async function StatsContainer() {
  const data = await fetchStats();

  return (
    <div className='mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
      <StatsCard title='gebruikers' value={data.usersCount || 0} />
      <StatsCard title='bedrijven' value={data.propertiesCount || 0} />
      <StatsCard title='reviews' value={data.reviewsCount || 0} />
    </div>
  );
}

export default StatsContainer;

