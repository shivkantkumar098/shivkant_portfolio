'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import heatmap to prevent SSR issues
const CalendarHeatmap = dynamic(() => import('react-calendar-heatmap'), {
  ssr: false,
});
import 'react-calendar-heatmap/dist/styles.css';

export default function LeetCodeHeatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/leetcode')
      .then((res) => res.json())
      .then((resData) => {
        if (Array.isArray(resData)) {
          setData(resData);
        } else {
          console.error('LeetCode Heatmap Error:', resData);
        }
      })
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-4">
        💤 No LeetCode activity found
      </div>
    );
  }

  const startDate = new Date(data[0].date);
  const endDate = new Date(data[data.length - 1].date);

  return (
    <div className="p-6 rounded-xl shadow-lg bg-[#0f172a]">
      <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
        🧠 LeetCode Heatmap Activity
      </h2>

      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={data}
        classForValue={(value) => {
          if (!value) return 'color-empty';
          if (value.count >= 10) return 'color-scale-4';
          if (value.count >= 5) return 'color-scale-3';
          if (value.count >= 2) return 'color-scale-2';
          return 'color-scale-1';
        }}
        tooltipDataAttrs={(value) => ({
          'data-tip': `${value.date}: ${value.count} submissions`,
        })}
        showWeekdayLabels
      />

      <style jsx global>{`
        .color-empty {
          fill: #1e293b;
        }
        .color-scale-1 {
          fill: #86efac; /* light green */
        }
        .color-scale-2 {
          fill: #4ade80; /* medium green */
        }
        .color-scale-3 {
          fill: #22c55e; /* bright green */
        }
        .color-scale-4 {
          fill: #15803d; /* dark green */
        }
      `}</style>
    </div>
  );
}
