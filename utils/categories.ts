import { IconType } from 'react-icons';
import {
  FaUtensils,
  FaCoffee,
  FaTruck,
  FaBeer,
  FaBed,
  FaIceCream,
  FaConciergeBell,
  FaGlassCheers,
  FaStoreAlt,
  FaDrumstickBite,
  FaHamburger,
  FaFish,
  FaBoxOpen,         // toegevoegd voor 'leverancier'
  FaFrenchFries,     // fictief - zie opmerking onder
} from 'react-icons/fa';
import { MdLocalBar } from 'react-icons/md';
import { GiCakeSlice, GiMeat } from 'react-icons/gi';
import { TbBuildingCottage } from 'react-icons/tb';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'restaurant'
  | 'cafe'
  | 'foodtruck'
  | 'bar'
  | 'hotel'
  | 'icecream'
  | 'catering'
  | 'traiteur'
  | 'bakkerij'
  | 'drinks'
  | 'delishop'
  | 'snackbar'
  | 'slagerij'
  | 'viswinkel'
  | 'frituur'
  | 'leverancier';

export const categories: Category[] = [
  { label: 'restaurant', icon: FaUtensils },
  { label: 'cafe', icon: FaCoffee },
  { label: 'foodtruck', icon: FaTruck },
  { label: 'bar', icon: MdLocalBar },
  { label: 'hotel', icon: FaBed },
  { label: 'icecream', icon: FaIceCream },
  { label: 'catering', icon: FaConciergeBell },
  { label: 'traiteur', icon: FaConciergeBell },
  { label: 'bakkerij', icon: GiCakeSlice },
  { label: 'drinks', icon: FaGlassCheers },
  { label: 'delishop', icon: FaStoreAlt },
  { label: 'snackbar', icon: FaHamburger },
  { label: 'slagerij', icon: GiMeat },
  { label: 'viswinkel', icon: FaFish },
  { label: 'frituur', icon: FaDrumstickBite }, 
  { label: 'leverancier', icon: FaBoxOpen },
];
