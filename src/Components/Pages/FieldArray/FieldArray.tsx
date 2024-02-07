import { Control, Controller, useFieldArray } from 'react-hook-form';
import styles from './FieldArray.module.css';
import Input from '../../../ui/Input/Input';
import { FormValues } from '../../../pages/Advantages/Advantages';

const FieldArray = ({ control }: { control: Control<FormValues> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fieldArray',
  });

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={styles.fields_array}>
            <Controller
              control={control}
              name={`fieldArray.${index}.adv`}
              defaultValue=''
              render={({ field: { ref, ...field } }) => (
                <Input placeholder='Placehoder' {...field} inputRef={ref} />
              )}
            />
            <button
              type='button'
              style={{
                background: 'none',
                border: 'none',
                marginLeft: 16,
                cursor: 'pointer',
              }}
              onClick={() => remove(index)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='20'
                height='20'
                className='main-grid-item-icon'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              >
                <polyline points='3 6 5 6 21 6' />
                <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                <line x1='10' x2='10' y1='11' y2='17' />
                <line x1='14' x2='14' y1='11' y2='17' />
              </svg>
            </button>
          </div>
        );
      })}
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: 44,
          height: 44,
        }}
        type='button'
        onClick={() =>
          append({
            adv: '',
          })
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='44'
          height='44'
          className='main-grid-item-icon'
          fill='none'
          stroke='#5558FA'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
        >
          <rect height='18' rx='2' ry='2' width='18' x='3' y='3' />
          <line x1='12' x2='12' y1='8' y2='16' />
          <line x1='8' x2='16' y1='12' y2='12' />
        </svg>
      </button>
    </div>
  );
};

export default FieldArray;
