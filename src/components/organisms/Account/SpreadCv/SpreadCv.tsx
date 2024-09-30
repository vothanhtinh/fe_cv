'use client';
import { useFetchResumeByUser } from '@/queries/user/useGetResumeByUser';
import { RootState } from '@/store/configStore';
import { TResume } from '@/types';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';

export default function SpreadCv() {
  const user = useSelector((state: RootState) => state.userSlice.user);

  const { data: listCV, isLoading } = useFetchResumeByUser(user?._id);

  const columns: ColumnsType<TResume> = [
    {
      title: 'STT',
      key: 'index',
      width: 50,
      align: 'center',
      render: (_text, _record, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: 'Công Ty',
      dataIndex: ['companyId', 'name'],
    },
    {
      title: 'Vị trí',
      dataIndex: ['jobId', 'name'],
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    },
    {
      title: 'Ngày rải CV',
      dataIndex: 'createdAt',
      render(_value, record, _index) {
        return <>{dayjs(record.createdAt).format('DD-MM-YYYY HH:mm:ss')}</>;
      },
    },
    {
      title: 'Chi tiết',
      dataIndex: '',

      render(value, record, _index) {
        return (
          <a
            href={`/images/resume/${record?.url}`}
            target='_blank'
            rel='noreferrer'
          >
            Chi tiết
          </a>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={listCV as TResume[]}
      />
    </div>
  );
}
