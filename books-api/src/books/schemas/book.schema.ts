import { Schema } from 'mongoose';

export const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  description: { type: String, required: true },
});
