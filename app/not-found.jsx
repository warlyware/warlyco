'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/portfolio') {
      // Set flag in localStorage (must check window)
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolioRedirect', '1');
      }
    }
    // Always redirect home on 404
    router.replace('/');
  }, [pathname, router]);

  return null;
}
