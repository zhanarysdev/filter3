"use client";

import { Modal } from "@/components/modal";
import Radio from "@/components/radio";
import { Spinner } from "@/components/spinner";
import { Table } from "@/components/table";
import { fetcher } from "@/fetcher";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useSWR from "swr";

const labels = [
  {
    key: "id",
    title: "ID",
  },
  {
    key: "fullName",
    title: "name",
  },
  {
    key: "influencerStatus",
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
  const [isOpen, setOpen] = useState<null | string>(null);
  const [status, setStatus] = useState<any>(null);
  const { data, isLoading, mutate } = useSWR(
    { url: "influencer/list", body: JSON.stringify({ page: 1 }) },
    fetcher
  );
  const save = async () => {
    const res = await fetch("https://api.filter.li/api/v1/influencer/confirm", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: isOpen,
        status: status === "Принять" ? 1 : 3,
      }),
    }).then((res) => res.json());
    mutate();
    setStatus(null);
  };
  if (isLoading) return <Spinner />;

  return (
    <div className="p-4">
      <div className="mb-16">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold leading-7">Модерация</div>
        </div>
      </div>
      <Table
        data={data ? data.items : []}
        labels={labels}
        onEdit={(id) => setOpen(id)}
      />
      {isOpen &&
        createPortal(
          <Modal
            onSave={() => {
              save();
              setOpen(null);

              setStatus(null);
            }}
            label={"Edit"}
            close={() => {
              setOpen(null);
              setStatus(null);
            }}
          >
            <Radio
              setStatus={setStatus}
              options={[
                {
                  key: "1",
                  title: "Принять",
                  checked: status
                    ? true
                    : data.items.find(
                        (el) => el.id === isOpen && el.influencerStatus == 1
                      ),
                },
                {
                  key: "3",
                  title: "Отклонить",
                  checked: status
                    ? true
                    : data.items.find(
                        (el) => el.id === isOpen && el.influencerStatus == 3
                      ),
                },
              ]}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
}
