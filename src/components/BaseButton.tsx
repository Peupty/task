import React from "react"
import { TButtonProps } from "../types/Button"

const Button: React.FC<TButtonProps> = ({
  variant = "light",
  onClick,
  children,
}) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
