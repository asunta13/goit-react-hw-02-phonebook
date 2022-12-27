export const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </>
  );
};

// export const FriendList = ({ friends }) => {
//   return (
//     <Friends>
//       {friends.map(friends => (
//         <FriendListItem key={friends.id} friends={friends} />
//       ))}
//     </Friends>
//   );
// };
