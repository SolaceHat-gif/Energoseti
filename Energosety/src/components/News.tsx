import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface NewsItem {
  id: string;
  title: string;
  date: Date;
  summary: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Энергетики «Энергосети» подготовили сети к осенне-зимнему периоду',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    summary: 'Реализована масштабная ремонтная программа, включающая замену опор и провода на ключевых линиях электропередачи.'
  },
  {
    id: '2',
    title: 'Открыт новый Центр обслуживания потребителей',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    summary: 'Современный офис работает по принципу «одного окна» и предоставляет полный спектр услуг для физических и юридических лиц.'
  },
  {
    id: '3',
    title: 'Внедрение интеллектуальных систем учета электроэнергии',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    summary: 'До конца года планируется установить более 50 тысяч "умных" счетчиков, что повысит прозрачность расчетов.'
  },
  {
    id: '4',
    title: 'Специалисты пресекли незаконное потребление электроэнергии',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    summary: 'В ходе рейдов выявлено несколько крупных майнинг-ферм, незаконно подключенных к сетям компании.'
  }
];

export const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(collection(db, 'news'), orderBy('date', 'desc'), limit(4));
        const querySnapshot = await getDocs(q);
        const fetchedNews: NewsItem[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedNews.push({
            id: doc.id,
            title: data.title,
            date: data.date.toDate(),
            summary: data.summary,
          });
        });
        
        if (fetchedNews.length > 0) {
          setNews(fetchedNews);
        } else {
          setNews(mockNews);
        }
      } catch (error) {
        console.log("Firebase not configured or error fetching, using mock data.", error);
        setNews(mockNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-[#004b87]">Пресс-центр</h2>
          <a href="#" className="text-blue-600 font-semibold hover:underline hidden sm:block">Все новости</a>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004b87]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                <div className="text-sm text-gray-400 mb-2 font-medium">
                  {format(item.date, 'd MMMM yyyy', { locale: ru })}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#004b87] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {item.summary}
                </p>
                <div className="mt-4">
                  <span className="text-[#004b87] text-sm font-semibold group-hover:underline">
                    Подробнее →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="text-blue-600 font-semibold hover:underline">Все новости</a>
        </div>
      </div>
    </section>
  );
};
