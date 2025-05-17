import { IconType } from 'react-icons';
import {
  FiCoffee,
  FiTruck,
  FiShoppingBag,
  FiWifi,
  FiMonitor,
  FiWind,
  FiSmile,
  FiCheckCircle,
  FiHeart,
  FiMapPin,
  FiEye,
  FiUsers,
  FiGift,
  FiMusic,
  FiMap,
  FiGlobe,
} from 'react-icons/fi';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const horecaAmenities: Amenity[] = [
  { name: 'Terras', icon: FiCoffee, selected: false },
  { name: 'Afhaalservice', icon: FiTruck, selected: false },
  { name: 'Levering aan huis', icon: FiShoppingBag, selected: false },
  { name: 'Vegetarische/vegan opties', icon: FiHeart, selected: false },
  { name: 'Gratis WiFi', icon: FiWifi, selected: false },
  { name: 'Rolstoeltoegankelijk', icon: FiMonitor, selected: false },
  { name: 'Airconditioning', icon: FiWind, selected: false },
  { name: 'Speelhoek voor kinderen', icon: FiSmile, selected: false },
  { name: 'Reservatie mogelijk', icon: FiCheckCircle, selected: false },
  { name: 'Huisdieren toegestaan', icon: FiUsers, selected: false },
  { name: 'Parkeerplaats', icon: FiMapPin, selected: false },
  { name: 'Open keuken', icon: FiEye, selected: false },
  { name: 'Private dining / aparte zaal', icon: FiGift, selected: false },
  { name: 'Cateringservice', icon: FiShoppingBag, selected: false },
  { name: 'Live muziek', icon: FiMusic, selected: false },
  { name: 'Dicht bij OV', icon: FiMap, selected: false },
  { name: 'Meertalige bediening', icon: FiGlobe, selected: false },
];
