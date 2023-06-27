import { ChildrenProps } from "@/interfaces/children"

interface AreaProps extends ChildrenProps {
    className?: string
    id?: string
}

// limitando a pagina para que ela tenha um tamanho maximo de 1200px
export default function Area(props: AreaProps) {
    return (
        <div id={props.id ?? ''} className={`
            flex justify-center w-full
            ${props.className ?? ''}
        `}>
            <div className={`
                px-3 xl:px-0 
                w-full xl:w-[1570px]
            `}>
                {props.children}
            </div>
        </div>
    )
}