export type TestAnswer = {
   id: number,
   name: string,
   email: string,
   answers: {
      experience: string
      deliverables: string
      skills: string
      pressure: string
      deadlines: string
      availability: string
      communication: string
      collaboration: string
      values: string
      adaptation: string
   },
   score: number,
   classification: 'Fit Altíssimo' | 'Fit Aprovado' | 'Fit Questionável' | 'Fit Fora do Perfil'
   createdAt: Date
}
