'use client'

import { UserTable } from "@/components/user-table"

export default function Page() {

   return (
      <main className="w-full h-screen bg-gradient-legal">
         <div className="w-full h-full flex flex-col gap-4 p-4">
            <h2 className="text-3xl text-light text-center font-bold">Área Administrativa</h2>

            <UserTable />
         </div>
      </main>
   )
}