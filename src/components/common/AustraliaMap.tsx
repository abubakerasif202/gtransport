import { useMemo } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
// @ts-ignore
import worldData from 'world-atlas/countries-110m.json';

interface City {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

const cities: City[] = [
  { name: 'Sydney', coordinates: [151.2093, -33.8688] },
  { name: 'Melbourne', coordinates: [144.9631, -37.8136] },
  { name: 'Brisbane', coordinates: [153.0251, -27.4698] },
  { name: 'Perth', coordinates: [115.8605, -31.9505] },
  { name: 'Adelaide', coordinates: [138.6007, -34.9285] },
  { name: 'Canberra', coordinates: [149.1300, -35.2809] },
  { name: 'Hobart', coordinates: [147.3272, -42.8821] },
  { name: 'Darwin', coordinates: [130.8456, -12.4634] },
];

export function AustraliaMap() {
  const { path, australiaFeature } = useMemo(() => {
    // 036 is the ISO numeric code for Australia in the 110m dataset
    const australia = (worldData.objects.countries as any).geometries.find(
      (g: any) => g.id === '036'
    );

    const featureCollection = feature(worldData as any, australia);
    
    // Create a projection centered on Australia
    const projection = geoMercator()
      .center([133.7751, -25.2744]) // Center of Australia
      .scale(600) // Adjust scale to fit the container
      .translate([300, 300]); // Center in a 600x600 viewBox

    return {
      path: geoPath().projection(projection),
      projection,
      australiaFeature: featureCollection,
    };
  }, []);

  return (
    <div className="w-full aspect-square relative flex items-center justify-center">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 30px rgba(178, 34, 34, 0.15))' }}
      >
        <g>
          {/* Base Map */}
          <path
            d={path(australiaFeature as any) || undefined}
            fill="#1a1a1a"
            stroke="#d4af37" // brand-gold
            strokeWidth={1.5}
            className="transition-colors duration-500 hover:fill-[#222]"
          />

          {/* City Markers */}
          {cities.map((city, i) => {
            const projection = geoMercator()
              .center([133.7751, -25.2744])
              .scale(600)
              .translate([300, 300]);
            
            const [x, y] = projection(city.coordinates) || [0, 0];

            return (
              <g key={city.name} className="group cursor-pointer">
                {/* Ping animation behind marker */}
                <circle
                  cx={x}
                  cy={y}
                  r={8}
                  fill="#b22222"
                  className="animate-ping opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{ animationDuration: `${2 + i * 0.2}s` }}
                />
                {/* Main marker point */}
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  fill="#b22222" // brand-red
                  stroke="#141414"
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-150"
                />
                
                {/* City Label */}
                <text
                  x={x}
                  y={y - 12}
                  textAnchor="middle"
                  className="text-[10px] font-sans font-bold fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow-md"
                >
                  {city.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
