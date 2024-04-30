import Image from "next/image";
import { DeleteButton, EditButton } from "./button";
import type { Upload } from "@prisma/client";

const Card = ({ data }: { data: Upload }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-md shadow">
      <div className="relative aspect-video">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-md"
        />
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900 truncate">
          {data.title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Card;
