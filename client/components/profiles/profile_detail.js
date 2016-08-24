import React from 'react';

const ProfileDetail = ({ profile }) => {
  const { name, email, phone, avatar } = profile;

  return (
    <div className="col-sm-4">
      <div className="panel">
        <div className="panel-body">
          <img className="img-responsive img-rounded" src={avatar} />
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{phone}</p>
          {/*<a href="#" role="button" className="btn btn-default">View details</a>*/}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
