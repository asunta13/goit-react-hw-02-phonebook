export const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contacts => (
          <li key={contacts.id}>{contacts.name}</li>
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
