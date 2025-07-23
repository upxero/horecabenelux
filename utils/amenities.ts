import { IconType } from 'react-icons';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

import {
  FiTruck,
  FiShoppingBag,
  FiWind,
  FiHeart,
  FiWifi,
  FiMonitor,
  FiSmile,
  FiCheckCircle,
  FiGithub,
  FiMapPin,
  FiEye,
  FiGift,
  FiMusic,
  FiMap,
  FiGlobe,
  FiTv,
  FiDroplet,
  FiSun,
  FiZap,
} from 'react-icons/fi';

export const amenities: Amenity[] = [
  { name: 'Terras', icon: FiSun, selected: false },
  { name: 'Afhaalservice', icon: FiTruck, selected: false },
  { name: 'Levering aan huis', icon: FiShoppingBag, selected: false },
  { name: 'Vegetarische/vegan opties', icon: FiHeart, selected: false },
  { name: 'Gratis WiFi', icon: FiWifi, selected: false },
  { name: 'Rolstoeltoegankelijk', icon: FiMonitor, selected: false },
  { name: 'Airconditioning', icon: FiWind, selected: false },
  { name: 'Speelhoek voor kinderen', icon: FiSmile, selected: false },
  { name: 'Reservatie mogelijk', icon: FiCheckCircle, selected: false },
  { name: 'Huisdieren toegestaan', icon: FiGithub, selected: false },
  { name: 'Parkeerplaats', icon: FiMapPin, selected: false },
  { name: 'Open keuken', icon: FiEye, selected: false },
  { name: 'Private dining / aparte zaal', icon: FiGift, selected: false },
  { name: 'Cateringservice', icon: FiShoppingBag, selected: false },
  { name: 'Live muziek', icon: FiMusic, selected: false },
  { name: 'Dicht bij OV', icon: FiMap, selected: false },
  { name: 'Meertalige bediening', icon: FiGlobe, selected: false },
  { name: 'TV-schermen aanwezig', icon: FiTv, selected: false },
  { name: 'Toiletten beschikbaar', icon: FiDroplet, selected: false },
  { name: 'Sfeerverlichting', icon: FiZap, selected: false },
];
