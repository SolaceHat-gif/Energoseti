import React from 'react';
import { Phone, Search, Menu, Bolt, Eye } from 'lucide-react';

interface HeaderProps {
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  return (
    <header className="w-full bg-white shadow-md relative z-50">
      {/* вверх*/}
      <div className="bg-[#004b87] text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center hover:text-gray-200 cursor-pointer">
              <Eye className="w-4 h-4 mr-1" />
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <span className="opacity-80 mr-2">Горячая линия:</span>
              <a href="tel:88002200220" className="font-bold text-lg flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                8-800-220-0-220
              </a>
            </div>
            <button onClick={onOpenAuth} className="hover:underline">Личный кабинет</button>
          </div>
        </div>
      </div>

      {/* основная чатсь */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#004b87] rounded flex items-center justify-center">
            <Bolt className="text-white w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-[#004b87] uppercase tracking-wider leading-none">
              Энергосети
            </span>
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
              Электроснабжение и питание
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex space-x-6 text-[#004b87] font-semibold">
            <a href="#" className="hover:text-blue-500 transition">О компании</a>
            <a href="#" className="hover:text-blue-500 transition">Потребителям</a>
            <a href="#" className="hover:text-blue-500 transition">Акционерам и инвесторам</a>
            <a href="#" className="hover:text-blue-500 transition">Пресс-центр</a>
            <a href="#" className="hover:text-blue-500 transition">Закупки</a>
          </nav>
          
          <button className="text-[#004b87] hover:text-blue-500">
            <Search className="w-6 h-6" />
          </button>
        </div>

        <button className="lg:hidden text-[#004b87]">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};
