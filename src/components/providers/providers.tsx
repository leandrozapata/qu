'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { reactQueryClient } from "../../config/react-query.config";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={reactQueryClient}>
            {children}
        </QueryClientProvider>
    )
}