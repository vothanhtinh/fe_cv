import { Companies } from '@/components/organisms';
import FeatureJobs from '@/components/organisms/Home/FeatureJobs/FeatureJobs';
import SearchJobs from '@/components/organisms/Home/SearchJobs/SearchJobs';

const HomePage = () => (
  <div>
    <SearchJobs />

    <FeatureJobs />

    <Companies />
  </div>
);

export default HomePage;
