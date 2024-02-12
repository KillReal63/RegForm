import { Control, UseFormSetValue } from 'react-hook-form';

export type TAdvantages = {
  radioGroup: number;
  checkboxGroup: number[];
  fieldArray: { adv?: string }[];
};

export type TControl = {
  control: Control<TAdvantages>;
};

export type TCheckbox = {
  options: number[];
  setValue: UseFormSetValue<TAdvantages>;
} & TControl;

export type TRadio = {
  options: number[];
} & TControl;
