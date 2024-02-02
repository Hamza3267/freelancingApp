import React from "react";
import style from "./postjob.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import Button from "../../components/buttons";
import PostForm from "../../components/post-job-form";

const PostJob = () => {
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <div className={style.flexbutton}>
            <h2 className={style.titleeh}>Create a job post</h2>
            <Button
              title={"Cencel"}
              btndiv={style.divsetting}
              btnClass={style.btnset1}
            />
            <Button
              title={"Save as draft"}
              btndiv={style.divsetting2}
              btnClass={style.btnset2}
            />
            <Button
              title={"Post job"}
              btndiv={style.divsetting3}
              btnClass={style.btnset3}
            />
          </div>
          <div className={style.mainform}>
            <PostForm />
          </div>
        </div>
      </div>
    </LayoutStyle>
  );
};

export default PostJob;
