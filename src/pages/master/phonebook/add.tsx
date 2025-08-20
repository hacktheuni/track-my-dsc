// ** Demo Components Imports
import FormLayout from 'src/layouts/FormLayout'
import PhonebookForm from 'src/components/forms/PhonebookForm'


const FormLayouts = () => {
  return (
    <FormLayout
      title='Add Client'
      children = {<PhonebookForm />}
    />
  )
}

export default FormLayouts
