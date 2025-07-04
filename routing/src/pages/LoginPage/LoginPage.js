import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const userIsLoggedIn = true;
    if (userIsLoggedIn) {
      router.replace("/dashboard");
    }
  }, []);

  return <div>فرم لاگین</div>;
}
