export type BlockedPageParams = {
  country?: string;
  ip?: string;
  reason?: string;
}

export type BlockedPageProps = {
  searchParams: Promise<BlockedPageParams>;
};

export interface GeoBlockConfig {
  blockedCountries: string[];
  allowedCountries?: string[];
  blockMode: 'blacklist' | 'whitelist';
  redirectUrl: string;
  enableLogging: boolean;
}

export interface GeoData {
  country: string;
  city: string;
  ip: string;
  timestamp: string;
}

export const geoConfig: GeoBlockConfig = {
  // ISO 3166-1 alpha-2 country codes
  blockedCountries: [
    'KH', // Cambodia
    'CN', // China
    'RU', // Russia
    'KP', // North Korea
    'IR', // Iran
  ],
  allowedCountries: [
    'TH', // Thailand
    'US', // United States
    'JP', // Japan
    'SG', // Singapore
  ],
  blockMode: 'blacklist', // or 'whitelist'
  redirectUrl: '/blocked',
  enableLogging: true,
};

export const countryNames: Record<string, string> = {
  'KH': 'Cambodia',
  'CN': 'China',
  'RU': 'Russia',
  'KP': 'North Korea',
  'IR': 'Iran',
  'TH': 'Thailand',
  'US': 'United States',
  'JP': 'Japan',
  'SG': 'Singapore',
  'GB': 'United Kingdom',
  'DE': 'Germany',
  'FR': 'France',
};
