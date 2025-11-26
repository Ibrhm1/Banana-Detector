export default function HeaderDeteksi() {
  return (
    <header className="text-center space-y-5">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Deteksi Tingkat Kematangan{' '}
        <span className="font-bold bg-linear-to-r from-primary to-green-500 text-transparent bg-clip-text">
          Buah Pisang
        </span>
      </h1>

      <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
        Gunakan teknologi AI canggih untuk menentukan tingkat kematangan pisang
        Anda dengan akurat hanya dengan foto.
      </p>
    </header>
  );
}
