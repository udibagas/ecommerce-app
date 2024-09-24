'use client'

import { useEffect } from "react"
import Swal from "sweetalert2"

type ErrorProps = {
  error: Error,
  reset: () => {}
}

export default function Error({ error, reset }: ErrorProps) {

  useEffect(() => {
    Swal.fire({
      title: error.name,
      text: error.message
    })
  }, [error])

  return null
}
