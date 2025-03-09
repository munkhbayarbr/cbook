'use client';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';

const dt = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

export default function timeBooking() {
  const [selectedData, setSelectedData] = useState<Date>();
  const [availableTimes, setAvailableTimes] = useState(dt);
  useEffect(() => {
    if (selectedData) {
      setAvailableTimes([dt[Math.floor(Math.random() * dt.length)]]);
    }
  }, [selectedData]);

  return (
    <div className='max-w-4xl mx-auto p-6 sm:p-10'>
      <div className='grid md:grid-cols-2  bg-muted rounded-md p-6 '>
        <div className='flex  flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold mb-4'>Цаг захиалах</h1>
          <div className='bg-muted rounded-lg p-6'>
            <Calendar
              mode='single'
              className='p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6 '
              selected={selectedData}
              onDayClick={(Date) => setSelectedData(Date)}
            />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Сул цагууд:</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant='outline'
                size='sm'
                className='px-4 py-2'
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
