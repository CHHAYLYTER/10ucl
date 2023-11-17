import axios from "axios";
import "./datafetching.css";
import React, { useState, useEffect } from "react";
import ButtonAdd from "../Add/addcomponent";

const DataFetching = ({ list }) => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://192.168.0.179:3000/book")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="about_container">
        <div className="about_boxcontainer">
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>

            {posts.map((list, i) => (
              <tr key={i}>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.body}</td>
                <td>
                  <a href="" className="btn btn-edit">
                    {" "}
                    Edit{" "}
                  </a>
                  <a href="" className="btn btn-delete">
                    {" "}
                    Delete{" "}
                  </a>
                </td>
              </tr>
            ))}
          </table>

          <a className="btn about_add" onClick={() => setOpen(true)}>
            Create +
          </a>
          {open && <ButtonAdd />}
        </div>
      </div>
    </div>
  );
};
export default DataFetching;
