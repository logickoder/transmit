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
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="text-caption text-neutral-900">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange ? onChange(e.target.value) : undefined}
                className={inputStyle}
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

export function FormField(props: FormFieldProps) {
    const id = props.label.toLowerCase().replace(" ", "-");
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-caption text-neutral-900">
                {props.label}
            </label>
            <InputField
                {...props}
                id={id}
                onChange={(e) => props.onChange ? props.onChange(e.target.value) : undefined}
            />
        </div>
    );
}

export default function InputField(props: InputProps) {
    const required = props.required ?? true;
    return (
        <input
            {...props}
            className={inputStyle}
            value={props.value}
            id={props.id}
            name={props.id}
            required={required}
        />
    );
};

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    id: string;
}

type FormFieldProps = Override<Omit<InputProps, "id">, {
    onChange?: (value: string) => void
}> & {
    label: string;
}

type DropdownFieldProps = Omit<FormFieldProps, "type"> & {
    options: string[]
};

const inputStyle = "border border-neutral-50 rounded-md w-full outline-none px-4 py-3 text-base font-normal text-neutral-300 focus:outline-none focus:border focus:border-purple-400"