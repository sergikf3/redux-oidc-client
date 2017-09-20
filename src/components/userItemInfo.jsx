import React from 'react';

function UserItemInfo(props) {
  const { useritem } = props;

  return (
    <tr>
            <td>{useritem.id}</td>
            <td>{useritem.thumbnail}</td>
            <td>{useritem.title}</td>
            <td>{useritem.description.length > 100 ? useritem.description.substring(0, 100).concat('...') : useritem.description}</td>
    </tr>
  );
}

export default UserItemInfo;
