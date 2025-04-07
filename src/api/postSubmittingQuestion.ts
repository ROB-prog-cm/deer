import axios from 'axios';
import { responseReceived } from '../store/store.tsx';
import { createEffect } from 'effector';

export const postSubmittingQuestion  = createEffect( async (postQuestionState: string) => {


  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'meta-llama/llama-3.2-3b-instruct:free',
        messages: [
          {
            role: 'user',
            content: postQuestionState,
          },
        ],
      },
      {
        headers: {
          Authorization: 'Bearer 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',
          'Content-Type': 'application/json',
        },
      },
    );
    responseReceived(response.data.choices[0].message.content);
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }
})

