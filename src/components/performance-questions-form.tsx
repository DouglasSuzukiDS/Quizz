import { useStep } from "@/store/useStep"
import { useForm } from "react-hook-form"
import { FormFieldTextItem } from "./form-field-item"
import { Button } from "./ui/button"
import { api } from "@/utils/api"
import { testAnswerMock } from "@/utils/mock-data"
import { Form } from "./ui/form"
import { ButtonsForm } from "./buttons-form"

export const PerformanceQuestionsForm = () => {
   const { prevStep } = useStep()

   const form = useForm({
      defaultValues: {
         name: "",
         email: ""
      }
   })

   const onSubmit = async () => {
      // await api.post('/', { data: { testAnswerMock } })
      //    .then(res => console.log(res.data))
      //    .catch(err => console.error(err))
      prevStep()
   }

   return (
      <div>
         <h2>Perguntas de Performance</h2>
         {/* Adicione suas perguntas de performance aqui */}

         <Form {...form}>
            <FormFieldTextItem nameField="name" form={form} />

            <FormFieldTextItem nameField="email" form={form} />

            <ButtonsForm
               disabled={form.watch("name") !== "" && form.watch("email") !== "" ? false : true}
            />
         </Form>
      </div>
   )
}