import { Control, FieldError } from 'react-hook-form';

export type TProfile = {
  nickName: string;
  firstName: string;
  lastName: string;
  gender: { value: string; label: string };
};

export type ProfileFormValues = {
  control: Control<TProfile>;
  options: {
    name: string;
    label: string;
  }[];
  errors: Record<string, FieldError>;
};
