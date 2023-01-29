import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const LikesDislikes = () => {
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:3008/api/countDetails/all`
    );
    setFormData({
      id: data[0].id,
      likes_count: parseInt(data[0].likes_count),
      dislikes_count: parseInt(data[0].dislikes_count),
    });
  };
  const [formData, setFormData] = useState({
    id: "",
    likes_count: 0,
    dislikes_count: 0,
  });
  const updateDetails = async (name, value, id) => {
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-Type": "application/json",
    };

    let x = { ...formData };
    x[name] = parseInt(value) + 1;
    console.log("formdata at update", formData);
    const { data } = await axios.put(
      `http://localhost:3008/api/countDetails/update/${id}`,
      x,
      { headers }
    );
    console.log("data", data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
    console.log("asdfgasdg", formData[name] + 1);
    updateDetails(name, value, 1);
  };

  console.log("formData", formData);

  let likes = formData.likes_count;
  let disLikes = formData.dislikes_count;

  return (
    <Fragment>
      <div className="bg-containter">
        <div className="button">
          <button
            type="button"
            name="likes_count"
            onClick={onChangeHandler}
            className="custom-btn btn-1"
            value={likes}
          >
            Likes : {likes}
          </button>
        </div>
        <div className="button">
          <button
            type="button"
            name="dislikes_count"
            onClick={onChangeHandler}
            className="custom-btn btn-2"
            value={disLikes}
          >
            DisLikes : {disLikes}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LikesDislikes;
