//изменить состояение checked у groups

import Button from '../../ui/Button/Button';
import styles from './Advantages.module.css';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Checkbox from '../../Components/Pages/Checkbox/Checkbox';
import FieldArray from '../../Components/Pages/FieldArray/FieldArray';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { getLocal, setLocal } from '../../helpers/localStorage';
import RadioGroup from '../../Components/Pages/RadioGroup/RadioGroup';

export type FormValues = {
  radioGroup: number;
  checkboxGroup: (number | undefined)[];
  fieldArray: { adv?: string }[];
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
          adv: yup.string(),
        }),
      )
      .required('Введите значение преимущества'),
  })
  .required();

const Advantages = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const data = getLocal('user-adv');
    if (data) {
      setValue('radioGroup', data.radioGroup);
      setValue('checkboxGroup', data.checkboxGroup);
      setValue('fieldArray', data.fieldArray);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLocal('user-adv', data);
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
        <label style={{ fontWeight: 500 }}>
          Radio группа
          <RadioGroup options={[1, 2, 3]} control={control} />
        </label>
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
