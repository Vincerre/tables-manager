import PageTitle from '../../common/PageTitle.js/PageTitle';
import styles from './TablePage.module.scss';
import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getTablesById } from '../../../redux/tablesRedux';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { editTableRequest } from '../../../redux/tablesRedux';
import { useEffect } from 'react';

const TablePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const table = useSelector((state) => getTablesById(state, id)) || '';
  const [status, setStatus] = useState(table.status || '');
  const [people, setPeople] = useState(table.peopleAmount || '0');
  const [maxPeople, setMaxPeople] = useState(table.maxPeopleAmount || '0');
  const [bill, setBill] = useState(table.bill || '0');
  const [render, setRender] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleForm = () => {
    if (status) {
      dispatch(editTableRequest({ status, peopleAmount: people, maxPeopleAmount: maxPeople, bill, id: table.id }));
      navigate('/');
    }
  };

  useEffect(() => {
    setRender(true);
  }, []);

  useEffect(() => {
    if (render) {
      if (status === 'Busy' || status === 'Free') {
        setBill(0);
      }
      if (status === 'Free' || status === 'Cleaning') {
        setPeople(0);
      }
      if (maxPeople < people) {
        setPeople(maxPeople);
      }
    }
  }, [status, maxPeople, people]);

  if (!table) return <Navigate to="/" />;
  else
    return (
      <div className={styles.root}>
        <div>
          <PageTitle>Table {table.id}</PageTitle>
        </div>
        <Form.Group className={styles.select}>
          <Form.Label>Status:</Form.Label>
          <Form.Select value={status} aria-label="Status" onChange={(e) => setStatus(e.target.value)}>
            <option value="Free">Free</option>
            <option value="Busy">Busy</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Reserved">Reserved</option>
          </Form.Select>
        </Form.Group>
        <div className={styles.input}>
          <Form.Label>People:</Form.Label>
          <div>
            <Form.Group>
              <Form.Control
                {...register('people', { required: true, min: 0, max: 10 })}
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                type="number"
              />
              {errors.people && <small className="d-block form-text text-danger mt-2">Enter people</small>}
            </Form.Group>
            <span>/</span>
            <Form.Group>
              <Form.Control
                {...register('maxPeople', { required: true, min: 0, max: 10 })}
                value={maxPeople}
                onChange={(e) => setMaxPeople(e.target.value)}
                type="number"
              />
              {errors.maxPeople && <small className="d-block form-text text-danger mt-2 ">Enter people</small>}
            </Form.Group>
          </div>
        </div>

        <div className={status === 'Busy' ? styles.input : styles.nodis}>
          <Form.Label>Bill:</Form.Label>
          <div>
            <span>$</span>
            <Form.Group>
              <Form.Control
                {...register('bill', { required: true, min: 0 })}
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                type="number"
              />
              {errors.bill && <small className="d-block form-text text-danger mt-2">Enter bill</small>}
            </Form.Group>
          </div>
        </div>

        <button className={styles.button} onClick={validate(handleForm)}>
          Update
        </button>
      </div>
    );
};

export default TablePage;
