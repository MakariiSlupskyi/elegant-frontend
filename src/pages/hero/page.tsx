import LangToggle from "@/components/lang-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";


export default function Hero() {
  return <div className="flex flex-col items-center sticky">
    <div className="flex flex-col items-center w-full border-b border-border">
      <div className='flex items-center justify-between min-w-[80vw] py-4'>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 bg-amber-600 rounded-full" />
          <span className="font-bold">Elegant</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="text-sm p-2 rounded w-[200px] transition-all hover:bg-accent" >
                  <p>Auth</p>
                  <p className="text-sm text-muted-fg">Home not needed text...</p>
                </div>
                <div className="text-sm p-2 rounded w-[200px] transition-all hover:bg-accent" >
                  <p>Docs</p>
                  <p className="text-sm text-muted-fg">Home not needed text...</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuTrigger>Install</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="text-sm p-2 rounded w-[200px] transition-all hover:bg-accent" >
                  <p>Windows</p>
                </div>
                <div className="text-sm p-2 rounded w-[200px] transition-all hover:bg-accent" >
                  <p>Mac</p>
                </div>
                <div className="text-sm p-2 rounded w-[200px] transition-all hover:bg-accent" >
                  <p>Linux</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="/docs">Docs</a>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <ModeToggle />
          <LangToggle />
          <Button className="mr-2" variant={"ghost"}>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>

    <section className="flex flex-col justify-center ml-20 mt-36 min-w-[80vw]">
      <h1 className="font-bold text-6xl mb-5">Elegant is a AI CV creator<br />and trainer</h1>
      <h2 className="text-xl text-muted-fg mb-9">All you need to become a developer.<br/>Some other unneeded text...</h2>
      <div className="flex gap-2">
        <Button>Create CV now</Button>
        <p></p>
      </div>
    </section>

  </div>
}