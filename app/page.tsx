'use client';
import Image from 'next/image';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
export default function Home() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    redirect('/login');
  }
  return <div>Loading...</div>;
}
