// ** Demo Components Imports
import FormLayout from 'src/layouts/FormLayout'
import CompanyForm from 'src/components/forms/CompanyForm'


const FormLayouts = () => {
  return (
    <FormLayout
      title='Add Company'
      children = {<CompanyForm />}
    />
  )
}

export default FormLayouts
