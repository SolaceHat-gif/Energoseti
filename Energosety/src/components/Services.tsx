import React from 'react';
import { Cable, FileText, Zap, CreditCard, Users, Settings } from 'lucide-react';

const services = [
  { icon: Cable, title: 'Технологическое присоединение', desc: 'Подать заявку на подключение к сетям' },
  { icon: CreditCard, title: 'Оплата услуг', desc: 'Узнать задолженность и оплатить счета' },
  { icon: Zap, title: 'Плановые отключения', desc: 'График ремонтных работ и отключений' },
  { icon: FileText, title: 'Передача показаний', desc: 'Внести показания приборов учета' },
  { icon: Users, title: 'Центры обслуживания', desc: 'Найти ближайший офис для потребителей' },
  { icon: Settings, title: 'Услуги и тарифы', desc: 'Информация о стоимости электроэнергии' },
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#004b87] mb-10">Услуги и сервисы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition flex items-start group cursor-pointer">
                <div className="bg-blue-50 p-4 rounded-full mr-4 group-hover:bg-[#004b87] transition-colors">
                  <Icon className="w-8 h-8 text-[#004b87] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#004b87] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
