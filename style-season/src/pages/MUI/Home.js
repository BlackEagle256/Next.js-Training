import Head from "next/head";
import DashboardTabs from "./TabsPro";

export default function Home() {
  return (
    <>
      <Head>
        <title>داشبورد حرفه‌ای با MUI</title>
      </Head>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <DashboardTabs />
      </main>
    </>
  );
}
