import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import qs from 'qs';
import { cleanObject } from "../../utils";

const api_url = process.env.REACT_APP_API_URL;
const ProjectList = () => {
  const [params, setParams] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      `${api_url}/projects?${qs.stringify(cleanObject(params))}`
    ).then(async (response) => {
      if (response.ok) {
        setProjects(await response.json());
      }
    });
  }, [params]);

  useEffect(() => {
    fetch(`${api_url}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} projects={projects} />
    </>
  );
};

export default ProjectList;
