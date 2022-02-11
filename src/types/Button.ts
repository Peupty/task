import React, { ButtonHTMLAttributes } from "react"

export type TButtonVariant = "light" | "dark"

export type TButtonProps = {
  variant?: TButtonVariant
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>
