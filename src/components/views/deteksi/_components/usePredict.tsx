import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { api } from '~/lib/config/api';
import { PredictType } from '~/types/predict';
import { ResultPredictType } from '~/types/ResultPredict';

export default function usePredict() {
  return useMutation({
    mutationKey: ['predict-image'],
    mutationFn: async (payload: PredictType) => {
      try {
        const formData = new FormData();
        formData.append('file', payload.file);

        const { data } = await api.post('/api/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        return data.data as ResultPredictType;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log('ini Error', error.response?.data);
        }
      }
    },
  });
}
