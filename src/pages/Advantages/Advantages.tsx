import Button from '../../ui/Button/Button';
import styles from './Advantages.module.css';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Checkbox from '../../Components/Pages/Checkbox/Checkbox';
import FieldArray from '../../Components/Pages/FieldArray/FieldArray';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Advantages = () => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: unknown) => {
    console.log(data, 'data');
    navigate('/about');
  };

  const handleNextClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className={styles.main}>
      <FormStepper variant='secondary' />
      <form className={styles.form}>
        <FieldArray control={control} />
        <Checkbox options={[1, 2, 3]} control={control} />
        <div>
          <div>
            <input type='radio' name='drone' value='1' />
            <label htmlFor='1'>1</label>
          </div>

          <div>
            <input type='radio' name='drone' value='2' />
            <label htmlFor='2'>2</label>
          </div>

          <div>
            <input type='radio' name='drone' value='3' />
            <label htmlFor='3'>3</label>
          </div>
        </div>
      </form>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button type='submit' variant='forward' onClick={handleNextClick}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Advantages;
