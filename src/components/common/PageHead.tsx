import Head from 'next/head';

type PageHeadProps = {
  title: string;
};

export default function PageHead({ title = 'Home' }: PageHeadProps) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#fcf6dd" />
      <title>Banana Detector | {title}</title>
    </Head>
  );
}
