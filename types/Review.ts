export type Review = {
  id: number
  commentator_id: string;
  commentator: {
    avatar: string,
    id: number,
    username: string,
  }
  receiver_id: number;
  upload_date: string;
  comment_text: string;
}