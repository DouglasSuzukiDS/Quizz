
import { Button } from "./ui/button"
import { useUser } from "@/store/useUser"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import { FormFieldTextItem } from "./form-field-text-item"
import { useAnswers } from "@/store/useAnswers"
import { useStep } from "@/store/useStep"
import { ButtonsForm } from "./buttons-form"

export const Signup = () => {
   const { name, setName, email, setEmail } = useUser()
   const { answer, setAnswers } = useAnswers()
   const { step, nextStep } = useStep()

   const form = useForm({
      defaultValues: {
         name: "",
         email: ""
      }
   })

   type FormData = { name: string; email: string }

   const onSubmit = (data: FormData) => {
      const nameField = data.name
      const emailField = data.email

      console.log(nameField, emailField)

      if (nameField && emailField) {
         setName(nameField)
         setEmail(emailField)

         setAnswers({
            ...answer,
            nome: nameField,
            email: emailField
         })

         nextStep()
      }
   }

   return (
      <div className="min-w-1/2 max-w-1/2">
         <h1 className="mb-4">Antes de começarmos, forneça os seguintes dados: </h1>

         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">
            {/* <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="name">Nome</label>
               <input id="name" {...register("name")} />

               <label htmlFor="email">Email</label>
               <input id="email" type="email" {...register("email")} />

               <Button variant={"link"} type="submit">Próximo</Button>
            </form> */}

            <Form {...form}>
               <FormFieldTextItem label="Nome" nameField="name" form={form} />

               <FormFieldTextItem label="Email" nameField="email" form={form} />

               {/* <div className="flex justify-end gap-4">
                  {step > 0 &&
                     <Button
                        className="bg-gradient-legal duration-700 hover:opacity-75 cursor-not-allowed"
                        onClick={form.handleSubmit(onSubmit)}>Voltar</Button>
                  }

                  <Button
                     className="bg-gradient-legal duration-700  hover:opacity-75 cursor-not-allowed"
                     disabled={form.watch("name") !== "" && form.watch("email") !== "" ? false : true}
                     onClick={form.handleSubmit(onSubmit)}>Próximo</Button>
               </div> */}

               <ButtonsForm
                  onSubmit={form.handleSubmit(onSubmit)}
                  disabled={form.watch("name") !== "" && form.watch("email") !== "" ? false : true}
               />
            </Form>
         </div>
      </div >
   )
}