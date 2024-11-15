/* eslint-disable react/prop-types */

export default function UserStatus({ loggedIn, isAdmin }) {
  return loggedIn && isAdmin ? <h1>Welcome Admin!</h1> : <h1> Welcome User</h1>;
}
