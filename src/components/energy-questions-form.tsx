'use client'

import { useStep } from "@/store/useStep"
import { useForm } from "react-hook-form"
import { api } from "@/utils/api"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { ButtonsForm } from "./buttons-form"
import { FormFieldRadioItem } from "./form-field-radio-item"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { energyQuestions } from "@/utils/questions"
import { useAnswers } from "@/store/useAnswers"
import { useEffect } from "react"

export const EnergyQuestionsForm = () => {
   const { step, prevStep, nextStep } = useStep()
   const { answer, setAnswers } = useAnswers()

   type FormFields = typeof energyQuestions[number]['id']

   const forms = useForm({
      defaultValues: {
         experiencia: '',
         entrega: '',
         habilidade: ''
      }
   })

   const defaultValues = Object.fromEntries(
      energyQuestions.map(q => [q.id, ""])
   )

   const form = useForm({
      defaultValues
   })

   const onSubmit = async () => {
      // await api.post('/', { data: { testAnswerMock } })
      //    .then(res => console.log(res.data))
      //    .catch(err => console.error(err))
      // prevStep()
      setAnswers({
         ...answer,
         perguntas: {
            ...answer.perguntas,
            ...form.getValues()
         }
      })

      nextStep()
   }

   useEffect(() => {
      console.log(answer)
   }, [answer])

   return (
      <div className="w-full md:max-w-1/2">
         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">
            <h2 className="text-center text-gray">
               Perguntas sobre a Energia - <span className="font-bold">Etapa {step}/3</span>
            </h2>

            <Form {...form}>
               {/* {energyQuestions.map(question => (
                  <RadioGroup className="flex flex-col gap-2" id="">
                     <h1>{question.label}</h1>

                     {question.options.map(option => (
                        <div className="flex gap-2">
                           <RadioGroupItem value={option} />
                           <Label>{option}</Label>
                        </div>
                     ))}
                  </RadioGroup>
               ))} */}

               {energyQuestions.map(question => (
                  <FormField
                     key={question.id}
                     name={question.id as FormFields}
                     control={form.control}
                     render={({ field }) => (
                        <FormItem
                           key={question.id}
                           className="mb-2" >
                           <FormControl>
                              <RadioGroup
                                 key={question.id}
                                 onValueChange={field.onChange}
                                 id={question.id}
                                 className="flex flex-col gap-2">

                                 <FormLabel className="text-dark-blue font-bold text-center md:text-left">{question.label}</FormLabel>

                                 {question.options.map(option => (
                                    <div className="flex gap-2" key={option}>
                                       <RadioGroupItem value={option} className="accent-dark-blue" />

                                       <Label>{option}</Label>
                                    </div>
                                 ))}

                              </RadioGroup>
                           </FormControl>
                        </FormItem>
                     )}
                  />
               ))}

               <ButtonsForm
                  // disabled={form.watch("experiencia") !== "" && form.watch("entrega") !== "" && form.watch("habilidade") !== "" ? false : true}
                  onSubmit={onSubmit}
                  disabled={Object.values(form.watch()).every(value => value !== '') ? false : true}
               />
            </Form>
         </div>
      </div>
   )
}