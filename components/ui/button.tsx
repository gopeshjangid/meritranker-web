import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import { buttonVariantsConfig } from "./button-variants" // Use the new config
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantsConfig> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariantsConfig({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button }
// Note: The buttonVariants export from shadcn/ui is typically not re-exported here.
// If you need buttonVariantsConfig elsewhere, import it directly from './button-variants'.
