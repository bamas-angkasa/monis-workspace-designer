"use client";

import { Home, Warehouse, BriefcaseBusiness } from "lucide-react";
import type { RoomTemplate, TemplateId } from "@/types/product";

type TemplateSelectorProps = {
  templates: RoomTemplate[];
  selectedTemplate: TemplateId;
  onSelect: (templateId: TemplateId) => void;
};

const icons = {
  workstation: BriefcaseBusiness,
  "living-room": Home,
  garage: Warehouse,
};

export function TemplateSelector({
  templates,
  selectedTemplate,
  onSelect,
}: TemplateSelectorProps) {
  return (
    <div className="grid gap-2">
      {templates.map((template) => {
        const Icon = icons[template.id];
        const selected = template.id === selectedTemplate;

        return (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template.id)}
            className={`group rounded-2xl border p-4 text-left transition ${
              selected
                ? "border-[var(--green)] bg-[var(--panel-strong)] shadow-[0_18px_40px_rgba(48,76,59,0.14)]"
                : "border-[var(--line)] bg-[var(--input)] hover:border-[var(--green)]"
            }`}
            aria-pressed={selected}
          >
            <span className="flex items-start gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  selected
                    ? "bg-[var(--green-dark)] text-[var(--background)]"
                    : "bg-[var(--surface)] text-[var(--green-dark)]"
                }`}
              >
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-sm font-extrabold">
                  {template.name}
                </span>
                <span className="mt-1 block text-xs font-semibold leading-5 text-[var(--muted)]">
                  {template.description}
                </span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
