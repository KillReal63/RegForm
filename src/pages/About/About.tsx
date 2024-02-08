import { ChangeEvent, useState } from 'react';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';
import styles from './About.module.css';
import Modal from '../../Components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValue = {
  textArea: string;
};

const schema = yup
  .object({
    textArea: yup.string().required('Обязательное поле').max(200),
  })
  .required();

const About = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState(false);

  const [charCount, setCharCount] = useState(0);

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
    setOpen(true);
  };

  const handleNextClick = () => {
    handleSubmit(onSubmit)();
  };

  const closeModal = () => setOpen(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCharCount(text.length);
  };

  return (
    <div className={styles.main}>
      <FormStepper variant='finally' />
      <div
        style={{
          width: 680,
          maxWidth: 680,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label htmlFor='story'>О себе</label>
        <textarea
          id='story'
          rows={5}
          cols={33}
          style={{ resize: 'none', padding: 10 }}
          placeholder='Placeholder'
          {...register('textArea')}
          onChange={handleChange}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 64,
          }}
        >
          <p>{errors.textArea?.message}</p>
          <p>{charCount}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button variant='forward' onClick={handleNextClick}>
          Далее
        </Button>
      </div>
      {open && <Modal onClose={closeModal} open={open} />}
    </div>
  );
};

export default About;
