import { FC } from 'react';

export const Informations: FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Добро пожаловать на AI Interface</h2>
      <p className="text-gray-700 mb-4">
        Этот сайт создан для упрощения взаимодействия с различными моделями искусственного интеллекта.
        Вы можете отправлять запросы, получать ответы и экспериментировать с разными моделями AI.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Используйте боковую панель для выбора модели AI.</li>
        <li>Введите ваш запрос в текстовое поле и получите ответ от выбранной модели.</li>
        <li>Экспериментируйте с различными моделями для решения ваших задач.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        Если у вас возникнут вопросы или проблемы, свяжитесь с нашей службой поддержки через раздел{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Поддержка
        </a>
        .
      </p>
    </div>
  );
};

