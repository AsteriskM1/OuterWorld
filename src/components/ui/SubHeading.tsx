import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';


const headingVariables = cva('text-white font-normal', {
    variants: {
        type: {
            subheading1: 'tab:text-[28px] tab:leading-[34px] mob:text-[24px] mob:leading-[20px] text-[16px] leading-[19px]',
            nav: 'tab:text-[16px] tab:leading-[19px] mob:text-[14px] mob:leading-[19px] text-[16px] leading-[19px] uppercase',
            option: 'mob:text-[16px] mob:leading-[19px] text-[14px] leading-[17px]',
            title: 'tab:text-[28px] tab:leading-[34px] mob:text-[20x] mob:leading-[24px] text-[16px] leading-[19px]',
            stats: 'text-[14px] leading-[17px]',
            cta: 'mob:text-[32px] mob:leading-[37px] text-[20px] leading-[23px]'
        },
    },
    defaultVariants: {
        type: 'subheading1',
    },
})

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariables> {}
 
const SubHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({ className, type, children, ...props}, ref) => {
    return <h1
        ref={ref} 
        {...props} 
        className={cn(headingVariables({ type, className }))}>
            {children}
        </h1>
})

SubHeading.displayName = 'Heading'
 
export default SubHeading; 