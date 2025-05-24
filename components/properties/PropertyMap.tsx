'use client';
import { MapContainer, TileLayer, Marker, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { useEffect, useState } from 'react';

const markerIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconSize: [20, 30],
});

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

function PropertyMap({ address }: { address: string }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setLocation([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (err) {
        console.error('Fout bij geolocatie ophalen:', err);
      }
    };
    fetchCoordinates();
  }, [address]);

  const center = location || defaultLocation;

  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <h2 className="text-lg font-semibold">Locatie van het bedrijf</h2>
        <p className="text-sm text-muted-foreground">{address}</p>
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className='h-[50vh] rounded-lg relative z-0'
        center={center}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker position={center} icon={markerIcon} />
        {location && <ChangeView center={location} />}
      </MapContainer>
    </div>
  );
}

export default PropertyMap;
