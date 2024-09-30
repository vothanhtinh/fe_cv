import { useUpdateSubscribleSkills } from '@/queries';
import { useGetSubscriberSkills } from '@/queries/user/useGetSubscriberSkills';
import { RootState } from '@/store/configStore';
import { TUser } from '@/types';
import { MonitorOutlined } from '@ant-design/icons';
import { Col, Form, Row, Select, Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@/components/atoms';

import { SKILLS_LIST } from './constants';

export default function SubscriberSkills() {
  const user: TUser = useSelector((state: RootState) => state.userSlice.user);

  const [form] = Form.useForm();
  const { data, isLoading } = useGetSubscriberSkills(user._id);
  const mutation = useUpdateSubscribleSkills(user);

  if (isLoading) {
    return <Spin spinning />;
  }

  if (data && data.skills) {
    form.setFieldValue('skills', data.skills);
  }

  const onFinish = async (values: { skills: string[] }) => {
    const { skills } = values;

    const data = {
      email: user.email,
      name: user.name,
      skills: skills ? skills : [],
    };

    mutation.mutate(data);
    // const res = await callUpdateSubscriber({
    //   email: user.email,
    //   name: user.name,
    //   skills: skills ? skills : [],
    // });
    // if (res.data) {
    //   message.success('Cập nhật thông tin được người');
    // } else {
    //   notification.error({
    //     message: 'Có lỗi xảy ra',
    //     description: res.message,
    //   });
    // }
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[20, 20]}>
        <Col span={20}>
          <Form.Item
            label={'Kỹ năng'}
            name={'skills'}
            rules={[
              { required: true, message: 'Vui lòng chọn ít nhất 1 skill!' },
            ]}
          >
            <Select
              mode='multiple'
              allowClear
              style={{ width: '100%' }}
              placeholder={
                <>
                  <MonitorOutlined /> Tìm theo kỹ năng...
                </>
              }
              optionLabelProp='label'
              options={SKILLS_LIST}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Button onClick={() => form.submit()}>Cập nhật</Button>
        </Col>
      </Row>
    </Form>
  );
}
