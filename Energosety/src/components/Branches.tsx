import React from 'react';
import { Building2 } from 'lucide-react';

const branches = [
  {
    name: 'Северный филиал «Энергосети»',
    desc: 'Обеспечивает проведение электричества и питания для северных районов и промышленных объектов региона.',
  },
  {
    name: 'Южный филиал «Энергосети»',
    desc: 'Отвечает за электроснабжение жилых кварталов и предприятий южной части зоны обслуживания.',
  },
];

export const Branches: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#004b87] mb-10">Наши филиалы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition flex items-start"
            >
              <div className="bg-blue-50 p-4 rounded-full mr-5">
                <Building2 className="w-8 h-8 text-[#004b87]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{branch.name}</h3>
                <p className="text-gray-500">{branch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
