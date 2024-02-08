import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { FormValue } from '../../Main/Main';
import Input from '../../../ui/Input/Input';
import { useEffect } from 'react';
import { getLocal } from '../../../helpers/localStorage';

const PhoneMask = ({
  control,
  setValue,
}: {
  control: Control<FormValue>;
  setValue: UseFormSetValue<FormValue>;
}) => {
  useEffect(() => {
    const data = getLocal('user-contacts');
    if (data) {
      setValue('phone', data.phone);
    }
  }, [setValue]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <Controller
        name='phone'
        control={control}
        defaultValue=''
        render={({ field: { ref, ...field } }) => (
          <Input
            label='Номер телефона'
            type='tel'
            inputRef={ref}
            placeholder='+7 (999) 999-99-99'
            {...field}
            onChange={(e) => {
              const value = e.target.value;
              let formattedPhone = value
                .replace(/\D/g, '')
                .replace(/(\d{1})/, '+7 ')
                .replace(/(\d{3})/, '($1) ')
                .replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
              if (formattedPhone.length > 18) {
                formattedPhone = formattedPhone.slice(0, 18);
              }
              field.onChange(formattedPhone);
            }}
          />
        )}
      />
    </div>
  );
};

export default PhoneMask;
