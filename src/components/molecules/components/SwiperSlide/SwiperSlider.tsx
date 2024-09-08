'use client';
import { Col, Flex, Row, Skeleton } from 'antd';
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
  isLoading?: boolean;
};

export const SwiperSlider: React.FC<SwiperSlideProps> = (props) => {
  const {
    data,
    slidesPerView = 4,
    spaceBetween = 50,
    title,
    isLoading,
  } = props;

  const swiperRef = useRef<SwiperClass>();

  return (
    <>
      <Flex gap={100} justify='space-between' className='p-2 text-[#595959]'>
        {title}
        <Flex gap={10}>
          <WrapperIcon onClick={() => swiperRef.current?.slidePrev()}>
            <button
              aria-label='Previous slide'
              id='keen-slider-previous'
              className='rounded-full border border-green-500 p-2 text-green-500 transition hover:bg-green-500 hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>
          </WrapperIcon>
          <WrapperIcon onClick={() => swiperRef.current?.slideNext()}>
            <button
              aria-label='Next slide'
              id='keen-slider-next'
              className='rounded-full border border-green-500 p-2 text-green-500 transition hover:bg-green-500 hover:text-white'
            >
              <svg
                className='size-5 rtl:rotate-180'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 5l7 7-7 7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
            </button>
          </WrapperIcon>
        </Flex>
      </Flex>
      {isLoading ? (
        <Row gutter={[24, 24]} className='w-full'>
          {Array.from(Array(4).keys()).map((item, idx) => (
            <Col className='gutter-row' span={6} md={6} xs={12} key={idx}>
              <Skeleton key={idx} />
            </Col>
          ))}
        </Row>
      ) : (
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
      )}
    </>
  );
};
