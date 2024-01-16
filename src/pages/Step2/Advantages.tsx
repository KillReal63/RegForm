import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './Advantages.module.css';
import HeaderStepper from '../../ui/Stepper/Stepper';
import { useController, useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';

const Advantages = () => {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'test',
    },
  );

  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = useState(field.value || []);

  return (
    <div className={styles.main}>
      <HeaderStepper step={1} />
      <form className={styles.form}></form>

      <div>
        {' '}
        {fields.map((field, index) => (
          <Input
            key={field.id} // important to include key with field's id
            {...register(`test.${index}.value`)}
          />
        ))}
        <Button onClick={() => append({ value: '' })}>+</Button>
        <Button onClick={() => remove()}>Удалить</Button>
      </div>
    </div>
  );
};

export default Advantages;
