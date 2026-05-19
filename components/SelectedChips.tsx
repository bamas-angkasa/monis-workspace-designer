import type { Option } from "@/types/product";

type SelectedChipsProps = {
  items: Option[];
};

export function SelectedChips({ items }: SelectedChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.id}
          className="rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-2 text-xs font-extrabold text-[var(--green-dark)] shadow-sm"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
