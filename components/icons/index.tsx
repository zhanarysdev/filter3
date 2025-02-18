import { AppStore } from "./app-store";
import { ArrowDown } from "./arrow-down";
import { CaretDown } from "./caret-down";
import { Close } from "./close";
import { Edit } from "./edit";
import { Filter } from "./filter";
import { GoLink } from "./go-link";
import { GoTo } from "./go-to";
import { Logo } from "./logo";
import { Minus } from "./minus";
import { Pass } from "./pass";
import { PlayMarket } from "./play-market";
import { Plus } from "./plus";
import { Search } from "./search";
import { Sorting } from "./sorting";
import { Trash } from "./trash";

const icons = {
  Logo,
  AppStore,
  PlayMarket,
  Filter,
  CaretDown,
  Pass,
  Search,
  Plus,
  Minus,
  ArrowDown,
  GoLink,
  GoTo,
  Close,
  Trash,
  Edit,
  Sorting,
};

export const Icon = ({
  name,
  className,
  onClick,
}: {
  name: keyof typeof icons;
  className?: string;
  onClick?: () => void;
}) => {
  const Result = icons[name];
  if (onClick) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        <Result className="cursor-pointer" />
      </div>
    );
  }
  return <Result className={className ?? ""} />;
};
