import { NextRequest, NextResponse } from 'next/server';
import { getGeoInfo } from '@/lib/common';

export async function GET(request: NextRequest) {
  const geoInfo = getGeoInfo(request);

  return NextResponse.json({
    country: geoInfo.countryName,
    city: geoInfo.city,
    ip: geoInfo.ip,
    timestamp: new Date().toISOString(),
    isBlocked: geoInfo.isBlocked,
  });
}
