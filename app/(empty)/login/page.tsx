"use client";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { push } = useRouter();
  const [errors, setErrors] = useState<null | string>(null);
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch("https://api.filter.li/api/v1/auth/with_password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.get("login"),
        password: data.get("password"),
      }),
    })
      .then((res) => res.json())
      .then((res: any) => {
        if (res.result) {
          localStorage.setItem("token", res.result.token);
          push("/moderation");
        } else {
          setErrors("something went wrong");
        }
      });
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        className="max-w-[320px] flex flex-col gap-4 w-full"
        onSubmit={(e) => submit(e)}
      >
        <div className="text-red-500">{errors}</div>
        <Input name="login" placeholder="login" />
        <Input name="password" placeholder="password" />
        <Button
          type="submit"
          styles="items-center justify-center"
          label={"Login"}
        />
      </form>
    </div>
  );
}
