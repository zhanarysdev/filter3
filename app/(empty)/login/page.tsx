"use client";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input";

export default function LoginPage() {
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch("https://api.filter.li/api/v1/auth/with_pasword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.get("login"),
        password: data.get("password"),
      }),
    }).then((res) => console.log(res));
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        className="max-w-[320px] flex flex-col gap-4 w-full"
        onSubmit={(e) => submit(e)}
      >
        <Input name="login" placeholder="login" />
        <Input name="password" placeholder="password" />
        <Button styles="items-center justify-center" label={"Login"} />
      </form>
    </div>
  );
}
