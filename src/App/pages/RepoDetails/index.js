import React from "react";

function RepoDetails({repo}) {
    const userName = localStorage.getItem('gitUser')
    return (
        <>
            <h2>{`https://api.github.com/repos/${userName}${repo}/contributors`}</h2>
            <h2>{repo}</h2>
            <h2>{userName}</h2>
        </>
    )
  }

export default RepoDetails