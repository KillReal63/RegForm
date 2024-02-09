import { Control, Controller } from 'react-hook-form';
import { FormValues } from '../../../pages/Advantages/Advantages';
import { getLocal } from '../../../helpers/localStorage';

const RadioGroup = ({
  options,
  control,
}: {
  options: number[];
  control: Control<FormValues>;
}) => {
  const { radioGroup } = getLocal('user-adv');

  return (
    <div style={{ display: 'grid' }}>
      {options.map((option, index) => (
        <div key={index}>
          <Controller
            control={control}
            name='radioGroup'
            render={({ field: { ref, ...field } }) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type='radio'
                  ref={ref}
                  {...field}
                  value={option}
                  defaultChecked={radioGroup === option}
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

export default RadioGroup;
