/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { Input } from './ui/input';

interface InputType<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  name: string;
  control?: Control<T>;
  errors?: FieldErrors<T>;
  id?: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  bordered?: boolean;
  disabled?: boolean;
}

const InputReu: FC<InputType<any>> = ({ name, control, label, type, disabled }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize text-white">{label}</FormLabel>
          <FormControl>
            <Input
              disabled={disabled}
              type={type}
              placeholder={label}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputReu;
