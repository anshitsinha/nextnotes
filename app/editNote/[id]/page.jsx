import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getNotesById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Note");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { notes } = await getNotesById(id);

  const { title } = notes;
  const { description } = notes;
  console.log(title);
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default page;
