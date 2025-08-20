// ** Demo Components Imports
import FormLayout from 'src/layouts/FormLayout'
import GroupForm from 'src/components/forms/GroupForm'


const FormLayouts = () => {
  return (
    <FormLayout
      title='Add Group'
      children = {<GroupForm />}
    />
  )
}

export default FormLayouts
