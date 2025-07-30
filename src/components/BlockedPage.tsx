'use client';

import { BlockedPageParams, countryNames } from '@/types/common';
import { AlertTriangle, Globe, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function BlockedPage({ country, ip, reason }: Readonly<BlockedPageParams>) {
  const [countryName] = useState(countryNames[country ?? ''] ?? country)
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Access Restricted
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Sorry, access from your location is currently restricted due to our service policies.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Globe className="w-4 h-4 mr-2" />
              Country
            </div>
            <span className="font-medium text-gray-900">
              {countryName} ({country})
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              IP Address
            </div>
            <span className="font-mono text-gray-900">{ip}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              Time
            </div>
            <span className="text-gray-900">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>

        {/* Reason */}
        {reason && (
          <div className="text-xs text-gray-500 bg-gray-50 rounded p-3 mb-6">
            <strong>Reason:</strong> {reason}
          </div>
        )}

        {/* Support Info */}
        <div className="text-sm text-gray-500">
          If you believe this is an error, please contact our support team.
        </div>
      </div>
    </div>
  );
}
