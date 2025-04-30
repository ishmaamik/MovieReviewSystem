
import styles from "../css/profile.module.css"

const list=[
    {
       title: "Username"
    },
    {
        title: "FirstName"
    },
    {
        title: "LastName"
    },
    {
        title: "EmailAddress"
    }
]

const DetailsBar = () => {
    return (
      <div className={styles["container"]}>
        <h3>
          {list.map((p, index) => {
            return <span key={index}>{p.title} <br/></span>; // Ensure you're returning the JSX
          })}
        </h3>
      </div>
    );
  };

export default DetailsBar