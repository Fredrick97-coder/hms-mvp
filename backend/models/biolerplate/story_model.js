import mongoose from 'mongoose';
const { Schema } = mongoose;

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
});

export const Story = mongoose.model('Story', storySchema);
