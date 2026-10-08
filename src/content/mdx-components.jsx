'use client'

import CustomLink from '@/app/components/custom-link'
import Image from 'next/image'
import clsx from 'clsx'
import { PhotoViewImage } from '@/app/components/blog/preview-photo'

const components = {
  a: CustomLink,
  Image: (props) => (
    <PhotoViewImage src={props.src.toString()}>
      <Image
        {...props}
        alt={props.src.toString()}
        className={clsx(props.className, 'rounded-lg cursor-pointer')}
      />
    </PhotoViewImage>
  ),
}

export function useMDXComponents() {
  return components
}

export default components
