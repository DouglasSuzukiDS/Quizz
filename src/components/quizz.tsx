'use client'

import { api } from "@/utils/api"
import { testAnswerMock } from "@/utils/mock-data"
import { cultureQuestions, energyQuestions, performanceQuestions } from "@/utils/questions"
import { useState } from "react"
import { Signup } from "./signup"
import { PerformanceQuestionsForm } from "./performance-questions-form"
import { useStep } from "@/store/useStep"

export const Quizz = () => {
   const { step } = useStep()
   const [steps, setSteps] = useState(step)

   const handleSubmit = async () => {
      await api.post('/', { data: { testAnswerMock } })
         .then(res => console.log(res.data))
         .catch(err => console.error(err))
   }

   return (
      <div className="flex justify-center items-center flex-col w-full h-screen bg-light">
         <h1 className="text-3xl text-center">Formulário FitScore {step}</h1>

         {step === 0 && <Signup />}

         {step >= 1 && <PerformanceQuestionsForm />}
      </div>
   )
}