import Image from 'next/image';
import { imageBanana } from '~/constants/image-constant';
import { Card, CardContent } from '../ui/card';

export default function ImageBanana() {
  return (
    <div className="rotate-3 p-1 w-fit rounded-xl bg-linear-to-t from-border to-[#d7f5b8] shadow-lg">
      <Card className="border-0 outline-none w-fit -rotate-6 hover:-rotate-3 transition-all duration-300 shadow-xl">
        <CardContent>
          <Image
            src={imageBanana.banner.src}
            alt={imageBanana.banner.alt}
            width={550}
            height={550}
            className="rounded-xl object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
}
