'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import Swal from "sweetalert2"

export default function SweetAlert() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error') ?? ''

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error
      })
    }
  }, [error])

  return null
}
