import { useLoaderData } from "react-router-dom";

const CareerDetail = () => {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details For {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          tempora? Ipsa similique vitae reprehenderit. Exercitationem quo,
          alias, quam omnis reiciendis itaque nemo provident quia, distinctio
          aliquid et facere numquam. Ad.
        </p>
      </div>
    </div>
  );
};

export default CareerDetail;

// Loader function
export const careerDetailLoader = async ({ params: { id } }) => {
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Couldn't find that career");
  }
  return res.json();
};
