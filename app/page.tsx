'use client'

import { Button } from "@/components/shadcn-ui/button";
import { Calendar } from "@/components/shadcn-ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/shadcn-ui/form";
import { Separator } from "@/components/shadcn-ui/separator";
import Arrow from "@/components/ui/icons/arrow";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn-ui/select";
import { Input } from "@/components/shadcn-ui/input";

const FormSchema = z.object ({
  date: z.string(),
  time: z.string(),
  from: z.string(),
  where: z.string()
})

const dates = ["02.12.2024", "03.12.2024", "04.12.2024", "05.12.2024", "06.12.2024"];
const times = ["8:00","9:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"];
const streets = ["Ул.Гамарника 3", "Ул.Некрасовская 122", "Ул.50 лет ВЛКСМ 26В", "Ул.Короленко 3А","Ул.Светланская 205А","Ул.Иртышская 5","Ул.Гоголя 32", "Ул.Шепеткова 8А","Ул.Волховская 10А","Ул.Пологая 72А", "О.Попов, ул.Подгорная 13А","О.Попов, ул.Подгорная 23","Ул.Сельская 3А","Ул.Ивановская 7","Ул.Невельского 21А","Ул.Иртышская 12","Ул.Находкинская 7","Ул.Бородинская 20Б", "Ул.Проспект 100-летия Владивостока 109а"]


 
export default function Home() {

  const [date,setDate] = useState<Date | undefined>(new Date())

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      where: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Заявка успешно оформлена",
    })
  }

  return (
    <div className="grid grid-cols-[auto_754px_98px_348px_auto] pb-[50px]">
      <div></div>

        {/* Начало левого блока */}

      <div className="flex flex-col">

        {/* Начало блока новостей */}
        
      
        <div className="mb-[103px]">
            <div className="font-extrabold text-[28px] pl-[24px] mb-[20px]">Новости</div>
          <Separator className="mb-[25px]"/>
          <div className="flex items-center pl-[24px]">
            <button disabled className="disabled:opacity-50 w-[30px] h-[30px]">
              <Arrow className="rotate-180 stroke-[#1F63AE]"/>
            </button>

            {/* Начало самих новостей */}

            <div className="grid grid-cols-2 grid-rows-2 gap-x-[30px] gap-y-[25px] mx-[20px]">
              <div className="flex flex-col max-w-[300px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>

              <div className="flex flex-col max-w-[300px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>

              <div className="flex flex-col max-w-[300px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>

              <div className="flex flex-col max-w-[300px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>
            </div>

            {/* Конец самих новостей */}

            <button className="disabled:opacity-50 w-[30px] h-[30px]">
              <Arrow className="stroke-[#1F63AE]"/>
            </button>
          </div>
        </div>

          {/* Конец блока новостей */}

          {/* Начало блока мероприятий */}

        <div>
          <div className="flex items-center mb-[20px]">
            <div className="font-extrabold text-[28px] pl-[24px] mr-[30px]">Мероприятия</div>
            <Button>Смотреть все публикации</Button>
          </div>
          <Separator className="mb-[25px] w-[649px]"/>

          {/* Сами мероприятия */}

          <div className="grid grid-cols-1 grid-rows-3 pl-[24px] gap-y-[40px]">

            <div className="flex max-h-[185px] gap-x-[25px]">
              <Image src="/img/event.png" width="280" height="185" alt="" />
              <div className="flex flex-col max-w-[320px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>
            </div>
            
            <div className="flex max-h-[185px] gap-x-[25px]">
              <Image src="/img/event.png" width="280" height="185" alt="" />
              <div className="flex flex-col max-w-[320px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>
            </div>

            <div className="flex max-h-[185px] gap-x-[25px]">
              <Image src="/img/event.png" width="280" height="185" alt="" />
              <div className="flex flex-col max-w-[320px]">
                <div className="text-[10px] font-semibold mb-[10px]">22.11.2024</div>
                <div className="text-sm font-bold mb-[15px] text-[#1F63AE]">На улице авроровской установили опоры уличного освещения фывыфвфыввввввввввввввввввфывфы</div>
                <Separator className="mb-[10px]"/>
                <div className="text-xs font-normal">От ул. Авроровская, 20, ст. 2 до здания № 2г в Лесном переулке установлено 28 опор ыфвфывыфвыффффффф...</div>
              </div>
            </div>

          </div>

          {/* Конец самих мероприятий */}

        </div>

        {/* конец блока мероприятий */}
      </div>

      {/* Конец левого блока */}

      <div></div>

      {/* Начало правого блока */}

      <div className="flex flex-col">

      {/* Начало блока дней рождения */}

        <div className="flex flex-col items-center mb-[40px]">
          <div className="text-[28px] font-extrabold pl-[24px] mb-[20px] self-start">
            Дни рождения
          </div>
          <Separator className="mb-[25px]"/>
          <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mb-[10px]"
          />
          <div className="self-start pl-[24px]">
            <div className="font-bold text-sm mb-[10px] text-[#1F63AE]">На текущей неделе:</div>
            <div className="font-medium text-xs">1. Воинов Максим Андреевич - 25.11</div>
            <div className="font-medium text-xs">2. Ващенко Владислав Андреевич - 26.11</div>
            <div className="font-medium text-xs">3. Лановой Сергей Захарович - 26.11</div>
            <div className="font-medium text-xs">4. Галактионов Александр Александрович - 28.11</div>
            <div className="font-medium text-xs">5. Венков Андрей Владимирович - 29.11</div>
            <div className="font-medium text-xs">6. Гросс Анастасия Олеговна - 30.11</div>
            <div className="font-medium text-xs">7. Воинов Максим Андреевич - 25.11</div>
            <div className="font-medium text-xs">8. Ващенко Владислав Андреевич - 26.11</div>
            <div className="font-medium text-xs">9. Лановой Сергей Захарович - 26.11</div>
            <div className="font-medium text-xs">10. Галактионов Александр Александрович - 28.11</div>
            <div className="font-medium text-xs">11. Венков Андрей Владимирович - 29.11</div>
            <div className="font-medium text-xs">12. Гросс Анастасия Олеговна - 30.11</div>
          </div>
        </div>

      {/* Конец блока дней рождения */}

      {/* Начало блока заказа транспорта */}

        <div className="flex flex-col">
          <div className="font-extrabold text-[28px] pl-[24px] mb-[20px]">
            Заказать транспорт
          </div>
          <Separator className="mb-25px"/>
          <div className="flex flex-col items-center mt-[25px]">
            <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 grid-rows-4 gap-x-[20px]">
                  <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                  <FormItem className="w-[140px]">
                    <FormLabel className="text-[11px] font-bold pl-[5px] pb-[5px]">Дата</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Дата"/>
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {
                            dates.map((transport_data) => {
                              return (
                                <SelectItem key={transport_data} value={transport_data.toString()}>{transport_data}</SelectItem>                        
                              )
                            })
                          }
                        </SelectContent>
                    </Select>
                  </FormItem>
                  )} 
                  />
                  <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="w-[140px]">
                      <FormLabel className="text-[11px] font-bold pl-[5px] pb-[5px]">Время</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Время"/>
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {
                              times.map((transport_time) => {
                                return (
                                  <SelectItem key={transport_time} value={transport_time.toString()}>{transport_time}</SelectItem>                        
                                )
                              })
                            }
                          </SelectContent>
                      </Select>
                    </FormItem>
                  )} 
                  />
                  <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem className="col-span-2 mt-[5px] max-w-[300px]">
                      <FormLabel className="text-[11px] font-bold pl-[5px] pb-[5px]">Откуда</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Откуда"/>
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {
                              streets.map((street) => {
                                return (
                                  <SelectItem key={street} value={street.toString()}>{street}</SelectItem>                        
                                )
                              })
                            }
                          </SelectContent>
                      </Select>
                    </FormItem>
                  )} 
                  />
                  <FormField
                  control={form.control}
                  name="where"
                  render={({ field }) => (
                    <FormItem className="col-span-2 mt-[5px]">
                      <FormLabel className="text-[11px] font-bold pl-[5px] pb-[5px]">Куда</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Куда" {...field} />
                      </FormControl>
                    </FormItem>
                  )} 
                  />
                  <Button className="mt-[25px]" type="submit">Заказать</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

      {/* Конец блока заказа транспорта */}

      </div>

      {/* Конец правого блока */}

      <div></div>
    </div>
  );
}
