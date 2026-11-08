import { useState } from "react";
import { toast } from "sonner";
import { whatsappLink } from "@/lib/site";
import { fieldClass } from "./SearchBar";

export type Field = { name: string; label: string; type?: string; options?: string[]; textarea?: boolean; required?: boolean };

export function EnquiryForm({ title, fields, intro, submitLabel }: { title: string; intro: string; fields: Field[]; submitLabel: string }) {
  const [values, setValues] = useState<Record<string, string>>({});
  return (
    <form
      className="grid gap-4 rounded-2xl border bg-card p-6 md:p-8 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const lines = fields.map((f) => `${f.label}: ${values[f.name] ?? ""}`).join("\n");
        window.open(whatsappLink(`${intro}\n\n${lines}`), "_blank");
        toast.success("Opening WhatsApp to send your message.");
      }}
    >
      <h2 className="text-2xl text-primary-deep sm:col-span-2">{title}</h2>
      {fields.map((f) => {
        const common = { id: f.name, required: f.required ?? true, value: values[f.name] ?? "", onChange: (e: { target: { value: string } }) => setValues({ ...values, [f.name]: e.target.value }) };
        return (
          <div key={f.name} className={f.textarea ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="mb-1 block text-sm font-medium">{f.label}</label>
            {f.options ? (
              <select {...common} className={fieldClass}><option value="">Select…</option>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
            ) : f.textarea ? (
              <textarea {...common} rows={5} className={`${fieldClass} h-auto py-3`} />
            ) : (
              <input {...common} type={f.type ?? "text"} className={fieldClass} />
            )}
          </div>
        );
      })}
      <button className="h-12 rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary-deep sm:col-span-2">{submitLabel}</button>
    </form>
  );
}
