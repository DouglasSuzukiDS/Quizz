import { UseFormProps, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"

type Props = {
   nameField: string
   form: any
}

export const FormFieldTextItem = ({ nameField, form }: Props) => {
   return (
      <FormField
         name={nameField}
         control={form.control}
         render={({ field }) => (
            <FormItem>
               <FormLabel htmlFor={nameField}>{nameField}</FormLabel>

               <FormControl>
                  <Input id={nameField} {...field} />
               </FormControl>
            </FormItem>
         )}
      />
   )
}