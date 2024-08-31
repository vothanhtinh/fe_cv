import { Companies } from '@/components/organisms';
import FeatureJobs from '@/components/organisms/Home/featureJobs';
import SearchJobs from '@/components/organisms/Home/searchJobs/searchJobs';

const HomePage = () => (
  <div>
    <SearchJobs />

    <FeatureJobs />

    <Companies />
  </div>
);

export default HomePage;
