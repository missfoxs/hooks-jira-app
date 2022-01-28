import React from "react";

export type Project = {
  id: string;
  name: string;
  personId: string;
  pin: boolean
  organization: string;
  created: string;
};

export type User = {
  id: string;
  name: string;
};

type ListProps = {
  users: User[];
  projects: Project[];
};
export const List = ({ users, projects }: ListProps) => {
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
