import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Control, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormStepper from '../../ui/FormStepper/FormStepper';
import FieldArray from '../../Components/Pages/FieldArray/FieldArray';
import Checkbox from '../../Components/Pages/Checkbox/Checkbox';
import RadioGroup from '../../Components/Pages/RadioGroup/RadioGroup';
import Button from '../../ui/Button/Button';
import { getLocal, setLocal } from '../../helpers/localStorage';
import { TAdvantages } from '../../Shared/Types/AdvantagesTypes';
import styles from './Advantages.module.css';

const schema = yup
  .object({
    radioGroup: yup.number().required(),
    checkboxGroup: yup.array().required(),
    fieldArray: yup
      .array()
      .of(
        yup.object({
          adv: yup.string(),
        }),
      )
      .required(),
  })
  .required();

const Advantages: FC = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const data = getLocal('user-adv');
    if (data) {
      setValue('radioGroup', data.radioGroup);
      setValue('fieldArray', data.fieldArray);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<TAdvantages> = (data) => {
    setLocal('user-adv', data);
    navigate('/about');
  };

  return (
    <div className={styles.main}>
      <FormStepper variant='secondary' />
      <form className={styles.form}>
        <label className={styles.label}>
          Преимущества
          <FieldArray control={control as Control<TAdvantages>} />
        </label>
        <label className={styles.label}>
          Checkbox группа
          <Checkbox
            options={[1, 2, 3]}
            control={control as Control<TAdvantages>}
            setValue={setValue}
          />
        </label>
        <label className={styles.label}>
          Radio группа
          <RadioGroup
            options={[1, 2, 3]}
            control={control as Control<TAdvantages>}
          />
        </label>
      </form>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button
          type='submit'
          variant='forward'
          onClick={handleSubmit(onSubmit)}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Advantages;
