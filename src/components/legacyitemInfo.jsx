import React from 'react';

function LegacyitemInfo(props) {
  const { legacyitem } = props;

  return ( 
    <tr>
            <td>{legacyitem.id}</td>
            <td>{legacyitem.thumbnail}</td>
            <td>{legacyitem.title}</td>
            <td>{legacyitem.description.length > 100 ? legacyitem.description.substring(0, 100).concat('...') : legacyitem.description}</td>
    </tr>
  );
}

export default LegacyitemInfo;
