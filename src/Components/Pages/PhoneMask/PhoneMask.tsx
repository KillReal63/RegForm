import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormValue } from '../../Main/Main';
import Input from '../../../ui/Input/Input';

const PhoneMask = ({ control }: { control: Control<FormValue> }) => {
  const [phone, setPhone] = useState('');
  return (
    <div style={{ marginBottom: 10 }}>
      <Controller
        name='phone'
        control={control}
        defaultValue={phone}
        render={({ field: { ref, ...field } }) => (
          <Input
            label='Номер телефона'
            type='tel'
            inputRef={ref}
            {...field}
            onChange={(e) => {
              const value = e.target.value;
              let formattedPhone = value
                .replace(/\D/g, '')
                .replace(/(\d{1})/, '+7 ')
                .replace(/(\d{3})/, '($1) ')
                .replace(/(\d{3})-(\d{0,3})/, '$1-$2')
                .replace(/(\d{2})-(\d{0,2})/, '$1-$2');
              if (formattedPhone.length > 19) {
                formattedPhone = formattedPhone.slice(0, 19);
              }

              setPhone(formattedPhone);
              field.onChange(formattedPhone);
            }}
          />
        )}
      />
    </div>
  );
};

export default PhoneMask;
