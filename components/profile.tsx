'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardTitle } from './ui/card';
import Image from 'next/image';
export default function Profile({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className='h-14 w-full bg-[#efefef] flex items-center justify-between shadow-lg '>
        <div className='flex gap-4'>
          {children}
          <div className='flex flex-row gap-2 items-center justify-center'>
            <Image src='/numLogo.png' alt='NUM' width={26} height={26} />
            <CardTitle className='text-xl'>МУИС ЭМНЭЛЭГ</CardTitle>
          </div>
        </div>
        <div className='m-4 flex fex-row items-center justify-around gap-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          МөнхБаяр
        </div>
      </div>
    </div>
  );
}
