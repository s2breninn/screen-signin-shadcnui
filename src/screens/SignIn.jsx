import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import ChefAmico  from "../assets/Chef-amico.svg";
import ChefBro from "../assets/Chef-bro.svg";
import ChefCuate from "../assets/Chef-cuate.svg";

export default function SignIn() {
  return (
    <main className="flex h-screen w-screen">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className='w-full max-w-xl'>
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={ChefAmico} alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={ChefBro} alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={ChefCuate} alt="" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
            <CardDescription>Utilize seu e-mail e senha ou o GitHub para entrar</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id='email' placeholder='exemplo@email.com' type='email'/>
            </div>
            <div className="mt-4">
              <Label htmlFor="senha">Senha</Label>
              <Input id='password' placeholder='***********' type='password'/>
            </div>

            <Button className='mt-6 w-full'>Entrar</Button>

            <div className="flex items-center gap-4 mt-2">
              <Separator/>
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator/>
            </div>

            <Button variant='outline' className='my-4 w-full'><GitHubLogoIcon className="mr-2"/>Entra com o GitHub</Button>

          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com os nossos termos de uso e política de pivacidade</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
