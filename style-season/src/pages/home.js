export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <h1 className="text-2x1 font-bold text-blue-600">NextProfile</h1>
                <nav className="space-x-4">
                    <a href="#" className="text-blue-700 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Constact Us</a>
                </nav>
            </header>

            <main className="p-6 bg-red-200 flex flex-col md:flex-row md:items-start gap-6 max-w-5xl mx-auto mt-8">
                
            </main>
        </div>
    )
}
