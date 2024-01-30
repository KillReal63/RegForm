import { useState } from 'react';
import TextArea from '../../Components/Pages/TextArea/TextArea';
import Button from '../../ui/Button/Button';
import FormStepper from '../../ui/FormStepper/FormStepper';
import styles from './About.module.css';
import Modal from '../../Components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onClick = () => {
    navigate(-1);
  };

  const closeModal = () => setOpen(false);

  return (
    <div className={styles.main}>
      <FormStepper variant='finally' />
      <div style={{ width: 680, maxWidth: 680, height: 136 }}>
        <TextArea />
      </div>
      <div className={styles.footer}>
        <Button variant='back' onClick={() => onClick()}>
          Назад
        </Button>
        <Button variant='forward' onClick={() => setOpen(true)}>
          Далее
        </Button>
      </div>
      {open && <Modal onClose={closeModal} open={open} />}
    </div>
  );
};

export default About;
