import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useForm,
  Controller,
  SubmitHandler,
  Control,
  FieldError,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Select from 'react-select';
import Button from '../../ui/Button/Button';
import ProfileInputs from '../../Components/Pages/ProfileInputs/ProfileInputs';
import { getLocal, setLocal } from '../../helpers/localStorage';
import { TProfile } from '../../Shared/Types/ProfileTypes';
import styles from './Profile.module.css';

const schema = yup
  .object({
    nickName: yup
      .string()
      .required('Обязательное поле')
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, 'Спец. символы запрещены')
      .max(30),
    firstName: yup
      .string()
      .required('Обязательное поле')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Только буквы')
      .max(50),
    lastName: yup
      .string()
      .required('Обязательное поле')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Только буквы')
      .max(50),
    gender: yup
      .object({
        value: yup.string().required(),
        label: yup.string().required('Please select a gender'),
      })
      .required(),
  })
  .required();

const Profile: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const data = getLocal('user-data');
    if (data) {
      setValue('nickName', data.nickName);
      setValue('firstName', data.firstName);
      setValue('lastName', data.lastName);
      setValue('gender', data.gender);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<TProfile> = (data) => {
    setLocal('user-data', data);
    navigate('/advantages');
  };

  return (
    <div className={styles.main}>
      <FormStepper option='primary'/>
      <form className={styles.form}>
        <ProfileInputs
          control={control as Control<TProfile>}
          errors={errors as { [key: string]: FieldError }}
          options={[
            { name: 'nickName', label: 'Никнейм' },
            { name: 'firstName', label: 'Имя' },
            { name: 'lastName', label: 'Фамилия' },
          ]}
        />
        <div className={styles.select_wrapper}>
          <label>
            Пол
            <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                <Select
                  className={styles.select}
                  {...field}
                  options={[
                    { value: 'man', label: 'Man' },
                    { value: 'woman', label: 'Woman' },
                  ]}
                />
              )}
            />
          </label>
        </div>
      </form>
      <div className={styles.footer}>
        <Button option='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button
          option='forward'
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Profile;
