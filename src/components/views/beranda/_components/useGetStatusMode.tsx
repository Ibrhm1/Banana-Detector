import { useQuery } from '@tanstack/react-query';
import { api } from '~/lib/config/api';

export default function useGetStatusMode() {
  return useQuery({
    queryKey: ['status-model'],
    queryFn: async () => {
      const { data } = await api.get('/');

      return data;
    },
    enabled: true,
  });
}
