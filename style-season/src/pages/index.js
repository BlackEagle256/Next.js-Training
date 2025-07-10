import Head from "next/head";
import Button from "./components/Button";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>خانه | سایت من</title>
        <meta name="description" content="این صفحه اصلی سایت Next.js ماست" />
        <meta name="keywords" content="nextjs, seo, آموزش, برنامه نویسی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ padding: "2rem" }}>
        <h1>صفحه اصلی</h1>
        <Button text="کلیک کن" />
      </div>
    </>
  );
}