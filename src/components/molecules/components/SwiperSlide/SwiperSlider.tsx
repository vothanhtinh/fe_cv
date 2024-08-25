'use client';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import 'swiper/css';
import React, { useRef } from 'react';
import SwiperClass from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { WrapperIcon } from './styled';

type SwiperSlideProps = {
  data: {
    id: string;
    content: () => React.ReactNode;
  }[];
  slidesPerView?: number;
  spaceBetween?: number;
  title?: React.ReactNode;
};

export const SwiperSlider: React.FC<SwiperSlideProps> = (props) => {
  const { data, slidesPerView = 4, spaceBetween = 50, title } = props;

  const swiperRef = useRef<SwiperClass>();

  return (
    <>
      <Flex gap={100} justify='space-between' className='p-2 text-[#595959]'>
        {title}
        <Flex gap={10}>
          <WrapperIcon onClick={() => swiperRef.current?.slidePrev()}>
            <LeftCircleOutlined />
          </WrapperIcon>
          <WrapperIcon onClick={() => swiperRef.current?.slideNext()}>
            <RightCircleOutlined />
          </WrapperIcon>
        </Flex>
      </Flex>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        onSlideChange={() => {}}
        className='w-full h-full'
      >
        {data.map((item: SwiperSlideProps['data'][0]) => (
          <div key={item.id}>
            <SwiperSlide className='flex justify-center items-center'>
              {item.content()}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};
