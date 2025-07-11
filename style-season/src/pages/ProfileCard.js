export default function ProfileCard() {
    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center">
            <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="Prof.jpg"
                alt="Profile"
            />
            <h2 className="text-xl font-semibold text-gray-800">محمدحسین دادگستر</h2>
            <p className="text-sm text-gray-500 mb-4">Front-End Developer</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition outline">
                دنبال کردن
            </button>
        </div>
    )
}