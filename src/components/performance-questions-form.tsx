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
import { performanceQuestions } from "@/utils/questions"
import { useAnswers } from "@/store/useAnswers"
import { useEffect } from "react"
import { useUser } from "@/store/useUser"

export const PerformanceQuestionsForm = () => {
   const { step, prevStep, nextStep } = useStep()
   const {name, email} = useUser()
   const { answers, setAnswers } = useAnswers()

   const experience = performanceQuestions.find(q => q.id === 'experiencia')?.options || []
   const entrega = performanceQuestions.find(q => q.id === 'entrega')?.options || []
   const habilidade = performanceQuestions.find(q => q.id === 'habilidade')?.options || []

   type FormFields = typeof performanceQuestions[number]['id']


   const defaultValues = Object.fromEntries(
      performanceQuestions.map(q => [q.id, ""])
   )

   const form = useForm({
      defaultValues
   })

   const onSubmit = async () => {
      setAnswers({
         ...answers,
         ...form.getValues()
      })

      nextStep()
   }

   useEffect(() => {
      console.log(name, email)
   }, [name, email])

   return (
      <div className="w-full md:max-w-1/2">
         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">
            <h2 className="text-center text-gray">
               Perguntas sobre a Performance - <span className="font-bold">Etapa {step}/3</span>
            </h2>

            <Form {...form}>

               {performanceQuestions.map(question => (
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
                                       <RadioGroupItem id={option} value={option} className="" />

                                       <Label htmlFor={option}>{option}</Label>
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