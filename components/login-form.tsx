import type React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>МУИС ЭМНЭЛЭГ</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid gap-6'>
              <div className='flex flex-col gap-4'>
                <Button variant='outline' className='w-full'>
                  <Image src='/numLogo.png' alt='NUM' width={24} height={24} />
                  SISI эрхээр нэвтрэх
                </Button>
              </div>
              <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                <span className='relative z-10 bg-background px-2 text-muted-foreground'>
                  Хэрэглэгчийн эрхээр нэвтрэх
                </span>
              </div>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Мэйл хаяг</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Нууц үг</Label>
                    <a
                      href='#'
                      className='ml-auto text-sm underline-offset-4 hover:underline'
                    >
                      Нууц үг сэргээх
                    </a>
                  </div>
                  <Input id='password' type='password' required />
                </div>
                <Button type='submit' className='w-full'>
                  Нэвтрэх
                </Button>
              </div>
              <div className='text-center text-sm'>
                Бүртгэлгүй юу?{' '}
                <a href='#' className='underline underline-offset-4'>
                  Бүртгүүлэх
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
