'use client';
import { LoginForm } from '@/app/login/components/login-form';
import Image from 'next/image';
export default function LoginPage() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <LoginForm />
      </div>
    </div>
  );
}
