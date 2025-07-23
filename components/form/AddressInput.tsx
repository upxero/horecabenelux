'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Input } from '@/components/ui/input';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Label } from '@/components/ui/label';

type Location = {
  display_name: string;
  lat: string;
  lon: string;
};

// Custom icon (in plaats van global prototype aan te passen)
const customIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Functie om huisnummer achter straatnaam te zetten
function moveHouseNumberToStreet(address: string) {
  const parts = address.split(',').map(part => part.trim());

  // Als eerste deel een huisnummer is
  if (parts.length >= 2 && /^\d+[a-zA-Z]?$/.test(parts[0])) {
    const houseNumber = parts.shift(); // verwijder huisnummer
    parts[0] = `${parts[0]} ${houseNumber}`; // voeg toe aan straatnaam
  }

  return parts.join(', ');
}

export default function AddressInput({ defaultValue = '' }) {
  const [searchQuery, setSearchQuery] = useState(defaultValue);
  const [address, setAddress] = useState(defaultValue);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocIndex, setSelectedLocIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!searchQuery) {
      setLocations([]);
      setCoords(null);
      setError(null);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      fetch(`/api/location-search?q=${encodeURIComponent(searchQuery)}`)
        .then((res) => {
          if (!res.ok) throw new Error('Locatie niet gevonden');
          return res.json();
        })
        .then((data: Location[]) => {
          if (!Array.isArray(data) || data.length === 0) {
            setLocations([]);
            setCoords(null);
            setError('Locatie niet gevonden');
            return;
          }

          setLocations(data);
          setSelectedLocIndex(null);
          setError(null);
        })
        .catch(() => {
          setLocations([]);
          setCoords(null);
          setError('Fout bij ophalen locatie');
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(e.target.value);
    setSelectedLocIndex(idx);
    const loc = locations[idx];
    const fixedAddress = moveHouseNumberToStreet(loc.display_name);
    setCoords({ lat: parseFloat(loc.lat), lng: parseFloat(loc.lon) });
    setAddress(fixedAddress);
    setSearchQuery(fixedAddress);
  };

  return (
    <div className="mb-2">
      <Label htmlFor="address" className="capitalize">
        bedrijfsadres
      </Label>
      <Input
        type="text"
        id="address"
        name="address"
        placeholder="Stationsstraat 10, 9000 Gent, België"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-input w-full"
        autoComplete="off"
      />

      {locations.length > 1 && (
        <select
          onChange={handleSelectChange}
          className="form-select w-full mt-2"
          defaultValue=""
        >
          <option disabled value="">
            Kies een locatie
          </option>
          {locations.map((loc, index) => (
            <option key={index} value={index}>
              {moveHouseNumberToStreet(loc.display_name)}
            </option>
          ))}
        </select>
      )}

      {error && <p className="text-red-600">{error}</p>}

      {coords && (
        <div className="mt-4 h-72">
          <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[coords.lat, coords.lng]} icon={customIcon}>
              <Popup>{address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}
