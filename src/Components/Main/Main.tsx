import { useForm } from 'react-hook-form';
import Button from '../../ui/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../ui/Input/Input';
import styles from './Main.module.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  phone: yup.number().positive().integer().required(),
  email: yup.string().email(),
});

const Main = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/profile');
  };
  const onSubmit = () => console.log('test');

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
        <label>Номер телефона</label>
        <Input placeholder='+7 (900) 000-00-00' {...register('phone')} />
        <label>E mail</label>
        <Input
          placeholder='webstudio.fractal@example.com'
          {...register('email')}
        />
        <Button onClick={onClick} variant='forward'>
          Начать
        </Button>
      </form>
    </div>
  );
};

export default Main;
