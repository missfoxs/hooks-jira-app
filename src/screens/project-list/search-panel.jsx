import React from "react";

export const SearchPanel = ({ users, params, setParams }) => {
  
  return (
    <div>
      <input
        type="text"
        onChange={(evt) =>
          setParams({
            ...params,
            name: evt.target.value,
          })
        }
      />
      <select
        onChange={(evt) =>
          setParams({
            ...params,
            personId: evt.target.value,
          })
        }
      >
        <option value="">全部</option>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};
