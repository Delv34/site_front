'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/shadcn-ui/navigation-menu"
import Link from "next/link";
import Image from "next/image";
import { Button } from "../shadcn-ui/button";

  export default function Header() {
    return (
      <>
      <div className="grid grid-cols-[auto_230px_265px_288px_269px_100px_auto] h-[170px] pt-[20px] pb-[30px] justify-items-start">
      {/* <div className="flex items-center justify-between px-36"> */}

        <div></div>

        <Image src={'/img/logo.jpg'} alt="" width='230' height='120'/>

        <div></div>

        <div className="grid gap-y-[20px] self-center">
          <div className="text-[11px] font-medium">
            МУНИЦИПАЛЬНОЕ УНИТАРНОЕ <br />ПРЕДПРИЯТИЕ ВЛАДИВОСТОКА 
          </div>
          <div className="text-[15px] font-extrabold">
            ВЛАДИВОСТОКСКОЕ ПРЕДПРИЯТИЕ <br /> ЭЛЕКТРИЧЕСКИХ СЕТЕЙ
          </div>
        </div>

        <div></div>

        <Button
        size="header"
        onClick={ ()=> {
          

        }}>
        Войти
        </Button>

        <div></div>

      </div>

        <NavigationMenu className="bg-[#1F63AE] h-[60px] mb-[50px]">
          <NavigationMenuList className="gap-x-[15px]">
            
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Мероприятия
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="http://doc.vpes.local/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Документы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="http://info.vpes.local/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Тел. справочник
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="http://mail.vpes.local/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Почта
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </>
    );
  }