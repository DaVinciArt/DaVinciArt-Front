import AccountPage from "../../../components/pages/account-page/AccountPage";

interface UserParams {
  params: {
    userId: number,
  }
}

const User = ({params: {userId}}: UserParams) => {
  return (
    <AccountPage userId={userId}/>
  );
}

export default User;
