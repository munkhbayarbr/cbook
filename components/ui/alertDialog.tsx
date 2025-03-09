'use client';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function ToastDemo() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className='fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded shadow-lg flex items-center'>
      <Terminal className='h-4 w-4 mr-2' />
      <div>
        <div className='font-bold'>Heads up!</div>
        <div className='text-sm'>
          You can add components to your app using the CLI.
        </div>
      </div>
    </div>
  );
}
