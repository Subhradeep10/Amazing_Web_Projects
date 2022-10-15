import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Layout from "@components/Layout";
import { useNavigate } from "react-router-dom";
import { login } from "@redux/Actions/auth";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = (data: any) => {
    console.log("Submitted Data", data);
    dispatch(login(data))
      .then((res: any) => {
        navigate("/private-route");
      })
      .catch((e: any) => {
        if (e?.message) {
          console.log(e.message);
        }
      });
  };
  return (
    <Layout>
      <h5>Login Page</h5>
      <div className="center">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-group px-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              placeholder="Enter Email"
              {...register("username", {
                required: {
                  value: true,
                  message: "This Field is Required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "Does not match the pattern for Email",
                },
              })}
            />
            <div>
              {errors?.username && (
                <p className="text-danger">{errors?.username?.message}</p>
              )}
            </div>
          </div>
          <div className="form-group mt-2 px-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              placeholder="Enter Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "This Field is Required",
                },
                minLength: {
                  value: 6,
                  message: "Minimum Six Characters are required",
                },
              })}
              type="password"
            />
            <div>
              {errors?.password && (
                <p className="text-danger">{errors?.password?.message}</p>
              )}
            </div>
          </div>
          <div className="px-3 mt-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
