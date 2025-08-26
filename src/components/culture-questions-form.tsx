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
import { cultureQuestions } from "@/utils/questions"
import { useAnswers } from "@/store/useAnswers"
import { useEffect } from "react"
import next from "next"

export const CultureQuestionsForm = () => {
   const { step, prevStep, nextStep } = useStep()
   const { answer, setAnswers } = useAnswers()

   const experience = cultureQuestions.find(q => q.id === 'experiencia')?.options || []
   const entrega = cultureQuestions.find(q => q.id === 'entrega')?.options || []
   const habilidade = cultureQuestions.find(q => q.id === 'habilidade')?.options || []

   // console.log(experience)
   // console.log(entrega)
   // console.log(habilidade)

   // type FormFields = 'experiencia' | 'entrega' | 'habilidade'
   type FormFields = typeof cultureQuestions[number]['id']

   const forms = useForm({
      defaultValues: {
         experiencia: '',
         entrega: '',
         habilidade: ''
      }
   })

   const defaultValues = Object.fromEntries(
      cultureQuestions.map(q => [q.id, ""])
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
               Perguntas sobre a Cultura - <span className="font-bold">Etapa {step}/3</span>
            </h2>

            <Form {...form}>
               {/* {cultureQuestions.map(question => (
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
               <div className="flex flex-col gap-2 md:gap-4 flex-1 border max-h-80 overflow-auto">
                  {cultureQuestions.map(question => (
                     <FormField
                        key={question.id}
                        name={question.id as FormFields}
                        control={form.control}
                        render={({ field }) => (
                           <FormItem
                              key={question.id}
                              className="mb-2 border" >
                              <FormControl>
                                 <RadioGroup
                                    key={question.id}
                                    onValueChange={field.onChange}
                                    id={question.id}
                                    className="flex flex-col gap-2">

                                    <FormLabel
                                       className="w-full text-dark-blue text-center font-bold md:text-left border">
                                       {question.label}</FormLabel>

                                    {question.options.map(option => (
                                       <div className="flex gap-2" key={option}>
                                          <RadioGroupItem value={option} className="accent-dark-blue" />

                                          <Label htmlFor={option}>{option}</Label>
                                       </div>
                                    ))}

                                 </RadioGroup>
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  ))}
               </div>

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