import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import Input from '../../../ui/Input/Input';
import { getLocal } from '../../../helpers/localStorage';
import { TPhoneMask } from '../../../Shared/Types/MainTypes';

const PhoneMask: FC<TPhoneMask> = ({ control, setValue }) => {
  useEffect(() => {
    const { phone } = getLocal('user-contacts');
    if (phone) {
      setValue('phone', phone);
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
