import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';

const paragraphVariables = cva('tab:max-w-prose text-white', {
    variants: {
        type: {
            default: 'tab:text-[18px] tab:leading-[32px] mob:text-[16px] mob:leading-[28px] text-[15px] leading-[25px]',
            term: 'mob:text-[18px] mob:leading-[19px] mob:tracking-[2.7px] text-[14px] leading-[17px] tracking-[2.36px]'
        },
    },
    defaultVariants: {
        type: 'default',
    },
})

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariables> {}
 
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, type, children, ...props}, ref) => {
    return <p 
        ref={ref} 
        {...props} 
        className={cn(paragraphVariables({ type, className }))}>
            {children}
        </p>
})

Paragraph.displayName = 'Paragraph'
 
export default Paragraph;