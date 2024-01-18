import { useState } from 'react';
import { useController } from 'react-hook-form';

const Checkbox = ({ options, control, name }) => {
  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = useState(field.value || []);

  return (
    <>
      {options.map((option, index) => (
        <input
          onChange={(e) => {
            const valueCopy = [...value];

            // update checkbox value
            valueCopy[index] = e.target.checked ? e.target.value : null;

            // send data to react hook form
            field.onChange(valueCopy);

            // update local state
            setValue(valueCopy);
          }}
          key={option}
          type='checkbox'
          checked={value.includes(option)}
          value={option}
        />
      ))}
    </>
  );
};

export default Checkbox;
