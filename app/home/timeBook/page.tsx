'use client';
import TimeBooking from '@/app/home/timeBook/components/timeBooking';
import { useEffect } from 'react';
import { toast } from 'sonner';
const timeBook = () => {
  return (
    <div className='h-full w-full'>
      <TimeBooking />
    </div>
  );
};
export default timeBook;
