import { FC, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addUser } from '../../Services/user';
import Modal from '../../Components/Modal/Modal';
import FormStepper from '../../ui/FormStepper/FormStepper';
import Button from '../../ui/Button/Button';
import { getAllStorage, getLocal, setLocal } from '../../helpers/localStorage';
import { TTextArea } from '../../Shared/Types/AboutTypes';
import styles from './About.module.css';

const schema = yup
  .object({
    textArea: yup.string().required('Обязательное поле').max(200),
  })
  .required();

const About: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TTextArea>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const { textArea } = getLocal('user-about');
  const allData = getAllStorage();

  useEffect(() => {
    if (textArea) {
      setValue('textArea', textArea);
      setCharCount(textArea.length);
    }
  }, [setValue, textArea]);

  const onSubmit: SubmitHandler<TTextArea> = (data) => {
    document.body.style.cursor = 'wait';
    setLocal('user-about', data);
    dispatch(addUser(allData));
    setTimeout(() => {
      document.body.style.cursor = 'default';
      setOpen(true);
    }, 5000);
  };

  const closeModal = () => setOpen(false);

  return (
    <div className={styles.main}>
      <FormStepper variant='finally' />
      <div className={styles.wrapper}>
        <label htmlFor='story'>О себе</label>
        <textarea
          id='story'
          rows={5}
          cols={33}
          className={styles.text_area}
          placeholder='Placeholder'
          {...register('textArea')}
          onChange={(e) => {
            const text = e.target.value;
            setCharCount(text.length);
          }}
        />
        <div className={styles.text_area_footer}>
          <p>{errors.textArea?.message}</p>
          <p>{charCount}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button variant='forward' onClick={handleSubmit(onSubmit)}>
          Далее
        </Button>
      </div>
      {open && <Modal onClose={closeModal} open={open} />}
    </div>
  );
};

export default About;
