'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from '../shared/prisma-client';
import { redirect } from 'next/navigation';
import z from 'zod';

export const deleteTask = async (formData: FormData) => {
  const id = formData.get('id') as string;
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath('./todo-list');
};

export const createTask = async (prevData: FormData, formData: FormData) => {
  const content = formData.get('content') as string;

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({
      content,
    });

    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath('/todo-list');
    return {
      message: 'Success',
      type: 'success',
    };
  } catch (error) {
    const message = await error.errors[0]?.message;
    return {
      message: message || 'Erorr',
      type: 'error',
    };
  }
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const updateTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on',
    },
  });

  redirect('/todo-list');
};
