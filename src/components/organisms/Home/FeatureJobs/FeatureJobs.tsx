'use client';
import { useGetAllJobs } from '@/queries/jobs';
import { IJob } from '@/types/backend';
import { Col, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

import { JobItem } from './components/Item';
import { StyledPagination, TableWrapper } from './styled';

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
      <section className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 '>
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
        <div className='flex justify-center py-4 mt-4'>
          <StyledPagination
            size='small'
            className='text-base !text-green-500'
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
