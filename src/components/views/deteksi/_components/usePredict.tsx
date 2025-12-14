import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
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
          toast.error(error.response?.data.error, {
            duration: 5000,
            description: 'Please try again later',
          });
        }
        toast.error('Please try again later');
      }
    },
  });
}
