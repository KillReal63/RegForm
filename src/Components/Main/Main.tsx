import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getLocal, setLocal } from '../../helpers/localStorage';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import PhoneMask from '../Pages/PhoneMask/PhoneMask';
import { TMain } from '../../Shared/Types/MainTypes';
import styles from './Main.module.css';

const schema = yup
  .object({
    phone: yup.string().required().min(18),
    email: yup.string().email().required(),
  })
  .required();

const Main: FC = () => {
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const { email } = getLocal('user-contacts');
    if (email) {
      setValue('email', email);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<TMain> = (data) => {
    setLocal('user-contacts', data);
    navigate('/RegForm/profile');
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.avatar}>АИ</div>
        <div className={styles.info}>
          <p>Алексей Иванов</p>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            className={styles.href}
          >
            Git
          </a>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            className={styles.href}
          >
            Telegram
          </a>
          <a
            href='https://cdn.memes.com/profilebackgroundpics/8895011599526990/image/501608530132.jpg'
            className={styles.href}
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
      <Button onClick={handleSubmit(onSubmit)} option='forward'>
        Начать
      </Button>
    </div>
  );
};

export default Main;
