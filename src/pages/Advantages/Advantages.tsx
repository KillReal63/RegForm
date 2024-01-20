import Button from '../../ui/Button/Button';
import styles from './Advantages.module.css';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Checkbox from '../../Components/Pages/Checkbox/Checkbox';
import FieldArray from '../../Components/Pages/FieldArray/FieldArray';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Advantages = () => {
  const { control, register } = useForm();
  const navigate = useNavigate();

  const onClick = (variant: string) => {
    if (variant === 'forward') {
      navigate('/about');
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.main}>
      <FormStepper variant='secondary' />
      <form className={styles.form}>
        <FieldArray control={control} register={register} />
        <Checkbox
          options={['a', 'b', 'c']}
          control={control}
          name='controlled'
        />
        <div>
          <div>
            <input type='radio' id='1' name='drone' value='huey' />
            <label htmlFor='1'>Huey</label>
          </div>

          <div>
            <input type='radio' id='2' name='drone' value='dewey' />
            <label htmlFor='2'>Dewey</label>
          </div>

          <div>
            <input type='radio' id='3' name='drone' value='louie' />
            <label htmlFor='3'>Louie</label>
          </div>
        </div>
      </form>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => onClick('back')}>
          Назад
        </Button>
        <Button variant='forward' onClick={() => onClick('forward')}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default Advantages;
