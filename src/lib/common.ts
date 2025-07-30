import { countryNames, geoConfig } from '@/types/common';
import { NextRequest } from 'next/server';
// import { geoConfig, countryNames } from './geo-config';

export interface GeoInfo {
  country: string;
  countryName: string;
  city?: string;
  region?: string;
  ip: string;
  isBlocked: boolean;
  blockReason?: string;
}

export function getGeoInfo(request: NextRequest): GeoInfo {
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  const region = request.headers.get('x-vercel-ip-country-region') || 'Unknown';
  const ip = request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-vercel-forwarded-for') ||
    'Unknown';

  const countryName = countryNames[country] || country;

  let isBlocked = false;
  let blockReason = '';

  if (geoConfig.blockMode === 'blacklist') {
    isBlocked = geoConfig.blockedCountries.includes(country);
    if (isBlocked) {
      blockReason = `Country ${countryName} (${country}) is in blocked list`;
    }
  } else if (geoConfig.blockMode === 'whitelist') {
    isBlocked = !geoConfig.allowedCountries?.includes(country);
    if (isBlocked) {
      blockReason = `Country ${countryName} (${country}) is not in allowed list`;
    }
  }

  return {
    country,
    countryName,
    city,
    region,
    ip,
    isBlocked,
    blockReason,
  };
}

export function isPathExempt(pathname: string): boolean {
  const exemptPaths = [
    '/blocked',
    '/api/health',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
  ];

  return exemptPaths.some(path => pathname.startsWith(path));
}
