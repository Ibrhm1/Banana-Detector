import { ChartPie, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';

type HasilPrediksiProps = {
  all_probabilities: {
    busuk: number;
    matang: number;
    mentah: number;
    terlalu_matang: number;
  };
  confidence: number;
  prediction: string;
};

export default function HasilPrediksi(props: HasilPrediksiProps) {
  function toPersentase(num: number = 0) {
    return parseFloat(num.toFixed(2)) + '%';
  }

  return (
    <Card className="border-0 shadow-lg p-6 rounded-2xl">
      {!props.all_probabilities && !props.confidence && !props.prediction ? (
        <>
          <CardHeader className="text-center space-y-2">
            <div className="bg-green-300 text-green-800 rounded-full p-3 w-fit mx-auto">
              <ChartPie />
            </div>

            <CardTitle className="text-2xl font-bold capitalize">
              Hasil Prediksi
            </CardTitle>
          </CardHeader>

          <CardContent className="h-full">
            <section className="bg-green-200/50 h-full mx-auto p-5 lg:p-10 rounded-xl flex gap-3 flex-col items-center justify-center">
              <Search />
              <p className="text-gray-600 font-normal">
                Upload gambar untuk melihat hasil prediksi
              </p>
            </section>
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader className="text-center space-y-2">
            <div className="bg-green-300 text-green-800 rounded-full p-3 w-fit mx-auto">
              <ChartPie />
            </div>
            <CardTitle className="text-2xl font-bold capitalize">
              Hasil Prediksi
            </CardTitle>

            <section className="bg-orange-100 p-4 rounded-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <h2 className="text-xl font-semibold capitalize">
                  Pisang&nbsp;{props?.prediction}
                </h2>
              </div>
              <h1 className="text-lg text-orange-700">
                Kepercayaan: {toPersentase(props?.confidence) || 0}
              </h1>
            </section>
          </CardHeader>

          <CardContent className="space-y-6 mt-4">
            {/* Confidence Bar */}
            <section>
              <p className="text-sm font-medium mb-2">
                Tingkat Keyakinan Sistem
              </p>
              <Progress value={props?.confidence} className="h-3" />
            </section>

            {/* Probabilities Chart */}
            <section className="space-y-3">
              <p className="font-semibold">Detail Probabilitas</p>
              {Object.entries(props?.all_probabilities || {}).map(
                ([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize text-sm">
                        {key === 'terlalu_matang' ? 'Terlalu Matang' : key}
                      </span>
                      <span className="text-sm">
                        {toPersentase(value) || 0}
                      </span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                )
              )}
            </section>
          </CardContent>
        </>
      )}
    </Card>
  );
}
