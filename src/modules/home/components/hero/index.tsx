import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import backgroundImage from "app/deneme.jpg"
import Link from "next/link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center bg-bottom" 
    style={{backgroundImage: `url('https://minoribeauty.com/cdn/shop/files/Minori_BannerShot_products_0.75_1950x.png?v=1666377613')`,
     backgroundSize: '100%', backgroundColor:'gray', backgroundPosition: 'center bottom', backgroundRepeat:'no-repeat' }}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-end text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Stand out from the crowd.

          </Heading>
          
        </span>
        <LocalizedClientLink
        href={'/store'}>
            <Button>
            Shop now
          </Button>
        </LocalizedClientLink>
        
      </div>
    </div>
  )
}

export default Hero
