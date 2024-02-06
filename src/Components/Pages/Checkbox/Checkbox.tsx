import { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import styles from './Checkbox.module.css';

type Props = {
  control: Control;
  options: number[];
};

const Checkbox: FC<Props> = ({ options, control }) => {
  const { field } = useController({
    control,
    name: 'checkboxGroup',
  });

  const [value, setValue] = useState(field.value || []);

  return (
    <div className={styles.wrapper}>
      {options.map((option, index) => (
        <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
          <input
            onChange={(e) => {
              const valueCopy = [...value];
              valueCopy[index] = e.target.checked
                ? parseInt(e.target.value)
                : null;
              field.onChange(valueCopy);
              setValue(valueCopy);
            }}
            key={index}
            type='checkbox'
            checked={value.includes(option)}
            value={option}
          />
          <label style={{ marginLeft: 10 }}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
