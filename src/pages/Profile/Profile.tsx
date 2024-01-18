import styles from './Profile.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';

const Profile = () => {
  return (
    <div className={styles.main}>
      <FormStepper />
      <form className={styles.form}>
        <label>Никнейм</label>
        <Input placeholder='placeholder' />
        <label>Имя</label>
        <Input placeholder='placeholder' />
        <label>Фамилия</label>
        <Input placeholder='placeholder' />
        <label>Пол</label>
        <select className={styles.select}>
          <option value='no-select'>Не выбрано</option>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>
      </form>
      <div className={styles.footer}>
        <Button variant='back'>Назад</Button>
        <Button variant='forward'>Далее</Button>
      </div>
    </div>
  );
};

export default Profile;
