'use client';

import { useEffect, useState } from 'react';
import { Globe, MapPin, Shield, Clock } from 'lucide-react';
import { GeoData } from '@/types/common';

export default function GeoInfo() {
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('/api/geo');
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error('Failed to fetch geo data:', error);
        setGeoData({
          country: 'Unknown',
          city: 'Unknown',
          ip: 'Unknown',
          timestamp: new Date().toISOString(),
        });
      }
    };

    fetchGeoData();
  }, []);

  if (!geoData) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg p-4 h-32"></div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Shield className="w-5 h-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">
          Your Access Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <Globe className="w-4 h-4 text-blue-500 mr-3" />
          <div>
            <div className="text-sm text-gray-600">Country</div>
            <div className="font-medium">{geoData.country}</div>
          </div>
        </div>

        <div className="flex items-center">
          <MapPin className="w-4 h-4 text-red-500 mr-3" />
          <div>
            <div className="text-sm text-gray-600">City</div>
            <div className="font-medium">{geoData.city}</div>
          </div>
        </div>

        <div className="flex items-center">
          <Shield className="w-4 h-4 text-purple-500 mr-3" />
          <div>
            <div className="text-sm text-gray-600">IP Address</div>
            <div className="font-mono text-sm">{geoData.ip}</div>
          </div>
        </div>

        <div className="flex items-center">
          <Clock className="w-4 h-4 text-orange-500 mr-3" />
          <div>
            <div className="text-sm text-gray-600">Access Time</div>
            <div className="text-sm">
              {new Date(geoData.timestamp).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        <div className="flex items-center">
          <Shield className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-sm text-green-800 font-medium">
            ✅ Access Granted - Your location is allowed
          </span>
        </div>
      </div>
    </div>
  );
}
