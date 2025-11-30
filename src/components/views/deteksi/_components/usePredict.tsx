import { useMutation } from '@tanstack/react-query';
import { api } from '~/lib/config/api';
import { PredictType } from '~/types/predict';

export default function usePredict() {
  return useMutation({
    mutationKey: ['predict-image'],
    mutationFn: async (payload: PredictType) => {
      const formData = new FormData();
      formData.append('file', payload.file);

      const { data } = await api.post('/api/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data.data;
    },
  });
}
