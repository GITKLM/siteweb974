import Image from "next/image";
import siteweb974 from "@/public/siteweb974.svg";

export default function Logo() {
    return (
        <div>
            <Image
                src={siteweb974}
                alt="Siteweb974 Logo"
                width={170}
                height={36}
            />
        </div>
    );
}
