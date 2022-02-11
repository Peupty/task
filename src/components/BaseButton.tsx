import React from "react"
import { TButtonProps } from "../types/Button"

const Button: React.FC<TButtonProps> = ({
  variant = "light",
  children,
  ...props
}) => {
  return (
    <button className={`button button--${variant}`} {...props}>
      {children}
    </button>
  )
}

export default Button
