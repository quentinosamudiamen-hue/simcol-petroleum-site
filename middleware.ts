import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  if (host.startsWith('tier6.')) {
    const pathname = request.nextUrl.pathname;
    // Already on a tier6 route — let it through
    if (pathname.startsWith('/tier6')) {
      return NextResponse.next();
    }
    // Rewrite root and everything else to /tier6
    return NextResponse.rewrite(
      new URL('/tier6' + (pathname === '/' ? '' : pathname), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};