import AdminPropertiesTable from '@/components/admin/AdminPropertiesTable';
import AdminReviewsTable from '@/components/admin/AdminReviewsTable';
import AdminUsersTable from '@/components/admin/AdminUsersTable';
import ChartsContainer from '@/components/admin/ChartsContainer';
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading';
import StatsContainer from '@/components/admin/StatsContainer';
import { Suspense } from 'react';

function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>

      {/* Bedrijven en reviews naast elkaar */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <AdminPropertiesTable />
        <AdminReviewsTable />
        <AdminUsersTable />
      </div>
    </>
  );
}
export default AdminPage;

