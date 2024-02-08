import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../ui/Input/Input';
import styles from './Main.module.css';
import { useNavigate } from 'react-router-dom';
import PhoneMask from '../Pages/PhoneMask/PhoneMask';
import { getLocal, setLocal } from '../../helpers/localStorage';
import { useEffect } from 'react';

export type FormValue = {
  phone: string;
  email: string;
};

const schema = yup
  .object({
    phone: yup.string().required().min(18),
    email: yup.string().email().required(),
  })
  .required();

const Main = () => {
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const { email } = getLocal('user-contacts');
    if (email) {
      setValue('email', email);
    }
  }, [setValue]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    setLocal('user-contacts', data);
    navigate('/profile');
  };

  const handleNextClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.avatar}>АИ</div>
        <div className={styles.info}>
          <p>Алексей Иванов</p>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            style={{ marginRight: 10 }}
          >
            Git
          </a>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            style={{ marginRight: 10 }}
          >
            Telegram
          </a>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            style={{ marginRight: 10 }}
          >
            Резюме
          </a>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.controller_wrapper}>
          <PhoneMask control={control} setValue={setValue} />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field: { ref, ...field } }) => (
              <Input
                label='E-mail'
                type='email'
                placeholder='webstudio.fractal@example.com'
                inputRef={ref}
                {...field}
              />
            )}
          />
        </div>
      </form>
      <Button onClick={handleNextClick} variant='forward'>
        Начать
      </Button>
    </div>
  );
};

export default Main;
