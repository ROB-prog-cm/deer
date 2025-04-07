import axios from 'axios';
import { getModels } from '../store/store.tsx';
import { createEffect } from 'effector';

export const getAllModels = createEffect(async () => {
  try {
    const response = await axios.get('https://openrouter.ai/api/v1/models');
    getModels(response.data);
  } catch (error: any) {
    console.error('Error fetching models:', error.response?.data || error.message);
  }
});