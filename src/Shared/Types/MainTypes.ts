import { Control, UseFormSetValue } from 'react-hook-form';

export type TMain = {
  phone: string;
  email: string;
};

export type TPhoneMask = {
  control: Control<TMain>;
  setValue: UseFormSetValue<TMain>;
};
