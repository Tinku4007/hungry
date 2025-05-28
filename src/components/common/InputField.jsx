import { Field } from 'formik'

const InputField = ({ type = 'text', name, ...inputProps }) => {
    return (
        <>
            <Field {...inputProps} type={type} name={name} className='px-2 py-3 w-full outline-none border' />
        </>
    )
}

export default InputField