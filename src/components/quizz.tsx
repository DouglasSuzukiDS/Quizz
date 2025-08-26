'use client'

import { api } from "@/utils/api"
import { testAnswerMock } from "@/utils/mock-data"
import { cultureQuestions, energyQuestions, performanceQuestions } from "@/utils/questions"
import { useState } from "react"
import { Signup } from "./signup"
import { PerformanceQuestionsForm } from "./performance-questions-form"
import { useStep } from "@/store/useStep"
import { CultureQuestionsForm } from "./culture-questions-form"
import { EnergyQuestionsForm } from "./energy-questions-form"

export const Quizz = () => {
   const { step } = useStep()
   const [steps, setSteps] = useState(step)

   const handleSubmit = async () => {
      await api.post('/', { data: { testAnswerMock } })
         .then(res => console.log(res.data))
         .catch(err => console.error(err))
   }

   return (
      <div className="w-full h-screen flex justify-center items-center flex-col px-4 py-8 bg-light">
         <h1 className="text-2xl md:text-3xl text-center text-dark-blue font-bold mb-4">Formulário FitScore {step}</h1>

         {step === 0 && <Signup />}

         {step === 1 && <PerformanceQuestionsForm />}

         {step === 2 && <EnergyQuestionsForm />}

         {step === 3 && <CultureQuestionsForm />}
      </div>
   )
}