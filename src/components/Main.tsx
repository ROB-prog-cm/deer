import { FC, useState } from 'react';

export  const Main: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setLoading(true);
    setResponse(null); // Очищаем предыдущий ответ

    try {
      // Замените URL на ваш API endpoint
      const apiResponse = await fetch('https://api.example.com/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputValue }),
      });

      if (!apiResponse.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }

      const data = await apiResponse.json();
      setResponse(data.result || 'Ответ не получен');
    } catch (error) {
      console.error(error);
      setResponse('Произошла ошибка при обработке запроса.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4 w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">AI Query Interface</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите ваш запрос здесь..."
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
          >
            {loading ? 'Загрузка...' : 'Отправить'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="mt-6 flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
          <span className="text-gray-700">Ожидание ответа...</span>
        </div>
      )}

      {response && (
        <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Ответ:</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

