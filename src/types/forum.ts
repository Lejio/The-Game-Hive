export interface Post {
  user: string;
  post_title: string;
  post_date: Date;
  upvotes: number;
  tags: string[];
  related_game?: string; // Optional field
  post_content: string;
}

export interface Reply {
  user: string;
  original_post_id: string;
  post_date: Date;
  upvotes: number;
  reply_content: string;
}
  