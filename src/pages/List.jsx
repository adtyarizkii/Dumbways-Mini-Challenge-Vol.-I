import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import User from "../dummyData/User";

function List() {
  const [data, setData] = useState(User);
  console.log(data);

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-desc">
            <div className="profile-data">
              <h2>Instagram</h2>
            </div>
            {/* {data?.map((item) => (
              <div className="profile-data">
                <div className="profile-icon">
                  <img
                    className="rounded"
                    src={item.image}
                    alt=""
                    style={{ widht: "1%", height: "4%" }}
                  />
                </div>
                <div className="profile-details">
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.username}
                  </span>
                  <span>{item.follower}</span>
                  <span>{item.following}</span>
                </div>
              </div>
            ))} */}
            {data?.map((item) => (
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.username}</h5>
                      <p className="text-muted">Followers: {item.follower}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
