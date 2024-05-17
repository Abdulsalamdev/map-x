import { builder } from "@/api/bulider";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cookieStorage } from "@ibnlanre/portal";
import React from "react";
import { toast } from "react-toastify";
import { firebaseApp } from "@/api/firebaseconfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const SignIn = () => {
  const { push } = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: () => builder.use().auth.login(myForm.values),
    mutationKey: builder.auth.login.get(),
    onSuccess(data, variables, context) {
      push("/dashboard");
      toast.success("login successful");
      cookieStorage.setItem("my-user", JSON.stringify(data.data));
      myForm.reset();
    },
  });
  const myForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    // functions will be used to validate values
    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
          ? null
          : "Invalid email",
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        )
          ? null
          : "Password must contain 8 characters with 1 uppercase 1 lowercase letter and 1 number or special character.",
    },
  });
  return (
    <div className=" bg-sign-bg bg-no-repeat bg-cover h-[100vh] px-[20px]">
      <div className="w-[80%] m-auto pt-[clamp(20px,2.7vw,40px)]">
        <Image src={"/images/afex.png"} alt={""} width={40} height={40} />
        <div className="flex justify-center lg:justify-between items-center flex-wrap-reverse lg:flex-nowrap gap-[clamp(30px,3.4vw,50px)] pt-[40px]">
          <div className="flex flex-col gap-[10px] items-center">
            <Image src={"/images/auth.png"} width={200} height={200} alt={""} />
            <p className="text-center text-COAL-MINE text-[clamp(22px,1.6vw,28px)] font-semibold font-switzer">
              Streaming your Login Experience with SSO
            </p>
            <p className="text-center max-w-[534px] text-[16px] text-GATEWAY-GREY">
              Welcome to our Single Sign-On login page! With just one set of
              login credentials, you can now access all your favorite
              applications and services without the need to enter multiple
              usernames and passwords
            </p>
          </div>
          <form className="bg-white rounded-[16px] px-[clamp(20px,1.5vw,30px)] shadow-lg ">
            <p className="text-[24px] text-COAL-MINE font-switzer font-semibold pt-[30px]">
              Sign in with SSO
            </p>
            <div className="flex flex-col gap-[8px] pt-[30px] pb-[20px]">
              <span className="text-[14px] text-COAL-MINE">Email Address</span>
              <TextInput
                {...myForm.getInputProps("email")}
                placeholder="Enter email address"
                styles={{
                  input: {
                    paddingBlock: "17px",
                    paddingInline: "16px",
                    width: "300px",
                    "::placeholder": {
                      fontSize: "14px",
                      color: "#9FA19C",
                    },
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-[8px] pb-[10px]">
              <span className="text-[14px] text-COAL-MINE">Password</span>
              <PasswordInput
                {...myForm.getInputProps("password")}
                styles={{
                  input: {
                    paddingBlock: "17px",
                    paddingInline: "16px",
                    width: "300px",
                    "::placeholder": {
                      fontSize: "14px",
                      color: "#9FA19C",
                    },
                  },
                  error: {
                    display: "flex",
                    maxWidth: "300px",
                  },
                }}
              />
            </div>
            <div className="flex justify-end pb-[30px]">
              <span className="text-[12px] font-switzer font-semibold text-HIGHWAY-TO-HELL">
                Forgot Password
              </span>
            </div>
            <Link
              href={"/dashboard"}
              onClick={() => myForm.onSubmit(() => console.log(myForm.values))}
              className="flex items-center w-[100%] index-btn justify-center mb-[30px] text-center text-[white] text-[16px]"
            >
              {/* Sign in */}
              {isPending ? <Loader size="md" /> : <span>Sign in</span>}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
