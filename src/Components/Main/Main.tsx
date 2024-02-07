import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../ui/Input/Input';
import styles from './Main.module.css';
import { useNavigate } from 'react-router-dom';

type FormValue = {
  phone: string | number;
  email: string;
};

const schema = yup
  .object({
    phone: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const Main = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
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
          <a href='' style={{ marginRight: 10 }}>
            Git
          </a>
          <a href='' style={{ marginRight: 10 }}>
            Telegram
          </a>
          <a href='' style={{ marginRight: 10 }}>
            Резюме
          </a>
        </div>
      </div>
      <form className={styles.form}>
        <div>
          <Controller
            name='phone'
            control={control}
            defaultValue=''
            render={({ field: { ref, ...field } }) => (
              <Input
                label='Номер телефона'
                type='tel'
                {...field}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field: { ref, ...field } }) => (
              <Input
                label='E-mail'
                type='email'
                placeholder='webstudio.fractal@example.com'
                {...field}
                inputRef={ref}
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
