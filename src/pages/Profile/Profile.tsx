import styles from './Profile.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';

type Data = {
  nickName: string;
  firstName: string;
  lastName: string;
  gender: { value: string; label: string };
};

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
        value: yup.string().required('Please select a gender'),
        label: yup.string().required(),
      })
      .required(),
  })
  .required();

const Profile = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors, 'errors');

  const onSubmit: SubmitHandler<Data> = (data) => {
    console.log(data, 'data');
    navigate('/advantages');
  };

  const handleNextClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className={styles.main}>
      <FormStepper />
      <form className={styles.form}>
        <div className={styles.input}>
          <label>
            Никнейм
            <Controller
              name='nickName'
              control={control}
              defaultValue=''
              render={({ field: { ref, ...field } }) => (
                <Input
                  type='text'
                  placeholder='Placeholder'
                  {...field}
                  inputRef={ref}
                />
              )}
            />
            {errors.nickName?.message}
          </label>
        </div>
        <div className={styles.input}>
          <label>
            Имя
            <Controller
              name='firstName'
              control={control}
              defaultValue=''
              render={({ field: { ref, ...field } }) => (
                <Input
                  type='text'
                  placeholder='Placeholder'
                  {...field}
                  inputRef={ref}
                />
              )}
            />
            {errors.firstName?.message}
          </label>
        </div>
        <div className={styles.input}>
          <label>
            Фамилия
            <Controller
              name='lastName'
              control={control}
              defaultValue=''
              render={({ field: { ref, ...field } }) => (
                <Input
                  type='text'
                  placeholder='Placeholder'
                  {...field}
                  inputRef={ref}
                />
              )}
            />
            {errors.lastName?.message}
          </label>
        </div>
        <div style={{ width: 300, height: 120 }}>
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
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button variant='forward' type='submit' onClick={handleNextClick}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Profile;
