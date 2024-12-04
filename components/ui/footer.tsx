import Link from "next/link";
import { Button } from "../shadcn-ui/button";
import UpArrow from "@/components/ui/icons/up-arrow";


export default function Footer() {
    return (
        <div className="bg-[#EDF2F5] w-screen h-[140px] pt-[30px] grid grid-cols-[auto_145px_885px_122px_auto]">
            <div></div>
            <div className="font-medium text-[13px]">
                © 2024 МУПВ ВПЭС <br /> Все права защищены.
            </div>
            <div></div>
            <Link href="">
                <Button className="flex" >
                    Наверх
                    <UpArrow/>
                </Button>
            </Link>
            <div></div>
        </div>
    );
}