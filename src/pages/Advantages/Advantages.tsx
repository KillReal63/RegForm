import Button from '../../ui/Button/Button';
import styles from './Advantages.module.css';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Checkbox from '../../Components/Pages/Checkbox/Checkbox';
import FieldArray from '../../Components/Pages/FieldArray/FieldArray';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Data = {
  radioGroup?: number;
  checkboxGroup?: number[];
  fieldArray?: {
    adv?: string;
  }[];
};

const schema = yup
  .object({
    radioGroup: yup.number().required('Выберите один элем.'),
    checkboxGroup: yup
      .array()
      .of(yup.number())
      .required('Выберите один или несколько элем.'),
    fieldArray: yup
      .array()
      .of(
        yup.object({
          adv: yup.string().required('Введите значение преимущества'),
        }),
      )
      .required('Введите значение преимущества'),
  })
  .required();

const Advantages = () => {
  const { control, handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/about');
  };

  const handleNextClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className={styles.main}>
      <FormStepper variant='secondary' />
      <form className={styles.form}>
        <label style={{ fontWeight: 500 }}>
          Преимущества
          <FieldArray control={control} />
        </label>
        <label style={{ fontWeight: 500 }}>
          Checkbox группа
          <Checkbox options={[1, 2, 3]} control={control} />
        </label>

        <div className={styles.radio}>
          <p style={{ fontWeight: 500 }}>Radio группа</p>
          <label>
            <input
              {...register('radioGroup')}
              type='radio'
              value={1}
              name='radioGroup'
            />{' '}
            1
          </label>
          <label>
            <input
              {...register('radioGroup')}
              type='radio'
              value={2}
              name='radioGroup'
            />{' '}
            2
          </label>
          <label>
            <input
              {...register('radioGroup')}
              type='radio'
              value={3}
              name='radioGroup'
            />{' '}
            3
          </label>
        </div>
      </form>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button type='submit' variant='forward' onClick={handleNextClick}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Advantages;
