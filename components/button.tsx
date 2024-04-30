"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { clsx } from "clsx";
import { deleteImage } from "@/lib/actions";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        "bg-blue-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-blue-600",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/edit/${id}`}
      className="py-3 text-sm rounded-bl-md w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer text-center"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageById = deleteImage.bind(null, id);

  return (
    <form
      action={deleteImageById}
      className="py-3 text-sm rounded-br-md w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
