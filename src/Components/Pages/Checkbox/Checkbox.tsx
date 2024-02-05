import { useState } from 'react';
import { useController } from 'react-hook-form';

const Checkbox = ({ options, control, name }) => {
  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = useState(field.value || []);

  // console.log(control, 'control');

  // console.log(field, 'field');

  // console.log(value, 'value');

  return (
    <>
      {options.map((option, index) => (
        <label key={index}>
          <input
            onChange={(e) => {
              const valueCopy = [...value];

              // update checkbox value
              valueCopy[index] = e.target.checked ? e.target.value : '';

              // send data to react hook form
              field.onChange(valueCopy);

              // update local state
              setValue(valueCopy);
            }}
            style={{
              marginRight: 6,
            }}
            key={option}
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
