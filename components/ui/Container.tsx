import { FC } from 'react'

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className='border-b'>
        {children}
    </div>
    )
}

export default Container