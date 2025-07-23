
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AnalyticsChartProps {
  timeRange: string;
}

export default function AnalyticsChart({ timeRange }: AnalyticsChartProps) {
  const data = [
    { date: 'Jan 1', clicks: 850, visitors: 620 },
    { date: 'Jan 2', clicks: 1200, visitors: 890 },
    { date: 'Jan 3', clicks: 950, visitors: 740 },
    { date: 'Jan 4', clicks: 1400, visitors: 1020 },
    { date: 'Jan 5', clicks: 1100, visitors: 810 },
    { date: 'Jan 6', clicks: 1600, visitors: 1150 },
    { date: 'Jan 7', clicks: 1350, visitors: 980 },
    { date: 'Jan 8', clicks: 1800, visitors: 1300 },
    { date: 'Jan 9', clicks: 1500, visitors: 1100 },
    { date: 'Jan 10', clicks: 2000, visitors: 1450 },
    { date: 'Jan 11', clicks: 1750, visitors: 1280 },
    { date: 'Jan 12', clicks: 2200, visitors: 1600 },
    { date: 'Jan 13', clicks: 1900, visitors: 1380 },
    { date: 'Jan 14', clicks: 2400, visitors: 1750 }
  ];

  const deviceData = [
    { device: 'Desktop', clicks: 8500, percentage: 66 },
    { device: 'Mobile', clicks: 3200, percentage: 25 },
    { device: 'Tablet', clicks: 1147, percentage: 9 }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Click Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="clicks" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deviceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="device" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clicks" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
