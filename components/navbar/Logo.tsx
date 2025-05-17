import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

function Logo() {
  return (
    <Button
      variant="ghost"
      asChild
      className="p-0 h-auto w-auto"
    >
      <Link href="/">
        <Image
          src="/horecabenelux-logo.png"
          alt="Logo"
          width={75}  
          height={75} 
          priority
        />
      </Link>
    </Button>
  )
}

export default Logo
