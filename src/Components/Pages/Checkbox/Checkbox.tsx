import { useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from '../../../pages/Advantages/Advantages';
import { getLocal } from '../../../helpers/localStorage';

const Checkbox = ({
  options,
  control,
  setValue,
}: {
  options: number[];
  control: Control<FormValues>;
}) => {
  const { checkboxGroup } = getLocal('user-adv');

  const [newValue, setNewValue] = useState<(number | null)[]>([]);

  // useEffect(() => {
  //   if (newValue !== checkboxGroup) {

  //     field.onChange(newValue);
  //   }
  // }, [newValue, checkboxGroup]);

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
                  {...field}
                  onChange={(e) => {
                    const updatedValue = [...newValue];
                    updatedValue[index] = e.target.checked
                      ? Number(e.target.value)
                      : null;
                    console.log(newValue);
                    setNewValue(updatedValue);
                    console.log(newValue);
                    if (newValue.length !== 0) {
                      setValue('checkboxGroup', newValue);
                    }
                  }}
                  defaultChecked={
                    newValue.length === 0 ? newValue.includes(option) : false
                  }
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

export default Checkbox;
