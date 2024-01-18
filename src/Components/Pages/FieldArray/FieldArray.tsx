import { useState } from 'react';
import { useController, useFieldArray } from 'react-hook-form';
import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';

const FieldArray = ({ control, register  }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });

  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = useState(field.value || []);

  return (
    <div>
      <div>
        {fields.map((field, index) => (
          <div key={index}>
            <Input
              key={field.id}
              placeholder='Placeholder'
              {...register(`test.${index}.value`)}
            />
            <Button onClick={() => remove()}>Удалить</Button>
          </div>
        ))}
      </div>
      <Button onClick={() => append({ value: '' })}>+</Button>
    </div>
  );
};

export default FieldArray;
