import styles from './Profile.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup' 

const Profile = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: {}) => {
    navigate('/advantages');
    console.log(data);
  };

  return (
    <div className={styles.main}>
      <FormStepper />
      <form className={styles.form}>
        <label>Никнейм</label>
        <Input type='text' placeholder='Placeholder' />
        <label>Имя</label>
        <Input type='text' placeholder='Placeholder' />
        <label>Фамилия</label>
        <Input type='text' placeholder='Placeholder' />
        <label>Пол</label>
        <select className={styles.select}>
          <option value='no-select' disabled selected>
            Не выбрано
          </option>
          <option value='male'>мужской</option>
          <option value='female'>женский</option>
        </select>
      </form>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button variant='forward' onClick={handleSubmit(onSubmit)}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Profile;
