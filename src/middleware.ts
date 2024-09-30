// Libraries
import { deleteCookie } from 'cookies-next';
import { decodeJwt } from 'jose';
import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Constants
import { ROLE } from './constants';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const { pathname } = url;

  const accessToken = cookies().get('access_token')?.value;
  const locale = cookies().get('NEXT_LOCALE')?.value ?? 'en';

  if (
    (pathname.includes('/login') || pathname.includes('/register')) &&
    accessToken
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${'/'}${request.nextUrl.search}`, request.url),
    );
  }

  if (pathname.includes('/admin')) {
    if (!accessToken) {
      return NextResponse.redirect(
        new URL(`/${locale}${'/'}${request.nextUrl.search}`, request.url),
      );
    }

    try {
      const { exp, role }: { exp: number; role: { name: string } } =
        decodeJwt(accessToken);

      if (exp < Date.now() / 1000) {
        deleteCookie('access_token');

        return NextResponse.redirect(
          new URL(
            `/${locale}${'/login'}${request.nextUrl.search}`,
            request.url,
          ),
        );
      }

      if (role?.name !== ROLE.SUPER_ADMIN) {
        return NextResponse.redirect(
          new URL(`/${locale}${'/'}${request.nextUrl.search}`, request.url),
        );
      }
    } catch {
      deleteCookie('access_token');

      return NextResponse.redirect(
        new URL(`/${locale}${'/login'}${request.nextUrl.search}`, request.url),
      );
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|.*\\..*).*)'],
};
