import React from "react";
import style from "./selectform.module.scss";
import star from '../../assets/images/star.png'
const Selectform = ({
  setSelectedValue,
  register,
  handleSubmit,
  setValue,
  watch,
  getValues,
  reset,
}) => {
  const formitems = [
    {
      
      input: "5",
      
    },
    {
      
      input: "4",
      
    },
    {
      
      input: "3",
      
    },
    {
     
      input: "2",
     
    },
    {
      input: "1",
      
    },
  ];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} className={style.stara} src={star} alt={`star-${i + 1}`} />);
    }
    return stars;
  };
  const handleCheckbox = (event, input) => {
    const isChecked = event.target.checked;
    const currentValue = input;

    const currentSelectedValues = getValues("rating") || [];

    const updatedSelectedValues = isChecked
      ? [...currentSelectedValues, currentValue]
      : currentSelectedValues.filter((value) => value !== currentValue);

    setValue("rating", updatedSelectedValues);
    setSelectedValue(updatedSelectedValues);
  };

  const handleClear = () => {
    reset({
      country: "",
      state: "",
      cities: "",
      range100200: false,
      range200300: false,
      range300400: false,
      range400500: false,
      range50100: false,
      rating: [],
    });
    setSelectedValue([]);
  };
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={style.form}
    >
      <div className={style.headerdiv}>
        <h4 className={style.flabel}>{"Filter"}</h4>
        <button
          type="button"
          onClick={() => handleClear()}
          className={style.clearButton}
        >
          clear button{" "}
        </button>
      </div>
      <div style={{ borderBottom: "0.5px solid #e5e5e5" }}>
        <h4 className={style.label}>{"RATING"}</h4>
        {formitems.map((e, index) => (
          <div className={style.inputfield} key={index}>
            <div className={style.checkboxLabel}>
              <input
                className={style.inerinput}
                type="checkbox"
                name="rating"
                checked={!!getValues("rating")?.includes(e.input)}
                onChange={(event) => handleCheckbox(event, e.input)}
              />
              {renderStars(Number(e.input))}

              {e.title}
            </div>
          </div>
        ))}
      </div>
      <h4 className={style.label}>{"LOCATIONS"}</h4>
      <div className={style.selectoptions}>
        <select
          {...register("country")}
          className={style.selectbox}
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
          {...register("state")}
          className={style.selectbox}
          placeholder="select states"
        >
          <option value="default" disabled hidden>
            Select States
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
          {...register("cities")}
          className={style.selectbox}
          placeholder="select cities"
        >
          <option value="default">Select cities</option>
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
      <h4 className={style.label}>{"RANGE"}</h4>
      <div className={style.numbox}>
        <label htmlFor="range100200" className={style.checkboxLabel}>
          <input
            {...register("range100200")}
            placeholder="email"
            className={style.inerinput}
            type="checkbox"
          />
          100-200
        </label>

        <label htmlFor="range200300" className={style.checkboxLabel}>
          <input
            {...register("range200300")}
            placeholder="email"
            className={style.inerinput}
            type="checkbox"
          />
          200-300
        </label>

        <label htmlFor="range300400" className={style.checkboxLabel}>
          <input
            {...register("range300400")}
            placeholder="email"
            className={style.inerinput}
            type="checkbox"
          />
          300-400
        </label>

        <label htmlFor="range400500" className={style.checkboxLabel}>
          <input
            {...register("range400500")}
            placeholder="email"
            className={style.inerinput}
            type="checkbox"
          />
          400-500
        </label>

        <label htmlFor="range50100" className={style.checkboxLabel}>
          <input
            {...register("range50100")}
            placeholder="email"
            className={style.inerinput}
            type="checkbox"
          />
          50-100
        </label>
      </div>
      <h4 className={style.label}>{"Founded Date"}</h4>
      <div className={style.progress}>

        <input 
        type="range"
        className={style.progressbarr}
        
         {...register("progresss")}
      
        />
      
      </div>
    </form>
  );
};

export default Selectform;
