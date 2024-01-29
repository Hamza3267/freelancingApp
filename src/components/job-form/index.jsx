import React from "react";
import style from "./jobform.module.scss";
// import Button from "../../components/buttons";
import { useForm } from "react-hook-form";

import search from "../../assets/images/searchjobicon.png";
const JobForm = ({inputset,selectsetting,openn}) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className={style.selectoptions}>
        <div className={style.boxflex}>
          <select
            {...register("jobs")}
            className={`${style.selectbox} ${selectsetting}`}
            placeholder="All jobs"
          >
            <option value="default" disabled hidden>
              All jobs
            </option>
            <option value="alljob">All jobs</option>
            <option value="open">Opening</option>
            <option value="pause">Paused</option>
            <option value="pending">Pending</option>
          </select>
          {openn &&
          <div className={style.inputdiv}>
            <input
              type="input"
              placeholder="Search job title"
              className={`${style.input} ${inputset}`}
            />
            <img
              src={search}
              alt=""
              style={{ height: "20px", paddingRight: "2%" }}
            />
          </div>
            }
        </div>
        <div className={style.sortitmes}>
          <label className={style.label}>Sort by</label>
          <select
            {...register("newestjob")}
            className={style.selectboox}
            placeholder="Newest"
          >
            <option value="default" disabled hidden>
              Newest
            </option>
            <option value="newest">Newest</option>
            <option value="open">Opening</option>
            <option value="pause">Paused</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
