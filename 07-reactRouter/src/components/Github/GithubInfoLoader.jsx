import React from "react";

export const GithubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/MujtabaAzizKhan");
  return res.json();
};
