import { InputHTMLAttributes } from 'react';

type SearchBarProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: string) => void;
  label?: string;
};

export const Search = ({
  onChange,
  value,
  label,
  ...props
}: SearchBarProps) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
};
