import { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';

type Props = {
  control: Control;
  options: number[];
};

const Checkbox: FC<Props> = ({ options, control }) => {
  const { field } = useController({
    control,
    name: 'controlled',
  });

  const [value, setValue] = useState(field.value || []);

  return (
    <>
      {options.map((option, index) => (
        <label key={index}>
          <input
            onChange={(e) => {
              const valueCopy = [...value];
              valueCopy[index] = e.target.checked
                ? parseInt(e.target.value)
                : '';
              field.onChange(valueCopy);
              setValue(valueCopy);
            }}
            style={{
              marginRight: 6,
            }}
            key={index}
            type='checkbox'
            checked={value.includes(option)}
            value={option}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
