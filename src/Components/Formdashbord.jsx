import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <input 
                        type={field.type} 
                        placeholder={field.placeholder} 
                        onChange={(e) => handleChange(e, field.name)} 
                    />
                </div>
            ))}
            <button type="submit">إرسال</button>
        </form>
    );
};

export default Form;
<Form 
    fields={[
        { label: 'الاسم', name: 'name', type: 'text', placeholder: 'أدخل الاسم' },
        { label: 'البريد الإلكتروني', name: 'email', type: 'email', placeholder: 'أدخل البريد الإلكتروني' },
        { label: 'كلمة المرور', name: 'password', type: 'password', placeholder: 'أدخل كلمة المرور' }
    ]}
    onSubmit={(formData) => console.log(formData)}
/>
