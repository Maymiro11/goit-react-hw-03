import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short! Length must be between 3 and 10 characters')
        .max(10, 'Too Long! Length must be between 3 and 10 characters')
        .required('Required'),

    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must contain only digits')
        .min(3, 'Too Short! Length must be between 3 and 10 characters')
        .max(10, 'Too Long! Length must be between 3 and 10 characters')
        .required('Required'),
});

const initialValues = {
    name: "",
    phone: "",
};

const ContactForm = ({ addingContact }) => {

    const nameId = useId();
    const phoneId = useId();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        values.id = nanoid();
        addingContact(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <div>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '14px' }} />
                </div>

                <div>
                    <label htmlFor={phoneId}>Number</label>
                    <Field type="tel" name="phone" id={phoneId} />
                    <ErrorMessage name="phone" component="div" style={{ color: 'red', fontSize: '14px' }} />
                </div>

                <button className={css.addButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;
