import  { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="text-sm">
        © 2023 AI Interface. Все права защищены.
      </div>
      <div className="flex space-x-4">
        {/* Пример ссылок */}
        <a href="#" className="text-sm hover:text-blue-400 transition duration-300">
          Правила
        </a>
        <a href="#" className="text-sm hover:text-blue-400 transition duration-300">
          Контакты
        </a>
        <a href="#" className="text-sm hover:text-blue-400 transition duration-300">
          Поддержка
        </a>
      </div>
    </footer>
  );
};

