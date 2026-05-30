import React from 'react';
import { Bolt } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bolt className="text-[#f07c00] w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold uppercase tracking-wider leading-none">
                  Энергосети
                </span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Электроснабжение и питание
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Компания «Энергосети» занимается проведением электричества и обеспечением надежного питания для домов, предприятий и городов.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Компания</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Общая информация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Руководство</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Раскрытие информации</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Вакансии</a></li>
            </ul>
          </div>

          {/* Consumers */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Потребителям</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Технологическое присоединение</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Передача показаний</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Оплата электроэнергии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">График отключений</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Личный кабинет</a></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Филиалы</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Северный филиал «Энергосети»</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Южный филиал «Энергосети»</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"> 
          <p>© {new Date().getFullYear()} «Энергосети». Все права защищены. Сделано студентом 4 курса Стаценко И.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
