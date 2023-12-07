import AccountPage from "../../../components/pages/account-page/AccountPage";
import AuthorPage from "../../../components/pages/author-page/AuthorPage";

interface UserParams {
  params: {
    userId: number,
  }
}

const User = ({params: {userId}}: UserParams) => {
  return (
    <AuthorPage authorId={userId}/>
  );
}

export default User;
