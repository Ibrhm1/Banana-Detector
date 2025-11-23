import Head from 'next/head';

type PageHeadProps = {
  title: string;
};

export default function PageHead({ title = 'Home' }: PageHeadProps) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Banana Detector | {title}</title>
    </Head>
  );
}
