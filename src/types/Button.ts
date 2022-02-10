export type TButtonVariant = "light" | "dark"

export type TButtonProps = {
  variant?: TButtonVariant
  onClick: () => void
}
