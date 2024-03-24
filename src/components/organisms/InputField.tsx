import React from "react";

export function DropdownField(
    {
        label,
        options,
        value,
        onChange,
    }: DropdownFieldProps
) {
    const id = label.toLowerCase().replace(" ", "-");
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-caption text-neutral-900">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange ? onChange(e.target.value) : undefined}
                className="border border-neutral-50 rounded-md w-full outline-none px-4 py-3 max-w-md text-base font-normal text-neutral-300 focus:outline-none focus:border focus:border-purple-400"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export function FormField(
    {
        label,
        type = "text",
        placeholder = undefined,
        value,
        onChange,
        required = true,
    }: FormFieldProps
) {
    const id = label.toLowerCase().replace(" ", "-");
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-caption text-neutral-900">
                {label}
            </label>
            <InputField
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange ? onChange(e.target.value) : undefined}
                required={required}
            />
        </div>
    );
}

export default function InputField(
    {
        value,
        type,
        onChange,
        placeholder,
        id,
        required,
    }: InputProps
) {
    return (
        <input
            className="border border-neutral-50 rounded-md w-full outline-none px-4 py-3 max-w-md text-base font-normal text-neutral-300 focus:outline-none focus:border focus:border-purple-400"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            id={id}
            name={id}
            autoComplete={id}
            required={required}
        />
    );
};

type InputProps = {
    value: string;
    type: "email" | "password" | "text";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id: string;
    required?: boolean;
};

type FormFieldProps = Override<Omit<InputProps, "id">, {
    onChange?: (value: string) => void
}> & {
    label: string;
}

type DropdownFieldProps = Omit<FormFieldProps, "type"> & {
    options: string[]
};