'use client'

import { useStep } from "@/store/useStep"
import { Button } from "./ui/button"

type Props = {
   disabled: boolean
}
export const ButtonsForm = ({ disabled }: Props) => {
   const { step, prevStep, nextStep } = useStep()

   const onSubmit = () => {

   }

   return (
      <div className="flex justify-end gap-4">
         {step >= 1 &&
            <Button
               className="bg-gradient-legal duration-700 hover:opacity-75 cursor-pointer"
               onClick={prevStep}>Voltar</Button>
         }

         {step >= 0 && step <= 3 &&
            <Button
               className="bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={nextStep}>Próximo</Button>
         }

         {step > 3 &&
            <Button
               className="bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={onSubmit}>Enviar</Button>
         }
      </div>
   )
}