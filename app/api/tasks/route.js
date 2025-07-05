import { prisma } from '../../../shared/prisma-client';

export const GET = async () => {
  const tasks = await prisma.task.findMany();

  return Response.json({ data: tasks });
};

export const POST = async (request) => {
  const data = await request.json();
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ data: task });
};
