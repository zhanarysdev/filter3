"use client";

import { Table } from "@/components/table";
import { useEffect } from "react";

const labels = [
  {
    key: "id",
    title: "ID",
  },
  {
    key: "name",
    title: "name",
  },
  {
    key: "status",
    title: "status",
  },
];
const data = [
  {
    id: "0",
    name: "test",
    status: "test",
  },
  {
    id: "1",
    name: "test1",
    status: "test1",
  },
];

export default function Moderation() {
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    fetch("https://api.filter.li/api/v1/influencer/list", {
      method: "POST",
      body: JSON.stringify({
        page: 1,
        status: 1,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="p-4">
      <div className="mb-16">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold leading-7">Модерация</div>
        </div>
      </div>
      <Table data={data} labels={labels} onEdit={(id) => console.log(id)} />
    </div>
  );
}
