import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Header, Informations, Main, Sidebar } from './imports';


function App() {

  const [models, setModels] = useState(null);
  // const [models, setModels] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://openrouter.ai/api/v1/models');
        setModels(response.data);
      } catch (err) {
      }
    };
    fetchData();
  }, []);

  console.log('models', models);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            model: 'meta-llama/llama-3.2-3b-instruct:free',
            messages: [
              {
                role: 'user',
                content: 'deer',
              },
            ],
          },
          {
            headers: {
              Authorization:
                'Bearer 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',
              'Content-Type': 'application/json',
            },
          },
        );
        console.log('Response:', response.data);
        console.log('Response2:', response.data.choices[0].message.content);
      } catch (error: any) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <Informations/>
      <div className={'flex'}>
        <Sidebar/>
        <Main />
      </div>
      <Footer/>
    </div>
  );
}

export default App;