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
    key: "avatar",
    title: "Аватвр",
  },
  {
    key: "fullName",
    title: "ФИO",
  },
  {
    key: "username",
    title: "username",
  },
  {
    key: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    key: "tiktok",
    title: "Tiktok",
    link: "https://www.tiktok.com/",
  },
  {
    key: "youtube",
    title: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    key: "credits",
    title: "PayPal",
  },
  {
    key: "influencerStatus",
    title: "Статус",
  },
];

export default function Moderation() {
  const [isOpen, setOpen] = useState<null | string>(null);
  const [status, setStatus] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>([]);
  const { data, isLoading, mutate } = useSWR(
    { url: "influencer/list", body: JSON.stringify({ page: 1 }) },
    fetcher
  );
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);
  useEffect(() => {
    if (data?.items) {
      const res = data.items.map((el) => ({
        ...el,
        instagram: `@${el.influencer.instagram}`,
        tiktok: `@${el.influencer.tiktok}`,
        youtube: `@${el.influencer.youtube}`,
      }));
      setFilteredData(res);
    }
  }, [data]);
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
      <Table data={filteredData} labels={labels} onEdit={(id) => setOpen(id)} />
      {isOpen &&
        createPortal(
          <Modal
            onSave={() => {
              save();
              setOpen(null);

              setStatus(null);
            }}
            label={"Изменить"}
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
