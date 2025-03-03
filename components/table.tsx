"use client";
import Link from "next/link";
import { Icon } from "./icons";
import Image from "next/image";

export function Table({
  data,
  labels,
  onEdit,
  goTo,
}: {
  number?: boolean;
  data: Record<string, string | number | any>[];
  labels: {
    key: string;
    title: string;
    isObject?: boolean;
    timeStamp?: boolean;
    rounded?: boolean;
    link?: string;
    status?: boolean;
  }[];
  onEdit?: (id: string) => void;
  goTo?: string;
}) {
  const renderContent = (item, el) => {
    if (item.link && el[item.key] === "@") {
      return "-";
    }

    if (item.link && (item.key === "youtube" || item.key === "tiktok")) {
      return <Link href={`${item.link}${el[item.key]}`}>{el[item.key]}</Link>;
    }

    if (item.link) {
      const link = el[item.key].split("@");
      return <Link href={`${item.link}${link[1]}`}>{el[item.key]}</Link>;
    }

    if (item.key === "avatar") {
      return (
        <img
          src={el[item.key]}
          alt={""}
          className="w-[100px] object-cover h-[100px] rounded-md"
        />
      );
    }

    if (!el[item.key]) {
      return "-";
    }

    if (item.key === "influencerStatus" && el[item.key] == "1") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-[8px] h-[8px] rounded-full bg-[#1BFF1B]"></div>{" "}
          <span>Принято</span>
        </div>
      );
    }

    if (item.key === "influencerStatus" && el[item.key] == "3") {
      return (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-[#FF1B1F]"></div>{" "}
            <div>Отклонeно</div>
          </div>
          <div>{el.reason}</div>
        </div>
      );
    }

    return (
      <div
        className={`${
          item.rounded
            ? "border rounded-[10px] w-fit px-3 py-[6px] text-[12px] leading-[12px]"
            : ""
        }`}
      >
        {el[item.key]}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <table>
        <thead>
          <tr>
            {labels.map(({ title, key }) => (
              <th
                key={key}
                className="text-[#AAAAAA]  border-b border-lightGrey font-semibold text-base leading-5 p-3 text-left"
              >
                {title}
              </th>
            ))}
            {(onEdit || goTo) && (
              <th className="text-[#AAAAAA] border-b border-lightGrey font-semibold text-base leading-5 p-3 text-left">
                Действия
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length
            ? data.map((el, index) => (
                <tr key={el.id}>
                  {labels.map((item) => (
                    <td
                      key={item.key}
                      className="text-left border-b border-lightGrey font-semibold text-base leading-5 p-3 py-2"
                    >
                      {renderContent(item, el)}
                    </td>
                  ))}
                  {(onEdit || goTo) && (
                    <td className="flex gap-4 text-left border-b border-lightGrey font-semibold text-base px-3 py-2 leading-5 h-[117px] items-center">
                      {goTo && (
                        <Link href={`${goTo}/${el.id}`}>
                          <Icon name="GoTo" className="cursor-pointer" />
                        </Link>
                      )}
                      {onEdit && (
                        <Icon
                          name="Edit"
                          onClick={() => onEdit(String(el.id))}
                          className="cursor-pointer"
                        />
                      )}
                    </td>
                  )}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
