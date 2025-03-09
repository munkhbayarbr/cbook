import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import Profile from '@/components/profile';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <Profile>
          <SidebarTrigger size={'lg'} />
        </Profile>
        {children}
      </main>
    </SidebarProvider>
  );
}
