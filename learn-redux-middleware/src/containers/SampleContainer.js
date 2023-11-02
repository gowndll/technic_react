import React, { useEffect } from "react";
// import { getPost, getUsers } from "../lib/api";
import { getPost, getUsers } from "../modules/sample"
import { connect } from "react-redux";
import Sample from "../components/Sample";


// const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  //클래스 형태 컴포넌트였다면 componentDidMount
  useEffect(() => {
    const fn = async () => {
      try {
        getPost(1);
        getUsers(1);
      } catch (e) {
        console.log(e) //에러조회
      }
    }
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['samole/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
