// ** Demo Components Imports
import FormLayout from 'src/layouts/FormLayout'
import WorkForm from 'src/components/forms/WorkForm'


const FormLayouts = () => {
  return (
    <FormLayout
      title='Add Work'
      children = {<WorkForm />}
    />
  )
}

export default FormLayouts
