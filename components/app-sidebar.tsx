'use client';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import React from 'react';

const items = [
  {
    title: 'Нүүр',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Цаг захиалах',
    url: '/home/timeBook',
    icon: Calendar,
  },
  {
    title: 'Миний захиалга',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Цаг тохируулах',
    url: '#',
    // icon: Search,
    icon: Settings,
  },
  {
    title: 'Тохиргоо',
    url: '#',
    icon: Settings,
  },
];

const AppSidebar = React.memo(function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className='bg-[#efefef]'>
        <SidebarGroup>
          <SidebarGroupLabel>Цэс</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
});
export { AppSidebar };
