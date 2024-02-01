import React from "react";
import style from "./postform.module.scss";
import { useForm, Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import Button from "../../components/buttons";
import cam from "../../assets/images/darkcamera.png";
import upload from "../../assets/images/iconupload.png";
const PostForm = () => {
  const { register, handleSubmit, control, setValue } = useForm();
  const fileIconClick = () => {
    document.getElementById("fileInput").click();
  };

  const fileInput = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];
    setValue("Test-Evidence", file ? URL.createObjectURL(file) : "");
  };
  const customToolbar = {
    options: ["inline", "list", "link", "embedded", "history"],
    inline: {
      options: ["bold", "italic", "underline"],
    },
    list: {
      options: ["ordered"],
    },
    link: {
      icon: "bro",
    },
    embedded: {
      options: ["emoji", "image"],
    },
  };
  const editorStyle = {
    border: "1px solid",
    padding: "1%",
    borderColor: "grey",
    height: "130px",
    fontSize: "16px",
  };
  return (
    <form onSubmit={handleSubmit((dataa) => console.log(dataa))}>
      <div className={style.main}>
        <div>
          <div className={style.innerdiv}>
            <h6 className={style.basic}>Basic info</h6>

            <label className={style.label}>Job title</label>
            <div>
              <input
                {...register("title")}
                placeholder="Name"
                className={style.inerinput}
              />
            </div>
            <div className={style.labelss}>
              <label className={style.label}>Jobs Categories *</label>

              <label className={style.label}>Job type *</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
            <label className={style.label}>Skills *</label>
            <div>
              <select
                {...register("country")}
                className={style.inerbox}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>

            <div className={style.icons}>
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                Description *
              </p>
              <Controller
                name="Feedback"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Editor
                    placeholder="Write your feedback here"
                    toolbar={customToolbar}
                    editorStyle={editorStyle}
                    // editorState={}
                    {...field}
                  />
                )}
              />
            </div>

            <div className={style.labels}>
              <label className={style.label}>Career level</label>

              <label className={style.label}>Experience</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
            <div className={style.labels}>
              <label className={style.label}>Qualification</label>

              <label className={style.label}>Quantity to be recruited</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
            <div className={style.lbl}>
              <label className={style.label}>Gender</label>

              <label className={style.label}>Closing days</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <input
                {...register("country")}
                className={style.inerinput}
                placeholder="30"
              />
            </div>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}>Salary</h6>
            <div className={style.labels}>
              <label className={style.label}>Show pay by</label>

              <label className={style.label}>Currency</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="Range"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Range</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="($) - USD"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">($) - USD</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
            <div className={style.lbl}>
              <label className={style.label}>Minimum</label>

              <label className={style.label}>Maximum</label>
            </div>
            <div className={style.selectflex}>
              <input
                {...register("max")}
                className={style.inerinput}
                placeholder=""
              />

              <input
                {...register("min")}
                className={style.inerinput}
                placeholder=""
              />
            </div>

            <label className={style.label}>Rate</label>
            <div>
              <select
                {...register("country")}
                className={style.inerinputrange}
                placeholder="Range"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Range</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}>Job apply type</h6>
            <div className={style.labeltype}>
              <label className={style.label}>Select type</label>

              <label className={style.label}>Job apply email</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}>Company</h6>
            <label className={style.labeel}>Select company</label>
            <div>
              <select
                {...register("country")}
                className={style.inerinputrange}
                placeholder="Range"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">None</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}>Location</h6>
            <div className={style.labellocat}>
              <label className={style.label}>Location</label>

              <label className={style.label}>Maps location</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
            <div className={style.labelmap}>
              <label className={style.label}>Longtitude</label>

              <label className={style.label}>Latitude</label>
            </div>
            <div className={style.selectflex}>
              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select
                {...register("country")}
                className={style.inerinput}
                placeholder="select Country"
              >
                <option value="default" disabled hidden>
                  choose country
                </option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">USA</option>
                <option value="canada">CANADA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="malaysia">Malaysia</option>
                <option value="uk">Uk</option>
                <option value="uae">UAE</option>
                <option value="russia">RUSSIA</option>
              </select>
            </div>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}>Cover Image</h6>
            <text className={style.imageload}>Cover image</text>
            <div className={style.loaderdiv}>
              <img
                src={upload}
                alt="upload logo"
                className={style.imgsetting}
                title="upload file"
                onClick={fileIconClick}
              />
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={fileInput}
              />
              <text className={style.texttype}>
                Click here{" "}
                <span className={style.span}>or drop files to upload</span>
              </text>
            </div>
            <text className={style.description}>
              The cover image size should be max 1920 x 400px
            </text>
          </div>
          <div className={style.salarydiv}>
            <h6 className={style.basic}> Gallery</h6>
            <text className={style.imageload}> image</text>
            <div className={style.divimage}>
              <img
                src={upload}
                alt="upload logo"
                className={style.imgs}
                title="upload file"
                onClick={fileIconClick}
              />
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={fileInput}
              />
              <text className={style.texttypee}>Upload</text>
            </div>
            <div className={style.divimgg}>
              <p className={style.imgdesc}>Maximum file size: 1400kb.</p>
            </div>
          </div>
          <div className={style.salarydivvv}>
            <h6 className={style.basic}>Video</h6>
            <div className={style.lastdivv}>
              <label className={style.labeeel}>Introduction video Url</label>
            </div>
            <div>
              <input
                {...register("country")}
                className={style.inerinput}
                placeholder="video link"
              />
            </div>
          </div>
        </div>

        <div className={style.salarydiv}>
          <h6 className={style.basicc}>About this job</h6>
          <div className={style.profiledesc}>
            <div className={style.piccc}>
              <img src={cam} alt="" style={{ height: "23px" }} />
            </div>
            <h4 className={style.h4div}> Title of job</h4>
            <p className={style.companyname}>
              by <span className={style.span1}>Company Name </span>in{" "}
              <span className={style.span2}>Category</span>
            </p>
            <p className={style.last}>$-$/</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
