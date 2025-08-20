// ** Demo Components Imports
import FormLayout from 'src/layouts/FormLayout'
import DSCForm from 'src/components/forms/DSCForm'


const FormLayouts = () => {
  return (
    <FormLayout
      title='Add DSC'
      children = {<DSCForm />}
    />
  )
}

export default FormLayouts
