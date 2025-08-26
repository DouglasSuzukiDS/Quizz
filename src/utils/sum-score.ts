import { cultureQuestions, energyQuestions, performanceQuestions } from "./questions"
import { Answers } from "@/types/answers"
import { sumBlockQuestions } from "./sum-block-question"

export const sumScore = (answers: Answers) => {

   const compareAnsweres = Object.values(answers)

   const points = [0, 33, 66, 100]

   const questionnLenght = performanceQuestions.length + energyQuestions.length + cultureQuestions.length

   let performanceScore = sumBlockQuestions(performanceQuestions, answers)
   let energyScore = sumBlockQuestions(energyQuestions, answers)
   let cultureScore = sumBlockQuestions(cultureQuestions, answers)

   /*performanceQuestions.forEach(question => {
      const response = compareAnsweres.find(answer => answer === answers[question.id as keyof typeof answers])

      const index = question.options.findIndex(option => option === response)

      if (index >= 0) {
         performanceScore += points[index]
      }
   })

   energyQuestions.forEach(question => {
      const response = compareAnsweres.find(answer => answer === answers[question.id as keyof typeof answers])

      const index = question.options.findIndex(option => option === response)

      if (index >= 0) {
         energyScore += points[index]
      }
   })

   cultureQuestions.forEach(question => {
      const response = compareAnsweres.find(answer => answer === answers[question.id as keyof typeof answers])

      const index = question.options.findIndex(option => option === response)

      if (index >= 0) {
         cultureScore += points[index]
      }
   })*/

   let score = (performanceScore + energyScore + cultureScore) / questionnLenght

   return score
}