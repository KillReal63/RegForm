import TextArea from '../../Components/Pages/TextArea/TextArea';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.main}>
      <FormStepper variant='finally' />
      <div style={{ width: 680, maxWidth: 680, height: 136 }}>
        <TextArea />
      </div>
      <div className={styles.footer}>
        <Button variant='back'>Назад</Button>
        <Button variant='forward'>Далее</Button>
      </div>
    </div>
  );
};

export default About;
