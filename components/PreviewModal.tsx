"use client"

import usePreviewModal from '@/hooks/usePreviewModel'
import { FC } from 'react'

interface PreviewModalProps {
  
}

const PreviewModal: FC<PreviewModalProps> = ({}) => {

    const previewModal = usePreviewModal()
    const product = usePreviewModal((state) => state.data)

    if(!product) {
        return null
    }

  return (
    <MOdal
  )
}

export default PreviewModal