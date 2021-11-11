import express from 'express';
import { Server } from 'socket.io';

export const setChatEvents = (io: Server): void => {
  io.on('connection', socket => {
    console.log(`Hello, ${socket.id}!`);
    socket.send(`Hello, ${socket.id}!`);
    socket.on('disconnect', () => {
      console.log(`Goodbye, ${socket.id}!`);
      socket.send(`Goodbye, ${socket.id}!`);
    });
  });
};
