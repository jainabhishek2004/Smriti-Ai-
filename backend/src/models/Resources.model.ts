import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IResource extends Document {
  type: 'pdf' | 'youtube' | 'article';
  title: string;
  url: string;
  folderId: Types.ObjectId;
  summary?: string;
  uploadedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema: Schema<IResource> = new Schema(
  {
    type: {
      type: String,
      enum: ['pdf', 'youtube', 'article'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    folderId: {
      type: Schema.Types.ObjectId,
      ref: 'Folder',
      required: true,
    },
    summary: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model<IResource>('Resource', ResourceSchema);
export {Resource} ;
