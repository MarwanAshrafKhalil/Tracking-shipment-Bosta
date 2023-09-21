// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "./userSlice";

// export const UserView = (trackID) => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers(trackID));
//   }, []);

//   return (
//     <div>
//       <h2>List of Users - </h2>
//       {user.loading && <div> loading... </div>}
//       {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
//       {!user.loading && user.users ? (
//         <ul>
//           {user.users.map((user) => (
//             <li key={user.id}> {user.name}</li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };
