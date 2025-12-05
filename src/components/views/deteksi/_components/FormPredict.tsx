import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Sparkle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

type InputFileProps = {
  previewImage: string | undefined;
  setPreviewImage: (value: string | undefined) => void;
  mutateDataPredict: (payload: { file: File }) => void;
  isPendingPredict: boolean;
};

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB

const predictSchema = z.object({
  file: z
    .union([z.string().min(1, 'File is required'), z.instanceof(File)])
    .refine((file) => {
      if (file instanceof File) {
        return file.size <= MAX_FILE_SIZE;
      }
      return true;
    }, 'Ukuran file maksimal 3MB'),
});

export default function InputFile(props: InputFileProps) {
  const handleFileChange = (e: HTMLInputElement) => {
    const file = e.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) return;
      const reader = new FileReader();
      reader.onload = () => {
        props.setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const form = useForm<z.infer<typeof predictSchema>>({
    resolver: zodResolver(predictSchema),
    mode: 'onChange',
    defaultValues: {
      file: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof predictSchema>) => {
    props.mutateDataPredict({ file: data.file as File });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {!props.previewImage ? (
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-primary/50 rounded-xl p-14 cursor-pointer bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                    accept="image/png, image/jpeg, image/jpg"
                    max={1}
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      handleFileChange(e.target);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <Button
            disabled={props.isPendingPredict}
            type="submit"
            className="w-full font-semibold"
          >
            {props.isPendingPredict ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                <Sparkle />
                Mulai Prediksi
              </>
            )}
          </Button>
        )}
      </form>
    </Form>
  );
}
