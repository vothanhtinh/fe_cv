'use client';
import { useGetAllJobs } from '@/queries/jobs';
import { IJob } from '@/types/backend';
import { Col, Pagination, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

import { JobItem } from './components/Item';
import { TableWrapper } from './styled';

const FeatureJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllJobs(currentPage);

  const [listJobs, setListJobs] = useState<IJob[] | []>([]);

  useEffect(() => {
    if (data) {
      setListJobs(data.data?.result);
    }
  }, [data]);

  const onChangePage = (page: number, _pageSize: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className='pt-12 md:px-2 sm:px-1 h-full bg-[#f3f5f7]'>
        <TableWrapper>
          {isLoading ? (
            <Row gutter={[24, 24]} className='w-full'>
              {Array.from(Array(12).keys()).map((item, idx) => (
                <Col className='gutter-row' span={8} key={idx}>
                  <Skeleton key={idx} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row
              gutter={[24, 24]}
              style={{
                margin: '0',
              }}
            >
              {listJobs.map((item, idx) => (
                <Col className='gutter-row' span={8} key={idx}>
                  <JobItem {...item} />
                </Col>
              ))}
            </Row>
          )}
        </TableWrapper>
        <div className='flex justify-center py-4'>
          <Pagination
            size='small'
            className='text-base'
            defaultCurrent={1}
            total={data?.data.meta.total}
            pageSize={12}
            onChange={onChangePage}
          />
        </div>
      </section>
    </>
  );
};
export default FeatureJobs;
