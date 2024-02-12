import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Input from '../../../ui/Input/Input';
import { ProfileFormValues } from '../../../Shared/Types/ProfileTypes';

type FieldName = 'nickName' | 'firstName' | 'lastName';

const ProfileInputs: FC<ProfileFormValues> = ({ control, errors, options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div
          style={{ display: 'flex', flexDirection: 'column', width: 300 }}
          key={index}
        >
          <Controller
            name={option.name as FieldName}
            control={control}
            defaultValue=''
            render={({ field: { ref, ...field } }) => (
              <Input
                label={option.label}
                type='text'
                placeholder='Placeholder'
                {...field}
                inputRef={ref}
              />
            )}
          />
          {errors[index]?.message}
        </div>
      ))}
    </div>
  );
};

export default ProfileInputs;
