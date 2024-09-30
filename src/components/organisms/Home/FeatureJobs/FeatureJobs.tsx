'use client';
import { useGetAllJobs } from '@/queries/jobs';
import { TJob } from '@/types';
import { Col, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

import { JobItem } from './components/Item';
import { StyledPagination, TableWrapper } from './styled';

const FeatureJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllJobs(currentPage);

  const [listJobs, setListJobs] = useState<TJob[] | []>([]);

  useEffect(() => {
    if (data) {
      setListJobs(data.result);
    }
  }, [data]);

  const onChangePage = (page: number, _pageSize: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 '>
        <h2 className='p-2 text-green-500 text-xl font-bold sm:text-2xl mb-4'>
          Việc làm tốt nhất
        </h2>
        <TableWrapper>
          {isLoading ? (
            <Row gutter={[24, 24]} className='w-full'>
              {Array.from(Array(12).keys()).map((item, idx) => (
                <Col className='gutter-row' span={8} md={8} xs={12} key={idx}>
                  <Skeleton key={idx} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row gutter={[24, 24]}>
              {listJobs.map((item: TJob, idx) => (
                <Col className='gutter-row ' span={8} md={8} xs={12} key={idx}>
                  <JobItem {...item} />
                </Col>
              ))}
            </Row>
          )}
        </TableWrapper>
        <div className='flex justify-center py-4 mt-4'>
          <StyledPagination
            size='small'
            className='text-base !text-green-500 '
            defaultCurrent={1}
            total={data?.meta.total || 0}
            pageSize={12}
            onChange={onChangePage}
          />
        </div>
      </section>
    </>
  );
};
export default FeatureJobs;
