import React from "react";

export const List = ({ users, projects }) => {
  return (
    <table>
      <thead>
        <th>名称</th>
        <th>负责人</th>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr>
            <td>{project.name}</td>
            <td>
              {users.find((item) => item.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
