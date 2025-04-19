import { Navbar, Sidebar } from "../components";

const CreateUser = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3 mt-5">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Create a new user
                        </h5>
                        <p className="text-center small">
                          Enter details to create new user
                        </p>
                      </div>

                      {/* Create user form */}
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="fullName" className="form-label">
                            Full Name
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="text"
                              name="fullName"
                              className="form-control"
                              id="fullName"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter new user's full name.
                            </div>
                          </div>
                        </div>
                        {/** Full Name end */}
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter new user's email.
                            </div>
                          </div>
                        </div>
                        {/* Email end */}
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        {/* Password end */}
                        <div className="col-12">
                          <label htmlFor="yourConfirmPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            id="yourConfirmPassword"
                            required
                          />
                          <div className="invalid-feedback">
                            Please confirm your password!
                          </div>
                        </div>
                        {/* Confirm Password end */}
                        <div className="col-12">
                          <label htmlFor="userType" className="form-label">
                            User Type
                          </label>
                          <select
                            name="userType"
                            className="form-control"
                            id="userType"
                            required
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                          </select>
                          <div className="invalid-feedback">
                            Please confirm your password!
                          </div>
                        </div>
                        {/* UserType end */}
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            onClick={() => {}}
                          >
                            Login
                          </button>
                        </div>
                        {/* <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{' '}
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CreateUser;
