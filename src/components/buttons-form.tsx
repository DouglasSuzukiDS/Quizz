'use client'

import { useStep } from "@/store/useStep"
import { Button } from "./ui/button"
import { useAnswers } from "@/store/useAnswers"
import { api } from "@/utils/api"

type Props = {
   onSubmit: () => void
   disabled: boolean
}
export const ButtonsForm = ({ onSubmit, disabled }: Props) => {
   const { step, prevStep, nextStep } = useStep()
   const { answer, setAnswers } = useAnswers()

   const handleSubmit = async () => {
      await api.post('/', {
         data: {
            ...answer
         }
      })
         .then(res => console.log(res.data))

         .catch(err => console.error(err))
      console.log(answer)
   }

   return (
      <div className="w-full flex justify-center md:justify-end gap-4 border border-red-600">
         {step >= 1 &&
            <Button
               className="w-1/2 md:w-auto duration-700 hover:opacity-75 cursor-pointer"
               onClick={prevStep}>Voltar</Button>
         }

         {step >= 0 && step < 3 &&
            <Button
               className="w-1/2 md:w-auto bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={onSubmit}>Próximo</Button>
         }

         {step === 3 &&
            <Button
               className="w-1/2 md:w-auto bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={handleSubmit}>Enviar</Button>
         }
      </div>
   )
}