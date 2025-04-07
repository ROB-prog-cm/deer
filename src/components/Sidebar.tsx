import { FC, useEffect } from 'react';
import { getAllModels } from '../api/getModels.ts';


export const Sidebar: FC = () => {

  useEffect(() => {
    getAllModels();
  }, []);

  const models = [
    { id: 1, name: 'Model GPT-3' },
    { id: 2, name: 'Model GPT-4' },
    { id: 3, name: 'Model BERT' },
    { id: 4, name: 'Model T5' },
    { id: 5, name: 'Model DALL-E' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Модели AI</h2>
      <ul className="space-y-2">
        {models.map((model) => (
          <li
            key={model.id}
            className="p-2 rounded hover:bg-gray-700 cursor-pointer transition duration-300"
          >
            {model.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

