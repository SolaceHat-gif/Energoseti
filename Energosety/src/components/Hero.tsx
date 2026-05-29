import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/12582119/pexels-photo-12582119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Power Lines" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004b87]/90 to-transparent"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-[#f07c00] text-white text-sm font-bold px-3 py-1 mb-4 rounded-sm uppercase">
            Важно
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            «Энергосети» — проведение электричества и питания
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Мы занимаемся проведением электричества и обеспечением бесперебойного питания для домов, предприятий и городов.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#f07c00] hover:bg-[#d66e00] text-white px-6 py-3 rounded font-semibold transition">
              Технологическое присоединение
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#004b87] text-white px-6 py-3 rounded font-semibold transition">
              Сообщить об отключении
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
