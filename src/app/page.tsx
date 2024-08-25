import Image from 'next/image';

import { Companies } from '@/components/organisms';
import FeatureJobs from '@/components/organisms/Home/FeatureJobs';

const HomePage = () => (
  <div>
    <div className='relative h-[300px]'>
      <Image src='/bg_header.webp' alt='banner' fill={true} />
    </div>
    <FeatureJobs />

    <Companies />
  </div>
);

export default HomePage;
