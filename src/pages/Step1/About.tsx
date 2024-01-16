import styles from './About.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import HeaderStepper from '../../ui/Stepper/Stepper';

const About = () => {
  return (
    <div className={styles.main}>
      <HeaderStepper step={0} />
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

export default About;
