import { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { FormValues } from '../../../pages/Advantages/Advantages';
import { getLocal } from '../../../helpers/localStorage';

const Checkbox = ({
  options,
  control,
}: {
  options: number[];
  control: Control<FormValues>;
}) => {
  const { field } = useController({
    control,
    name: 'checkboxGroup',
  });

  const [value, setValue] = useState([]);

  useEffect(() => {
    const { checkboxGroup } = getLocal('user-adv');
    if (checkboxGroup) {
      setValue(checkboxGroup);
    }
  }, [setValue]);

  return (
    value && (
      <div style={{ display: 'grid' }}>
        {options.map((option, index) => (
          <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
            <input
              onChange={(e) => {
                const valueCopy = [...value];
                valueCopy[index] = e.target.checked
                  ? parseInt(e.target.value)
                  : undefined;
                field.onChange(valueCopy);
                setValue(valueCopy);
              }}
              type='checkbox'
              checked={value.includes(option)}
              value={option}
            />
            <label style={{ marginLeft: 10 }}>{option}</label>
          </div>
        ))}
      </div>
    )
  );
};

export default Checkbox;
