import { Divider } from 'antd';

import { Companies } from '@/components/organisms';
import FeatureJobs from '@/components/organisms/Home/FeatureJobs/FeatureJobs';
import { ListProminent } from '@/components/organisms/Home/ListProminent/ListProminent';
import SearchJobs from '@/components/organisms/Home/SearchJobs';

const HomePage = () => (
  <div>
    <SearchJobs />

    <FeatureJobs />

    <Companies />

    <Divider type='horizontal' dashed />

    <ListProminent />
  </div>
);

export default HomePage;
