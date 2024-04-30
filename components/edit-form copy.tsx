"use client";

import React from "react";
import { updateImage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import type { Upload } from "@prisma/client";

const EditForm = ({ data }: { data: Upload }) => {
  const [state, formAction] = useFormState(
    updateImage.bind(null, data.id),
    null
  );

  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          defaultValue={data.title}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2 ">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:rounde-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 cursor-pointer border border-gray-400 w-full"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2 ">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default EditForm;
