import { withAuth } from "../lib/auth";

export const getServerSideProps = withAuth(async (context) => {
  const user = context.user;
  return {
    props: {
      user,
    },
  };
});

export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <span className="mr-2 text-gray-700">{user || 'کاربر'}</span>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-blue-500">داشبورد مدیریت</h1>
        </div>
      </header>

      {/* Main Content*/}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Info Carts */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">تعداد کاربران</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
            <p className="text-green-500 text-sm mt-1">↑ 12% نسبت به ماه قبل</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">فروش ماهانه</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">$45,231</p>
            <p className="text-green-500 text-sm mt-1">↑ 8.2% نسبت به ماه قبل</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">تعداد سفارشات</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,543</p>
            <p className="text-red-500 text-sm mt-1">↓ 3.1% نسبت به ماه قبل</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">رضایت مشتریان</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">89.5%</p>
            <p className="text-green-500 text-sm mt-1">↑ 1.7% نسبت به ماه قبل</p>
          </div>
        </div>

        {/* Charts And Table*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">آمار فروش سالانه</h2>
              <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>امسال</option>
                <option>سال گذشته</option>
                <option>2 سال قبل</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center text-gray-400">
              [نمودار فروش سالانه]
            </div>
          </div>

          {/* Table Last Activities*/}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">آخرین فعالیت‌ها</h2>
            <div className="space-y-4">
              {[
                { id: 1, user: 'زینب دادگسترنژاد', action: 'سفارش جدید ثبت کرد', time: '2 دقیقه پیش', icon: '🛒' },
                { id: 2, user: 'مریم حسینی', action: 'پرداخت انجام داد', time: '15 دقیقه پیش', icon: '💳' },
                { id: 3, user: 'محمدحسین دادگسترنژاد', action: 'نظر جدید ثبت کرد', time: '1 ساعت پیش', icon: '💬' },
                { id: 4, user: 'سارا کریمی', action: 'حساب کاربری ایجاد کرد', time: '3 ساعت پیش', icon: '👤' },
                { id: 5, user: 'محمد علیزاده', action: 'کالا به سبد اضافه کرد', time: '5 ساعت پیش', icon: '🛍️' },
              ].map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.user} <span className="text-gray-500 font-normal">{item.action}</span></p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table Last Orders */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
              مشاهده همه
            </button>
            <h2 className="text-lg font-medium text-gray-900">آخرین سفارشات</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">شماره سفارش</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">مشتری</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وضعیت</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاریخ</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">مبلغ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: '#ORD-1234', customer: 'زینب اقتداری کیا', status: 'تکمیل شده', date: '1402/05/15', amount: '۱,۲۳۰,۰۰۰ تومان' },
                  { id: '#ORD-1233', customer: 'مریم حسینی', status: 'در حال پردازش', date: '1402/05/14', amount: '۸۵۰,۰۰۰ تومان' },
                  { id: '#ORD-1232', customer: 'رضا نوروزی', status: 'ارسال شده', date: '1402/05/13', amount: '۲,۱۵۰,۰۰۰ تومان' },
                  { id: '#ORD-1231', customer: 'سارا کریمی', status: 'لغو شده', date: '1402/05/12', amount: '۵۴۰,۰۰۰ تومان' },
                  { id: '#ORD-1230', customer: 'محمد علیزاده', status: 'تکمیل شده', date: '1402/05/11', amount: '۱,۷۶۰,۰۰۰ تومان' },
                ].map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'تکمیل شده' ? 'bg-green-100 text-green-800' :
                          order.status === 'در حال پردازش' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'ارسال شده' ? 'bg-blue-100 text-blue-800' :
                              'bg-red-100 text-red-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} شرکت شما. تمام حقوق محفوظ است.
        </div>
      </footer>
    </div>
  );
}