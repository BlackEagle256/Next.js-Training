export function withAuth(gssp) {
  return async (context) => {
    const { req } = context;
    const cookie = req.headers.cookie || "";
    const user = cookie
      .split(";")
      .find((c) => c.trim().startsWith("user="))
      ?.split("=")[1];

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    // حالا user رو به context اضافه می‌کنیم (مثلا به context برای gssp)
    context.user = user;

    // اجرای gssp اصلی با context تغییر یافته
    const gsspData = await gssp(context);

    // اضافه کردن user به props برگشتی
    return {
      ...gsspData,
      props: {
        ...(gsspData.props || {}),
        user,
      },
    };
  };
}
