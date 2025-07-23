import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

interface LogoProps {
  size?: number
}

export default function Logo({ size = 75 }: LogoProps) {
  return (
    <Button
      variant="ghost"
      asChild
      className="p-0 h-auto w-auto"
    >
      <Link href="/">
        <Image
          src="/horecabenelux-logo.png"
          alt="Horeca Benelux Logo"
          width={size}  
          height={size} 
          priority
        />
      </Link>
    </Button>
  )
}

