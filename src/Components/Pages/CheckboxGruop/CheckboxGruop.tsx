import { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { getLocal } from '../../../helpers/localStorage';
import { TCheckbox } from '../../../Shared/Types/AdvantagesTypes';

const CheckboxGruop: FC<TCheckbox> = ({ options, control, setValue }) => {
  const { checkboxGroup } = getLocal('user-adv');

  const [checkboxValue, setCheckboxValue] = useState(checkboxGroup || []);

  useEffect(() => {
    setValue('checkboxGroup', checkboxValue);
  }, [checkboxValue, setValue]);

  const handleChange = (index: number, checked: boolean) => {
    const newValue = [...checkboxValue];
    newValue[index] = checked ? Number(options[index]) : null;
    setCheckboxValue(newValue);
  };

  return (
    <div style={{ display: 'grid' }}>
      {options.map((option, index) => (
        <div key={index}>
          <Controller
            name='checkboxGroup'
            control={control}
            render={({ field: { ref, ...field } }) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  ref={ref}
                  type='checkbox'
                  checked={checkboxValue[index] === Number(option)}
                  {...field}
                  onChange={(e) => handleChange(index, e.target.checked)}
                  value={option}
                />
                <label style={{ marginLeft: 10 }}>{option}</label>
              </div>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxGruop;
