import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  if (host.startsWith('tier6.') && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/tier6', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
