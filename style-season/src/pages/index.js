import Head from "next/head";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Head>
        <title>خانه | سایت من</title>
        <meta name="description" content="این صفحه اصلی سایت Next.js ماست" />
        <meta name="keywords" content="nextjs, seo, آموزش, برنامه نویسی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white flex justify-between shadow-md px-6 py-4 items-center">
        <h1 className="font-bold text-blue-600 text-2xl">NextProfile</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500 ">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a>
        </nav>
      </header>

      <main className="p-6 flex flex-col md:flex-row md:items-start gap-6">
        <section className="bg-white p-6 rounded-xl shadow-lg flex-1 text-center">
          <img
            src="https://mhdadgostar.liara.run/Public/Prof.jpg"
            className="w-28 h-28  rounded-full mx-auto mb-4 border-4 border-blue-500"
            alt="user Avatar"
          />
          <h2 className="text-xl font-semibold">Mohammad Hosein Dadgostar Nejhad</h2>
          <p className="text-sm text-gray-600 mt-1">Front End Developer</p>
          <p className="mt-4 text-grey-500">Loves UI Design & Building Responsive Apps.</p>
          <button
            className="mt-6 bg-blue-500 text-white px-5 py-3 rounded-full 
            hover:bg-blue-600 transition
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                  active:bg-blue-700"
          >
            Follow
          </button>
        </section>


        <section className="bg-white p-6 rounded-xl shadow-lg flex-1">
          <h3 className="text-center text-lg font-bold border-b mb-4 pb-2 border-gray-200">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm text-center">HTML</span>
            <span className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full text-sm text-center">CSS3</span>
            <span className="bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm text-center">JavaScript</span>
            <span className="bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm text-center">React.Js</span>
            <span className="bg-pink-100 text-pink-700 py-1 px-3 rounded-full text-sm text-center">Node.Js</span>
            <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-sm text-center">Next.Js</span>
            <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm text-center">Java</span>
            <span className="bg-teal-100 text-teal-700 py-1 px-3 rounded-full text-sm text-center">MUI</span>
            <span className="bg-orange-100 text-orange-700 py-1 px-3 rounded-full text-sm text-center">Tailwind</span>
            <span className="bg-fuchsia-100 text-fuchsia-700 py-1 px-3 rounded-full text-sm text-center">Git</span>
            <span className="bg-cyan-100 text-cyan-700 py-1 px-3 rounded-full text-sm text-center">TypeScript</span>
            <span className="bg-violet-100 text-violet-700 py-1 px-3 rounded-full text-sm text-center">Django</span>
            <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm text-center">Redux</span>
          </div>
        </section>
      </main >
    </div >
  );
}