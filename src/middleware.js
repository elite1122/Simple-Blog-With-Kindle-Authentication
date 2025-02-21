import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],  // Protect profile page
};
