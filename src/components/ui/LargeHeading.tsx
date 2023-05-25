import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';


const headingVariables = cva('text-white font-normal', {
    variants: {
        type: {
            heading1: 'tab:text-[150px] tab:leading-[172px] mob:text-[100px] mob:leading-[150px] text-[80px] leading-[100px]',
            heading2: 'tab:text-[100px] tab:leading-[115px] mob:text-[80px] mob:leading-[92px] text-[56px] leading-[64px]',
            heading3: 'tab:text-[56px] tab:leading-[64px] mob:text-[40px] mob:leading-[46px] text-2xl leading-[28px]',
            title: 'tab:text-[32px] tab:leading-[37px] mob:text-[24px] mob:leading-[27px] text-[16px] leading-[18px]',
            distance: 'text-[28px] leading-[32px]',
            cta: 'mob:text-[32px] mob:leading-[37px] text-[20px] leading-[23px]',
            bigNum: 'tab:text-[32px] tab:leading-[37px] mob:text-[24px] mob:leading-[28px] text-[16px] leading-[18px]'
        },
    },
    defaultVariants: {
        type: 'heading1',
    },
})

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariables> {}
 
const Heading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({ className, type, children, ...props}, ref) => {
    return <h1
        ref={ref} 
        {...props} 
        className={cn(headingVariables({ type, className }))}>
            {children}
        </h1>
})

Heading.displayName = 'Heading'
 
export default Heading; 